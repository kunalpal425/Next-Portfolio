'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function EarthGlobe() {
  const containerRef = useRef(null);
  const frameRef = useRef(null);
  const mountedRef = useRef(false); // ⭐ prevents duplicate init
  const rendererRef = useRef(null); // ⭐ store renderer

  useEffect(() => {
    // 🚨 prevent double mount (VERY IMPORTANT)
    if (mountedRef.current) return;
    mountedRef.current = true;

    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // =============================
    // Scene
    // =============================
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 3.2;

    // ✅ optimized renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: false, // ⭐ BIG perf boost
      alpha: true,
      powerPreference: 'high-performance',
    });

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    // =============================
    // Lights
    // =============================
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));

    const light = new THREE.PointLight(0x4cc9ff, 2);
    light.position.set(5, 3, 5);
    scene.add(light);

    // =============================
    // Globe
    // =============================
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    const radius = 0.9;
    const dots = 3500; // ⭐ reduced from 6000 (big perf win)

    const positions = new Float32Array(dots * 3);

    for (let i = 0; i < dots; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }

    const dotGeometry = new THREE.BufferGeometry();
    dotGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    );

    const dotMaterial = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.012,
      transparent: true,
      opacity: 0.9,
      depthWrite: false, // ⭐ perf boost
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
      if (!containerRef.current || !rendererRef.current) return;

      const w = container.clientWidth;
      const h = container.clientHeight;

      rendererRef.current.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    // =============================
    // Cleanup (VERY IMPORTANT)
    // =============================
    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener('resize', handleResize);

      dotGeometry.dispose();
      dotMaterial.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      mountedRef.current = false; // ⭐ allow remount if needed
    };
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-transparent">
      <div ref={containerRef} className="w-[500px] h-[500px]" />
    </div>
  );
}