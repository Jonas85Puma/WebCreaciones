"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code2, Palette, Zap, Check, TrendingUp, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  { 
    icon: Code2, 
    title: "Landing Page", 
    price: "$99", 
    oldPrice: "$150",
    discount: "67% OFF",
    popular: false,
    gradient: "from-blue-500 to-cyan-500",
    features: [
      "Diseño responsivo profesional", 
      "Información de contacto", 
      "Formulario integrado", 
      "1 página optimizada",
      "Hosting incluido (Vercel)"
    ], 
    time: "5-7 días",
    description: "Perfecta para validar tu idea"
  },
  { 
    icon: Palette, 
    title: "Sitio Web Completo", 
    price: "$249", 
    oldPrice: "$300",
    discount: "17% OFF",
    popular: true,
    gradient: "from-purple-500 to-pink-500",
    features: [
      "Hasta 5 páginas", 
      "Diseño 100% personalizado", 
      "Formularios múltiples", 
      "Galería de imágenes", 
      "Mapa interactivo",
      "SEO optimizado"
    ], 
    time: "1-2 semanas",
    description: "La solución más completa"
  },
  { 
    icon: Zap, 
    title: "Mantenimiento", 
    price: "$50/mes", 
    oldPrice: "$80/mes",
    discount: "38% OFF",
    popular: false,
    gradient: "from-orange-500 to-red-500",
    features: [
      "Actualizaciones ilimitadas", 
      "Corrección de bugs", 
      "Backups automáticos", 
      "Mejoras de diseño",
      "Soporte prioritario 24/7"
    ], 
    time: "Mensual",
    description: "Mantén tu web siempre actualizada"
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-linear-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-black dark:via-black dark:to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <Badge variant="outline" className="mb-4 dark:border-neutral-600 dark:text-gray-300">
            <TrendingUp className="w-3 h-3 mr-1" />
            Servicios
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-linear-to-r from-slate-900 via-purple-800 to-pink-900 dark:from-white dark:via-purple-300 dark:to-pink-300 bg-clip-text text-transparent">
            Planes para Cada Necesidad
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">Soluciones web profesionales adaptadas a tu presupuesto</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <Card 
                  className={`relative group hover:shadow-2xl transition-all duration-500 h-full flex flex-col bg-white dark:bg-neutral-900 ${
                    service.popular ? 'border-4 border-purple-200 dark:border-purple-900 shadow-xl scale-105' : 'border-2 hover:border-blue-200 dark:border-neutral-800 dark:hover:border-neutral-700'
                  }`}
                >
                  {service.popular && (
                    <motion.div
                      initial={{ scale: 0.8, y: -10 }}
                      animate={{ scale: 1, y: 0 }}
                      transition={{ duration: 0.5, type: "spring" }}
                    >
                      <Badge className={`absolute -top-4 left-1/2 -translate-x-1/2 bg-linear-to-r ${service.gradient} text-white shadow-lg px-4 py-1.5`}>
                        <Sparkles className="w-3 h-3 mr-1" />
                        Más Popular
                      </Badge>
                    </motion.div>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 mx-auto bg-linear-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl mb-2 dark:text-white">{service.title}</CardTitle>
                    <CardDescription className="text-sm dark:text-gray-400">{service.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6 flex-1 flex flex-col">
                    <div className={`text-center py-4 bg-linear-to-r ${service.gradient} bg-clip-text`}>
                      {service.discount && (
                        <Badge className="mb-2 bg-red-500 text-white text-xs font-bold px-2 py-1">
                          {service.discount}
                        </Badge>
                      )}
                      <div className="flex items-center justify-center gap-2">
                        {service.oldPrice && (
                          <span className="text-2xl font-semibold text-gray-400 dark:text-gray-500 line-through">
                            {service.oldPrice}
                          </span>
                        )}
                        <div className="text-5xl font-bold text-transparent">{service.price}</div>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Entrega: {service.time}</p>
                    </div>
                    
                    <ul className="space-y-3 flex-1">
                      {service.features.map((f, j) => (
                        <motion.li 
                          key={j}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: j * 0.1 }}
                          className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300"
                        >
                          <Check className={`w-5 h-5 shrink-0 mt-0.5 text-green-500 dark:text-green-400`} />
                          <span>{f}</span>
                        </motion.li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full group/btn ${service.popular ? `bg-linear-to-r ${service.gradient} text-white hover:shadow-xl` : 'dark:border-neutral-600 dark:text-white dark:hover:bg-neutral-700'}`}
                      variant={service.popular ? "default" : "outline"}
                      size="lg"
                      asChild
                    >
                      <Link href="#contacto">
                        Solicitar Ahora
                        <motion.span
                          className="ml-2"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          →
                        </motion.span>
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
