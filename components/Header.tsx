"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

// WhatsApp SVG Icon
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#portfolio", label: "Proyectos" },
    { href: "#servicios", label: "Servicios" },
    { href: "#faq", label: "FAQ" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-black/80 md:bg-transparent md:backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#hero" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer" aria-label="Ir al inicio">
            <Image src="/logo-full.svg" alt="WebCreaciones - Desarrollo Web Profesional" width={220} height={60} className="h-12 md:h-14 w-auto dark:brightness-110" priority />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Navegación principal">
            {links.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium px-3 lg:px-4 py-2 rounded-lg hover:bg-white/20 dark:hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
            <ThemeToggle />
            <Button asChild size="default" className="ml-2 bg-[#25D366] hover:bg-[#128C7E] shadow-lg hover:shadow-xl transition-all">
              <a href="https://wa.me/51943850706?text=Hola, me interesa hacer una página web" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              className="p-2 hover:bg-white/20 dark:hover:bg-white/10 rounded-lg transition-colors"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" /> : <Menu className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden py-4 bg-white/90 dark:bg-black/90 backdrop-blur-lg rounded-2xl mt-2 animate-in slide-in-from-top" aria-label="Menú móvil">
            {links.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={() => setMenuOpen(false)} 
                className="block py-3 px-4 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="px-4 pt-2">
              <Button asChild className="w-full bg-[#25D366] hover:bg-[#128C7E] shadow-lg" size="lg">
                <a href="https://wa.me/51943850706?text=Hola, me interesa hacer una página web" target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
