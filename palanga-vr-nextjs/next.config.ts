import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Statinis eksportas — GitHub Pages serveriuoja HTML/CSS/JS be Node.js serverio
  output: "export",

  // /games/ninja-trials -> /games/ninja-trials/index.html (veikia GitHub Pages)
  trailingSlash: true,

  // GitHub Pages neturi image optimizacijos serverio
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
