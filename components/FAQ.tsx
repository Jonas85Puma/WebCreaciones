"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { HelpCircle, MessageCircleQuestion, Shield } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
  { q: "¿Cuánto tiempo tardarás en crear mi página web?", a: "Dependiendo del tipo de proyecto: Landing Page (5-7 días), Sitio Web Completo (1-2 semanas). Si no entrego en el tiempo acordado, ¡te devuelvo el 20% de tu inversión! Esta es mi garantía de tiempo de entrega." },
  { q: "¿Incluyes hosting y dominio?", a: "El desarrollo incluye hosting gratuito en Vercel con CDN global. Para tu dominio personalizado, tengo una alianza exclusiva con Hostinger: usando mi código de referido obtienes un 20% de descuento en tu dominio y hosting. Te ayudo a configurarlo todo sin costo adicional." },
  { q: "¿Qué garantías ofrecen?", a: "Ofrezco dos garantías: 1) Garantía de tiempo - Si no entrego en la fecha acordada, te devuelvo el 20% del costo total. 2) Garantía de satisfacción - Trabajamos juntos hasta que estés 100% conforme con el resultado." },
  { q: "¿Puedo hacer cambios después de la entrega?", a: "Sí, incluyo 2 revisiones gratuitas durante el desarrollo y 30 días de soporte gratuito después de la entrega para ajustes menores. Para cambios mayores, puedes contratar el plan de mantenimiento mensual." },
  { q: "¿Mi sitio será responsive?", a: "¡Absolutamente! Todos mis diseños se adaptan perfectamente a celulares, tablets y computadoras. Utilizo las últimas tecnologías (Next.js, Tailwind) para garantizar una experiencia óptima en todos los dispositivos." },
  { q: "¿Qué necesitas de mí para empezar?", a: "Principalmente: contenido (textos e imágenes de calidad), colores/estilo preferido, ejemplos de sitios que te gusten, y tu logo si tienes uno. Te guío en todo el proceso para que sea lo más simple posible." },
];


export default function FAQ() {
  return (
    <section id="faq" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-linear-to-br from-slate-50 to-blue-50/50 dark:from-black dark:to-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-400/5 dark:bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/5 dark:bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <Badge variant="outline" className="mb-4 dark:border-neutral-600 dark:text-gray-300">
            <MessageCircleQuestion className="w-3 h-3 mr-1" />
            FAQ
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-linear-to-r from-slate-900 via-blue-800 to-purple-900 dark:from-white dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent">
            Preguntas Frecuentes
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Todo lo que necesitas saber antes de empezar tu proyecto
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-6 sm:p-8 md:p-10 shadow-2xl border-2 border-slate-100 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <AccordionItem value={`item-${i}`} className="border-2 rounded-xl px-6 hover:border-blue-200 dark:border-neutral-800 dark:hover:border-neutral-700 transition-colors bg-white dark:bg-neutral-900 shadow-sm">
                    <AccordionTrigger className="text-left text-base sm:text-lg font-semibold hover:text-blue-600 dark:text-white dark:hover:text-blue-400 py-5 hover:no-underline">
                      <span className="flex items-start gap-3">
                        <HelpCircle className="w-5 h-5 mt-1 text-blue-500 shrink-0" />
                        {faq.q}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300 text-sm sm:text-base pb-5 pt-2 pl-8">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </Card>
        </motion.div>

        {/* Tarjeta de Garantía Destacada */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 sm:mt-14"
        >
          <div className="bg-linear-to-r from-green-500 to-emerald-600 rounded-2xl p-6 sm:p-8 text-center text-white shadow-xl relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">
                🛡️ Garantía de Tiempo de Entrega
              </h3>
              <p className="text-green-50 text-sm sm:text-base max-w-md mx-auto">
                Si no entrego tu proyecto en el tiempo acordado,
                <span className="font-bold text-white"> te devuelvo el 20% </span>
                de tu inversión. ¡Sin preguntas, sin excusas!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
