import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  
  // Optimizaciones de rendimiento
  experimental: {
    // Optimizar paquetes para reducir tamaño del bundle
    optimizePackageImports: ["lucide-react", "framer-motion", "@radix-ui/react-accordion", "@radix-ui/react-select"],
    // CSS optimizado
    optimizeCss: true,
  },
  
  // Desactivar source maps en producción
  productionBrowserSourceMaps: false,
  
  // Comprimir output
  compress: true,
};

export default nextConfig;
