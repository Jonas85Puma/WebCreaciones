import { Mail, Phone, MapPin, Github, Linkedin, Facebook } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image src="/logo-full.svg" alt="WebCreaciones" width={180} height={50} className="h-10 w-auto mb-4 brightness-110" />
            <p className="text-slate-300 text-sm leading-relaxed">
              Transformamos ideas en experiencias digitales profesionales. 
              Desarrollo web moderno para emprendedores y pequeños negocios.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contacto</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:webcreaciones.dev@gmail.com" className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors group">
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">webcreaciones.dev@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+51943850706" className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors group">
                  <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">+51 943 850 706</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Lima, Perú</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#portfolio" className="text-slate-300 hover:text-blue-400 transition-colors text-sm">Proyectos</a></li>
              <li><a href="#servicios" className="text-slate-300 hover:text-blue-400 transition-colors text-sm">Servicios y Precios</a></li>
              <li><a href="#faq" className="text-slate-300 hover:text-blue-400 transition-colors text-sm">Preguntas Frecuentes</a></li>
              <li><a href="#contacto" className="text-slate-300 hover:text-blue-400 transition-colors text-sm">Contacto</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Síguenos</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-neutral-700 dark:bg-neutral-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-700 dark:bg-neutral-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-700 dark:bg-neutral-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
            <p className="text-slate-400 text-xs mt-4">
              ¿Tienes un proyecto en mente?<br/>
              <Link href="#contacto" className="text-blue-400 hover:text-blue-300 font-medium">
                Hablemos →
              </Link>
            </p>
          </div>
        </div>

        <Separator className="bg-neutral-700 dark:bg-neutral-800 mb-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
          <p>© {currentYear} WebCreaciones. Todos los derechos reservados.</p>
          <p className="text-xs">Hecho con ❤️ en Lima, Perú</p>
        </div>
      </div>
    </footer>
  );
}
