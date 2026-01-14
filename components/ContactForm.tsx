"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, Mail, MessageSquare, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      
      if (response.ok) {
        window.location.href = "/gracias";
      } else {
        alert("Error al enviar. Intenta nuevamente.");
      }
    } catch {
      alert("Error de conexión. Verifica tu internet.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-100 dark:bg-black relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-500 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <Badge variant="outline" className="mb-4 border-gray-300 dark:border-neutral-700 text-gray-700 dark:text-gray-300">
            <MessageSquare className="w-3 h-3 mr-1" />
            Contacto
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            ¿Listo para Despegar?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Cuéntame sobre tu proyecto y convirtamos tu visión en realidad digital
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 space-y-6 border border-gray-200 dark:border-neutral-800">
            <input type="hidden" name="access_key" value="40adae9e-fe9f-4617-b7a5-414a9148ff18" />
            <input type="hidden" name="subject" value="Nuevo contacto desde WebCreaciones" />
            <input type="hidden" name="redirect" value="https://web-creaciones.vercel.app/gracias" />
            
            {/* Header del formulario */}
            <div className="text-center pb-6 border-b-2 border-slate-100 dark:border-neutral-800">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-900 dark:bg-white rounded-2xl mb-4 shadow-lg">
                <Sparkles className="w-8 h-8 text-white dark:text-black" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Empecemos Hoy</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">Respuesta garantizada en menos de 24 horas</p>
            </div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-2"
          >
            <Label htmlFor="name" className="text-gray-700 dark:text-gray-300 font-semibold">Nombre completo *</Label>
            <Input 
              id="name" 
              name="name" 
              required 
              placeholder="Juan Pérez"
              className="h-12 border-2 border-slate-200 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white focus:border-blue-500 transition-all duration-300 hover:border-slate-300 dark:hover:border-neutral-500"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-2"
          >
            <Label htmlFor="email" className="text-gray-700 dark:text-gray-300 font-semibold">Email *</Label>
            <Input 
              id="email" 
              name="email" 
              type="email" 
              required 
              placeholder="juan@ejemplo.com"
              className="h-12 border-2 border-slate-200 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white focus:border-blue-500 transition-all duration-300 hover:border-slate-300 dark:hover:border-neutral-500"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="space-y-2"
          >
            <Label htmlFor="phone" className="text-gray-700 dark:text-gray-300 font-semibold">Teléfono (opcional)</Label>
            <Input 
              id="phone" 
              name="phone" 
              type="tel" 
              placeholder="+51 943 850 706"
              className="h-12 border-2 border-slate-200 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white focus:border-blue-500 transition-all duration-300 hover:border-slate-300 dark:hover:border-neutral-500"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-2"
          >
            <Label htmlFor="service" className="text-gray-700 dark:text-gray-300 font-semibold">Tipo de servicio *</Label>
            <Select name="service" required>
              <SelectTrigger aria-label="Selecciona un tipo de servicio" className="h-12 border-2 border-slate-200 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white focus:border-blue-500 transition-all duration-300 hover:border-slate-300 dark:hover:border-neutral-500">
                <SelectValue placeholder="Selecciona un servicio" />
              </SelectTrigger>
              <SelectContent className="bg-white dark:bg-neutral-800 border-2 shadow-lg max-h-[300px] dark:border-neutral-600">
                <SelectItem value="landing" className="dark:text-white dark:hover:bg-neutral-700">Landing Page Simple ($150)</SelectItem>
                <SelectItem value="website" className="dark:text-white dark:hover:bg-neutral-700">Sitio Web Básico ($300)</SelectItem>
                <SelectItem value="maintenance" className="dark:text-white dark:hover:bg-neutral-700">Mantenimiento Mensual ($80/mes)</SelectItem>
                <SelectItem value="other" className="dark:text-white dark:hover:bg-neutral-700">Otro / Consulta</SelectItem>
              </SelectContent>
            </Select>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="space-y-2"
          >
            <Label htmlFor="message" className="text-gray-700 dark:text-gray-300 font-semibold">Cuéntame sobre tu proyecto *</Label>
            <Textarea 
              id="message" 
              name="message" 
              required 
              rows={5} 
              placeholder="Describe qué necesitas..."
              className="resize-none border-2 border-slate-200 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white focus:border-blue-500 transition-all duration-300 hover:border-slate-300 dark:hover:border-neutral-500"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
          >
            <Button 
              type="submit" 
              className="w-full h-14 text-lg font-semibold bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 group" 
              size="lg" 
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Enviando...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send className="mr-2 h-5 w-5" />
                  Enviar mensaje
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </span>
              )}
            </Button>
          </motion.div>
        </form>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-center mt-8 text-white/90 text-lg"
        >
          O escríbeme directamente a{" "}
          <a href="mailto:webcreaciones.dev@gmail.com" className="font-bold hover:underline underline-offset-4 decoration-2">
            webcreaciones.dev@gmail.com
          </a>
        </motion.p>
      </div>
    </section>
  );
}
