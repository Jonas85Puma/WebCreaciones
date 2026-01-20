"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Hammer, Eye, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

const projects = [
  {
    name: "LensArt Photography",
    img: "/Img/LensArt.webp",
    url: "https://lens-art-photography.vercel.app/",
    tags: ["Fotografía", "Artístico"],
    status: "live",
    description: "Portafolio fotográfico profesional con galería interactiva y diseño artístico minimalista."
  },
  {
    name: "GymFit Studio",
    img: "/Img/GymFit.webp",
    url: "https://gym-fit-studio.vercel.app/",
    tags: ["Fitness", "Dinámico"],
    status: "live",
    description: "Sitio web dinámico para gimnasio con videos de fondo y diseño energético moderno."
  },
  {
    name: "CreativeFlow Agency",
    img: "/Img/Creative_flow.webp",
    url: "https://creative-flow-agency.vercel.app/",
    tags: ["Agencia", "Innovador"],
    status: "live",
    description: "Agencia digital innovadora con animaciones avanzadas y diseño de vanguardia."
  },
  {
    name: "TechSolutions",
    img: "/Img/TechSOLUTIONS.webp",
    url: "https://tech-solutions-consultores.vercel.app/",
    tags: ["Tecnología", "Futurista"],
    status: "live",
    description: "Sitio web tecnológico con efectos de código y animaciones futuristas."
  },
  {
    name: "Moda Viva",
    img: "/Img/MODA.webp",
    url: "#",
    tags: ["Boutique", "Moda"],
    status: "dev",
    description: "Sitio web elegante para boutique de moda con animaciones y diseño sofisticado."
  },
  {
    name: "Aroma Urbano",
    img: "/Img/AROMA.webp",
    url: "#",
    tags: ["Café", "Gastronomía"],
    status: "dev",
    description: "Sitio web para café boutique con menú interactivo y ambiente acogedor."
  },
  {
    name: "ArchVision",
    img: "/Img/Archvision.webp",
    url: "#",
    tags: ["Arquitectura", "Minimalista"],
    status: "dev",
    description: "Sitio web moderno para estudio de arquitectura con diseño minimalista y elegante."
  },
];

