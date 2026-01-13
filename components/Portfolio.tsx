"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Hammer, Eye, X, ZoomIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const projects = [
  { name: "LensArt Photography", img: "/Img/LensArt.webp", url: "https://lens-art-photography.vercel.app/", tags: ["Fotografía", "Artístico"], status: "live" },
  { name: "GymFit Studio", img: "/Img/GymFit.webp", url: "https://gym-fit-studio.vercel.app/", tags: ["Fitness", "Dinámico"], status: "live" },
  { name: "CreativeFlow Agency", img: "/Img/Creative_flow.webp", url: "https://creative-flow-agency.vercel.app/", tags: ["Agencia", "Innovador"], status: "live" },
  { name: "TechSolutions", img: "/Img/TechSOLUTIONS.webp", url: "https://tech-solutions-consultores.vercel.app/", tags: ["Tecnología", "Futurista"], status: "live" },
  { name: "Moda Viva", img: "/Img/MODA.webp", url: "#", tags: ["Boutique", "Moda"], status: "dev" },
  { name: "Aroma Urbano", img: "/Img/AROMA.webp", url: "#", tags: ["Café", "Gastronomía"], status: "dev" },
  { name: "ArchVision", img: "/Img/Archvision.webp", url: "#", tags: ["Arquitectura", "Minimalista"], status: "dev" },
];

export default function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; name: string } | null>(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxImage(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Prevent scroll when lightbox is open
  useEffect(() => {
    if (lightboxImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [lightboxImage]);

  return (
    <section id="portfolio" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-black relative overflow-hidden">      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <Badge variant="outline" className="mb-4 text-sm border-slate-300 dark:border-neutral-600 text-gray-700 dark:text-gray-300">
            <Eye className="w-3 h-3 mr-1" />
            Portfolio
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-slate-900 dark:text-white">
            Proyectos que Inspiran
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Cada proyecto cuenta una historia. Explora mi trabajo y descubre cómo puedo ayudarte.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-neutral-800 hover:border-slate-300 dark:hover:border-neutral-700 bg-white dark:bg-neutral-900">
                <div 
                  className="relative h-64 overflow-hidden bg-slate-100 dark:bg-neutral-800 cursor-pointer"
                  onClick={() => setLightboxImage({ src: project.img, name: project.name })}
                >
                  <Image 
                    src={project.img} 
                    alt={project.name} 
                    fill 
                    className={`object-cover transition-all duration-500 ${hoveredIndex === i ? 'scale-105 opacity-90' : 'scale-100'}`}
                  />
                  
                  {/* Zoom overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <ZoomIn className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {project.status === "live" && (
                    <Badge className="absolute top-4 right-4 bg-green-500 text-white shadow-md border-0">
                      <span className="relative flex h-2 w-2 mr-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                      </span>
                      Live
                    </Badge>
                  )}
                </div>
                
                <CardContent className="p-6 space-y-4 bg-white dark:bg-neutral-900 text-gray-900 dark:text-white">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.name}</h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, j) => (
                      <span 
                        key={j} 
                        className="text-xs px-3 py-1.5 bg-slate-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-300 rounded-full font-medium border border-slate-200 dark:border-neutral-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {project.status === "live" ? (
                    <Button variant="default" className="w-full group/btn bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-gray-200 text-white dark:text-slate-900" asChild>
                      <Link href={project.url} target="_blank">
                        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                        Ver Proyecto
                      </Link>
                    </Button>
                  ) : (
                    <Button variant="outline" className="w-full border-slate-300 dark:border-neutral-600 text-gray-600 dark:text-gray-400" disabled>
                      <Hammer className="w-4 h-4 mr-2" />
                      En Desarrollo
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button 
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50"
              onClick={() => setLightboxImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-6xl max-h-[90vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 90vw"
              />
              <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-lg font-semibold bg-black/50 px-4 py-2 rounded-full">
                {lightboxImage.name}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
