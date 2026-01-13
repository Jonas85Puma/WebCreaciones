"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projectsBase = [
  { src: "/Img/LensArt.webp", title: "LensArt" },
  { src: "/Img/GymFit.webp", title: "GymFit" },
  { src: "/Img/Creative_flow.webp", title: "Creative Flow" },
  { src: "/Img/TechSOLUTIONS.webp", title: "Tech Solutions" },
  { src: "/Img/MODA.webp", title: "Moda Viva" },
  { src: "/Img/AROMA.webp", title: "Aroma Urbano" },
  { src: "/Img/Archvision.webp", title: "Archvision" },
];

// Duplicar 4 veces para efecto infinito suave
const projects = [...projectsBase, ...projectsBase, ...projectsBase, ...projectsBase];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-slate-50 via-white to-blue-50 dark:from-black dark:via-black dark:to-black overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 -left-40 w-72 h-72 md:w-96 md:h-96 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 -right-40 w-72 h-72 md:w-96 md:h-96 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />
      
      {/* Image carousel ribbons - visible on all screens */}
      <div className="absolute left-0 top-1/4 w-full overflow-hidden -rotate-12 opacity-60 md:opacity-50">
        <div className="flex gap-3 md:gap-4 animate-scroll-left">
          {projects.map((project, i) => (
            <div key={i} className="relative w-32 h-20 md:w-48 md:h-32 shrink-0 rounded-lg md:rounded-xl overflow-hidden shadow-lg md:shadow-xl border-2 md:border-4 border-white dark:border-neutral-800">
              <Image
                src={project.src}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute right-0 bottom-1/4 w-full overflow-hidden rotate-12 opacity-60 md:opacity-50">
        <div className="flex gap-3 md:gap-4 animate-scroll-right">
          {projects.map((project, i) => (
            <div key={i} className="relative w-32 h-20 md:w-48 md:h-32 shrink-0 rounded-lg md:rounded-xl overflow-hidden shadow-lg md:shadow-xl border-2 md:border-4 border-white dark:border-neutral-800">
              <Image
                src={project.src}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-white/60 md:bg-white/50 xl:bg-white/40 dark:bg-black/70 dark:md:bg-black/60 dark:xl:bg-black/50 backdrop-blur-[1px] md:backdrop-blur-[2px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 sm:py-16 md:py-20">
        <div className="max-w-5xl mx-auto text-center space-y-6 sm:space-y-8">
          {/* Badge */}
          <div className="flex justify-center">
            <Badge variant="secondary" className="inline-flex items-center gap-2 bg-blue-100/90 dark:bg-blue-900/30 backdrop-blur-sm text-blue-700 dark:text-blue-300 px-4 py-2 text-xs sm:text-sm font-medium hover:bg-blue-200/90 dark:hover:bg-blue-800/30 transition-colors" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              Disponible para nuevos proyectos
            </Badge>
          </div>
          
          {/* Main heading */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight px-2 text-slate-900 dark:text-white" style={{ textShadow: '0 3px 15px rgba(0,0,0,0.25), 0 1px 3px rgba(0,0,0,0.15)' }}>
            Tu Primera Página Web en{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient" style={{ textShadow: 'none' }}>
                Una Semana
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                <path d="M1 5.5C50 1.5 100 1.5 199 5.5" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="50%" stopColor="#9333EA" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 font-medium" style={{ textShadow: '0 2px 8px rgba(255,255,255,0.9), 0 1px 3px rgba(0,0,0,0.1)' }}>
            Desarrollador frontend especializado en crear sitios web modernos, funcionales y 100% responsivos. 
            Presencia digital de calidad profesional con precios accesibles para emprendedores.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-2 sm:pt-4 px-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-full shadow-lg hover:shadow-2xl transition-all hover:scale-105 group" 
              asChild
            >
              <Link href="https://wa.me/51943850706?text=Hola, me interesa hacer una página web">
                Conversemos por WhatsApp
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-full border-2 hover:bg-gray-50 dark:hover:bg-neutral-800 dark:border-neutral-600 dark:text-white transition-all" 
              asChild
            >
              <Link href="#portfolio">Ver Ejemplos</Link>
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 pt-6 sm:pt-8 px-4 text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              Garantía 30 días
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              Entrega rápida
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              100% Responsivo
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
