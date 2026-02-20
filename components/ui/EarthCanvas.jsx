'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function EarthGlobe() {
  const containerRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // =============================
    // Scene
    // =============================
    const scene = new THREE.Scene(); // ✅ no background

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 3.2;

    // ✅ transparent renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0); // fully transparent
    containerRef.current.appendChild(renderer.domElement);

    // =============================
    // Lights
    // =============================
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));

    const light = new THREE.PointLight(0x4cc9ff, 2);
    light.position.set(5, 3, 5);
    scene.add(light);

    // =============================
    // 🌍 DOTTED GLOBE
    // =============================
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    const radius = 0.9;
    const dots = 6000;

    const positions = new Float32Array(dots * 3);

    for (let i = 0; i < dots; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }

    const dotGeometry = new THREE.BufferGeometry();
    dotGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const dotMaterial = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.012,
      transparent: true,
      opacity: 0.9,
    });

    const dotGlobe = new THREE.Points(dotGeometry, dotMaterial);
    globeGroup.add(dotGlobe);

    // =============================
    // Animation
    // =============================
    const animate = () => {
      globeGroup.rotation.y += 0.0015;
      renderer.render(scene, camera);
      frameRef.current = requestAnimationFrame(animate);
    };
    animate();

    // =============================
    // Resize
    // =============================
    const handleResize = () => {
      if (!containerRef.current) return;

      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;

      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    // =============================
    // Cleanup
    // =============================
    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-transparent">
      <div ref={containerRef} className="w-[500px] h-[500px]" />
    </div>
  );
}
