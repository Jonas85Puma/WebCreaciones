import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  
  // Optimizaciones de rendimiento
  experimental: {
    // Optimizar paquetes para reducir tamaño del bundle
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  
  // Desactivar source maps en producción para reducir tamaño
  productionBrowserSourceMaps: false,
};

export default nextConfig;
