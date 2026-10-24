const ImgPath = {
  auraVault: "/aura-vault.png",
  portfolio: "/portfolio.png",
  eventManagement: "/event-management.png",
};

const videoPath = {
  earth: "/earth.mp4",
};

const projects = [
  {
    title: "Aura Vault",
    description: "A revolutionary vault for storing digital assets.",
    image: ImgPath.auraVault,
  },
  {
    title: "Portfolio",
    description: "A modern personal portfolio built with Next.js and Tailwind CSS.",
    image: ImgPath.portfolio,
  },
  {
    title: "Event-Management",
    description: "A clean and responsive event management application.",
    image: ImgPath.eventManagement,
  }
];

export { ImgPath, videoPath, projects };
export default ImgPath;
