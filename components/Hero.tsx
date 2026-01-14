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

// Duplicar 6 veces para efecto infinito suave en móviles
const projects = [...projectsBase, ...projectsBase, ...projectsBase, ...projectsBase, ...projectsBase, ...projectsBase];

export default function Hero() {
  return (
    <section id="hero" className="relative h-dvh min-h-[580px] max-h-[900px] flex items-center justify-center bg-linear-to-br from-slate-50 via-white to-blue-50 dark:from-black dark:via-black dark:to-black overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-10 -left-32 w-64 h-64 md:w-96 md:h-96 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-10 -right-32 w-64 h-64 md:w-96 md:h-96 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl" aria-hidden="true" />
      
      {/* Image carousel ribbons - visible on all screens */}
      <div className="absolute left-0 top-[20%] w-[200%] overflow-hidden -rotate-12 opacity-50 md:opacity-40" aria-hidden="true">
        <div className="flex gap-2 md:gap-4 animate-scroll-left will-change-transform">
          {projects.map((project, i) => (
            <div key={i} className="relative w-24 h-16 md:w-48 md:h-32 shrink-0 rounded-lg overflow-hidden shadow-lg border-2 border-white/50 dark:border-neutral-800/50">
              <Image
                src={project.src}
                alt=""
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 96px, 192px"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute right-0 bottom-[20%] w-[200%] overflow-hidden rotate-12 opacity-50 md:opacity-40" aria-hidden="true">
        <div className="flex gap-2 md:gap-4 animate-scroll-right will-change-transform">
          {projects.map((project, i) => (
            <div key={i} className="relative w-24 h-16 md:w-48 md:h-32 shrink-0 rounded-lg overflow-hidden shadow-lg border-2 border-white/50 dark:border-neutral-800/50">
              <Image
                src={project.src}
                alt=""
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 96px, 192px"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-white/70 md:bg-white/50 dark:bg-black/80 dark:md:bg-black/60 backdrop-blur-[1px]" aria-hidden="true" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-2 sm:space-y-3 md:space-y-5">
          {/* Badge */}
          <div className="flex justify-center">
            <Badge variant="secondary" className="inline-flex items-center gap-1.5 bg-blue-100/90 dark:bg-blue-900/30 backdrop-blur-sm text-blue-700 dark:text-blue-300 px-2.5 py-1 text-[10px] sm:text-xs md:text-sm font-medium">
              <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3" aria-hidden="true" />
              Disponible para proyectos
            </Badge>
          </div>
          
          {/* Main heading */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight text-slate-900 dark:text-white">
            Tu Primera Página Web en{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient">
                Una Semana
              </span>
              <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full" height="6" viewBox="0 0 200 8" fill="none" aria-hidden="true">
                <path d="M1 5.5C50 1.5 100 1.5 199 5.5" stroke="url(#hero-gradient)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="50%" stopColor="#9333EA" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed px-2">
            Desarrollador frontend especializado en crear sitios web modernos, funcionales y 100% responsivos. 
            Presencia digital profesional con precios accesibles.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center pt-1 sm:pt-4 px-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-5 sm:px-8 py-4 sm:py-6 text-sm sm:text-lg rounded-full shadow-lg hover:shadow-2xl transition-all hover:scale-105 group" 
              asChild
            >
              <Link href="https://wa.me/51943850706?text=Hola, me interesa hacer una página web">
                Conversemos por WhatsApp
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto px-5 sm:px-8 py-4 sm:py-6 text-sm sm:text-lg rounded-full border-2 hover:bg-gray-50 dark:hover:bg-neutral-800 dark:border-neutral-600 dark:text-white transition-all" 
              asChild
            >
              <Link href="#portfolio">Ver Ejemplos</Link>
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 gap-y-1 sm:gap-y-2 pt-2 sm:pt-6 px-2 sm:px-4 text-xs sm:text-base text-gray-700 dark:text-gray-300 font-medium">
            <span className="flex items-center gap-1 sm:gap-2">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" aria-hidden="true" />
              Garantía 30 días
            </span>
            <span className="flex items-center gap-1 sm:gap-2">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" aria-hidden="true" />
              Entrega rápida
            </span>
            <span className="flex items-center gap-1 sm:gap-2">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" aria-hidden="true" />
              100% Responsivo
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