const AUTOPLAY_INTERVAL = 5000; // 5 segundos entre cada proyecto

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev

  const activeProject = projects[activeIndex];

  // Navegar al siguiente proyecto
  const goToNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % projects.length);
  }, []);

  // Navegar al proyecto anterior
  const goToPrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  // Ir a un proyecto específico (click en miniatura)
  const goToProject = useCallback((index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    // Pausar brevemente al hacer click manual
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 3000);
  }, [activeIndex]);

  // Autoplay
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(goToNext, AUTOPLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [isPlaying, goToNext]);

  // Navegación con teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === " ") {
        e.preventDefault();
        setIsPlaying((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev]);

  // Variantes de animación para el fondo
  const backgroundVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      scale: 1.1,
      x: dir > 0 ? 100 : -100,
    }),
    center: {
      opacity: 1,
      scale: 1,
      x: 0,
    },
    exit: (dir: number) => ({
      opacity: 0,
      scale: 0.95,
      x: dir > 0 ? -100 : 100,
    }),
  };

  // Variantes para el contenido
  const contentVariants = {
    enter: { opacity: 0, y: 30 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <section
      id="portfolio"
      className="relative min-h-screen overflow-hidden bg-black"
    >
      {/* Imagen de fondo dinámica - DESKTOP: normal, MOBILE: estirada con más overlay */}
      <AnimatePresence mode="popLayout" custom={direction}>
        <motion.div
          key={activeIndex}
          custom={direction}
          variants={backgroundVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={activeProject.img}
            alt={activeProject.name}
            fill
            className="object-cover lg:object-cover object-center scale-125 lg:scale-100"
            priority
          />
          {/* Overlay para escritorio - sutil */}
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />

          {/* Overlay para móviles - más oscuro para que la imagen del primer plano destaque */}
          <div className="lg:hidden absolute inset-0 bg-black/70" />
          <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/70" />
        </motion.div>
      </AnimatePresence>

      {/* Contenido principal */}
      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center justify-between container mx-auto px-6 py-20 lg:py-0">

        {/* Imagen en primer plano - Solo visible en MÓVILES */}
        <div className="lg:hidden w-full mb-8 mt-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={`mobile-img-${activeIndex}`}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border-2 border-white/10"
            >
              <Image
                src={activeProject.img}
                alt={activeProject.name}
                fill
                className="object-cover"
                priority
              />
              {/* Gradiente sutil en la imagen */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              {/* Badge de estado en la imagen */}
              {activeProject.status === "dev" && (
                <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-orange-500/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <Hammer className="w-3.5 h-3.5 text-white" />
                  <span className="text-xs font-medium text-white">En desarrollo</span>
                </div>
              )}
              {activeProject.status === "live" && (
                <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-green-500/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                  </span>
                  <span className="text-xs font-medium text-white">En vivo</span>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Panel izquierdo - Información del proyecto */}
        <div className="flex-1 flex flex-col justify-center max-w-xl lg:pr-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="space-y-6"
              style={{
                textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 4px 16px rgba(0,0,0,0.6), 0 0 40px rgba(0,0,0,0.5)'
              }}
            >
              <Badge
                variant="outline"
                className="mb-2 text-sm border-white/30 text-white/90 bg-white/10 backdrop-blur-sm"
              >
                <Eye className="w-3 h-3 mr-1" />
                Portfolio • {activeIndex + 1} / {projects.length}
              </Badge>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {activeProject.name}
              </h2>

              <p className="text-lg text-white/70 leading-relaxed">
                {activeProject.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {activeProject.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="text-sm px-4 py-2 bg-white/10 backdrop-blur-sm text-white/90 rounded-full font-medium border border-white/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-4">
                {activeProject.status === "live" ? (
                  <Button
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-full group"
                    asChild
                  >
                    <Link href={activeProject.url} target="_blank">
                      <ExternalLink className="w-5 h-5 mr-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      Explorar
                    </Link>
                  </Button>
                ) : (
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white/70 px-8 py-6 text-lg rounded-full"
                    disabled
                  >
                    <Hammer className="w-5 h-5 mr-2" />
                    En Desarrollo
                  </Button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controles de navegación */}
          <div className="flex items-center gap-4 mt-10">
            <button
              onClick={goToPrev}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white transition-all"
              aria-label="Proyecto anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white transition-all"
              aria-label={isPlaying ? "Pausar" : "Reproducir"}
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </button>

            <button
              onClick={goToNext}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white transition-all"
              aria-label="Siguiente proyecto"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Indicador de progreso */}
            <div className="ml-4 flex-1 max-w-32 h-1 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-red-600"
                initial={{ width: "0%" }}
                animate={{ width: isPlaying ? "100%" : "0%" }}
                transition={{
                  duration: isPlaying ? AUTOPLAY_INTERVAL / 1000 : 0,
                  ease: "linear"
                }}
                key={`${activeIndex}-${isPlaying}`}
              />
            </div>
          </div>
        </div>

        {/* Panel derecho - Carrusel de miniaturas al borde derecho */}
        <div className="hidden lg:flex flex-shrink-0 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:pr-6">
          <div className="relative flex items-center gap-2 perspective-1000">
            {/* Efecto de blur detrás de las miniaturas */}
            <div className="absolute inset-0 -inset-x-4 -inset-y-6 bg-black/40 backdrop-blur-md rounded-2xl -z-10" />

            {projects.map((project, index) => {
              const isActive = index === activeIndex;
              const distance = index - activeIndex;

              return (
                <motion.button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`
                    relative overflow-hidden rounded-xl border-2 transition-all duration-300 flex-shrink-0
                    ${isActive
                      ? "border-white shadow-xl shadow-white/20 z-20"
                      : "border-white/20 hover:border-white/40 opacity-60 hover:opacity-90"
                    }
                  `}
                  style={{
                    width: isActive ? 120 : 80,
                    height: isActive ? 200 : 150,
                  }}
                  animate={{
                    scale: isActive ? 1 : 0.85,
                    y: isActive ? 0 : Math.abs(distance) * 5,
                    rotateY: distance * -5,
                    z: isActive ? 50 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  whileHover={{ scale: isActive ? 1.02 : 0.9 }}
                >
                  <Image
                    src={project.img}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />

                  {/* Indicador de proyecto activo */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute top-2 right-2"
                    >
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600" />
                      </span>
                    </motion.div>
                  )}

                  {/* Nombre del proyecto en miniatura activa */}
                  {isActive && (
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                      <p className="text-white text-xs font-medium truncate">
                        {project.name}
                      </p>
                    </div>
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Indicadores de punto en mobile */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 lg:hidden z-20">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToProject(index)}
            className={`
              w-2 h-2 rounded-full transition-all
              ${index === activeIndex ? "bg-white w-6" : "bg-white/40 hover:bg-white/60"}
            `}
            aria-label={`Ir al proyecto ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
