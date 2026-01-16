"use client";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, MessageSquare, Sparkles, AlertCircle, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

// Lista de países con códigos y longitud de teléfono
const countries = [
  { code: "PE", dial: "+51", name: "Perú", flag: "🇵🇪", minLen: 9, maxLen: 9 },
  { code: "MX", dial: "+52", name: "México", flag: "🇲🇽", minLen: 10, maxLen: 10 },
  { code: "AR", dial: "+54", name: "Argentina", flag: "🇦🇷", minLen: 10, maxLen: 11 },
  { code: "CO", dial: "+57", name: "Colombia", flag: "🇨🇴", minLen: 10, maxLen: 10 },
  { code: "CL", dial: "+56", name: "Chile", flag: "🇨🇱", minLen: 9, maxLen: 9 },
  { code: "EC", dial: "+593", name: "Ecuador", flag: "🇪🇨", minLen: 9, maxLen: 9 },
  { code: "VE", dial: "+58", name: "Venezuela", flag: "🇻🇪", minLen: 10, maxLen: 10 },
  { code: "BO", dial: "+591", name: "Bolivia", flag: "🇧🇴", minLen: 8, maxLen: 8 },
  { code: "PY", dial: "+595", name: "Paraguay", flag: "🇵🇾", minLen: 9, maxLen: 9 },
  { code: "UY", dial: "+598", name: "Uruguay", flag: "🇺🇾", minLen: 8, maxLen: 9 },
  { code: "US", dial: "+1", name: "Estados Unidos", flag: "🇺🇸", minLen: 10, maxLen: 10 },
  { code: "ES", dial: "+34", name: "España", flag: "🇪🇸", minLen: 9, maxLen: 9 },
  { code: "BR", dial: "+55", name: "Brasil", flag: "🇧🇷", minLen: 10, maxLen: 11 },
  { code: "PA", dial: "+507", name: "Panamá", flag: "🇵🇦", minLen: 8, maxLen: 8 },
  { code: "CR", dial: "+506", name: "Costa Rica", flag: "🇨🇷", minLen: 8, maxLen: 8 },
  { code: "GT", dial: "+502", name: "Guatemala", flag: "🇬🇹", minLen: 8, maxLen: 8 },
  { code: "HN", dial: "+504", name: "Honduras", flag: "🇭🇳", minLen: 8, maxLen: 8 },
  { code: "SV", dial: "+503", name: "El Salvador", flag: "🇸🇻", minLen: 8, maxLen: 8 },
  { code: "NI", dial: "+505", name: "Nicaragua", flag: "🇳🇮", minLen: 8, maxLen: 8 },
  { code: "DO", dial: "+1", name: "Rep. Dominicana", flag: "🇩🇴", minLen: 10, maxLen: 10 },
  { code: "CU", dial: "+53", name: "Cuba", flag: "🇨🇺", minLen: 8, maxLen: 8 },
  { code: "PR", dial: "+1", name: "Puerto Rico", flag: "🇵🇷", minLen: 10, maxLen: 10 },
];

// Validación de email
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

// Validación de teléfono
const validatePhone = (phone: string, country: typeof countries[0] | undefined): { valid: boolean; message: string } => {
  if (!phone) return { valid: true, message: "" }; // Opcional
  
  const digitsOnly = phone.replace(/\D/g, "");
  
  if (!country) {
    return { valid: digitsOnly.length >= 7 && digitsOnly.length <= 15, message: digitsOnly.length < 7 ? "Número muy corto" : "" };
  }
  
  if (digitsOnly.length < country.minLen) {
    return { valid: false, message: `Mínimo ${country.minLen} dígitos para ${country.name}` };
  }
  if (digitsOnly.length > country.maxLen) {
    return { valid: false, message: `Máximo ${country.maxLen} dígitos para ${country.name}` };
  }
  
  return { valid: true, message: "" };
};

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [countryCode, setCountryCode] = useState("PE");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [phoneTouched, setPhoneTouched] = useState(false);

  const selectedCountry = useMemo(() => countries.find(c => c.code === countryCode), [countryCode]);
  
  const emailValidation = useMemo(() => {
    if (!emailTouched || !email) return { valid: true, message: "" };
    return { valid: validateEmail(email), message: validateEmail(email) ? "" : "Email inválido" };
  }, [email, emailTouched]);

  const phoneValidation = useMemo(() => {
    if (!phoneTouched || !phone) return { valid: true, message: "" };
    return validatePhone(phone, selectedCountry);
  }, [phone, phoneTouched, selectedCountry]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Solo permitir números, espacios y guiones
    const value = e.target.value.replace(/[^\d\s-]/g, "");
    setPhone(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validar antes de enviar
    if (!validateEmail(email)) {
      setEmailTouched(true);
      return;
    }
    
    if (phone && !validatePhone(phone, selectedCountry).valid) {
      setPhoneTouched(true);
      return;
    }

    setLoading(true);
    const formData = new FormData(e.currentTarget);
    
    // Agregar teléfono con código de país
    if (phone) {
      formData.set("phone", `${selectedCountry?.dial} ${phone}`);
    }
    
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
      
      <div className="container mx-auto px-3 sm:px-6 lg:px-8 max-w-2xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-10"
        >
          <Badge variant="outline" className="mb-3 sm:mb-4 border-gray-300 dark:border-neutral-700 text-gray-700 dark:text-gray-300 text-xs sm:text-sm">
            <MessageSquare className="w-3 h-3 mr-1" />
            Contacto
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 text-gray-900 dark:text-white">
            ¿Listo para Despegar?
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto px-2">
            Cuéntame sobre tu proyecto y convirtamos tu visión en realidad digital
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="bg-white dark:bg-neutral-900 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-5 border border-gray-200 dark:border-neutral-800">
            <input type="hidden" name="access_key" value="40adae9e-fe9f-4617-b7a5-414a9148ff18" />
            <input type="hidden" name="subject" value="Nuevo contacto desde WebCreaciones" />
            <input type="hidden" name="redirect" value="https://www.web-creaciones.com/gracias" />
            
            {/* Header del formulario */}
            <div className="text-center pb-4 sm:pb-5 border-b border-slate-100 dark:border-neutral-800">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gray-900 dark:bg-white rounded-xl sm:rounded-2xl mb-3 shadow-lg">
                <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-white dark:text-black" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">Empecemos Hoy</h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mt-1">Respuesta en menos de 24 horas</p>
            </div>

            {/* Nombre */}
            <div className="space-y-1.5">
              <Label htmlFor="name" className="text-gray-700 dark:text-gray-300 font-semibold text-sm">Nombre completo *</Label>
              <Input 
                id="name" 
                name="name" 
                required 
                placeholder="Juan Pérez"
                className="h-11 sm:h-12 text-sm sm:text-base border-2 border-slate-200 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white focus:border-blue-500"
              />
            </div>

            {/* Email con validación */}
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-gray-700 dark:text-gray-300 font-semibold text-sm">Email *</Label>
              <div className="relative">
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setEmailTouched(true)}
                  placeholder="juan@ejemplo.com"
                  className={`h-11 sm:h-12 text-sm sm:text-base border-2 pr-10 ${
                    emailTouched && !emailValidation.valid 
                      ? "border-red-500 focus:border-red-500" 
                      : emailTouched && email && emailValidation.valid 
                        ? "border-green-500 focus:border-green-500" 
                        : "border-slate-200 dark:border-neutral-600 focus:border-blue-500"
                  } dark:bg-neutral-700 dark:text-white`}
                />
                {emailTouched && email && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    {emailValidation.valid ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-red-500" />
                    )}
                  </div>
                )}
              </div>
              {emailTouched && !emailValidation.valid && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {emailValidation.message}
                </p>
              )}
            </div>

            {/* Teléfono con selector de país */}
            <div className="space-y-1.5">
              <Label htmlFor="phone" className="text-gray-700 dark:text-gray-300 font-semibold text-sm">Teléfono (opcional)</Label>
              <div className="flex gap-2">
                <Select value={countryCode} onValueChange={setCountryCode}>
                  <SelectTrigger aria-label="Selecciona país" className="w-24 sm:w-28 h-11 sm:h-12 text-sm border-2 border-slate-200 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white">
                    <SelectValue>
                      {selectedCountry && `${selectedCountry.flag} ${selectedCountry.dial}`}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-neutral-800 border-2 shadow-lg max-h-60 dark:border-neutral-600">
                    {countries.map((country) => (
                      <SelectItem 
                        key={country.code} 
                        value={country.code}
                        className="dark:text-white dark:hover:bg-neutral-700 text-sm"
                      >
                        {country.flag} {country.dial} {country.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <div className="relative flex-1">
                  <Input 
                    id="phone" 
                    type="tel"
                    value={phone}
                    onChange={handlePhoneChange}
                    onBlur={() => setPhoneTouched(true)}
                    placeholder={selectedCountry ? `${"9".repeat(selectedCountry.minLen)}` : "Número"}
                    className={`h-11 sm:h-12 text-sm sm:text-base border-2 pr-10 ${
                      phoneTouched && phone && !phoneValidation.valid 
                        ? "border-red-500 focus:border-red-500" 
                        : phoneTouched && phone && phoneValidation.valid 
                          ? "border-green-500 focus:border-green-500" 
                          : "border-slate-200 dark:border-neutral-600 focus:border-blue-500"
                    } dark:bg-neutral-700 dark:text-white`}
                  />
                  {phoneTouched && phone && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      {phoneValidation.valid ? (
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-red-500" />
                      )}
                    </div>
                  )}
                </div>
              </div>
              {phoneTouched && phone && !phoneValidation.valid && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {phoneValidation.message}
                </p>
              )}
              {selectedCountry && (
                <p className="text-gray-500 dark:text-gray-400 text-xs">
                  {selectedCountry.minLen === selectedCountry.maxLen 
                    ? `${selectedCountry.minLen} dígitos` 
                    : `${selectedCountry.minLen}-${selectedCountry.maxLen} dígitos`}
                </p>
              )}
            </div>

            {/* Tipo de servicio */}
            <div className="space-y-1.5">
              <Label htmlFor="service" className="text-gray-700 dark:text-gray-300 font-semibold text-sm">Tipo de servicio *</Label>
              <Select name="service" required>
                <SelectTrigger aria-label="Selecciona un tipo de servicio" className="h-11 sm:h-12 text-sm sm:text-base border-2 border-slate-200 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white">
                  <SelectValue placeholder="Selecciona un servicio" />
                </SelectTrigger>
                <SelectContent className="bg-white dark:bg-neutral-800 border-2 shadow-lg dark:border-neutral-600">
                  <SelectItem value="landing" className="dark:text-white dark:hover:bg-neutral-700 text-sm">Landing Page Simple ($99)</SelectItem>
                  <SelectItem value="website" className="dark:text-white dark:hover:bg-neutral-700 text-sm">Sitio Web Básico ($249)</SelectItem>
                  <SelectItem value="maintenance" className="dark:text-white dark:hover:bg-neutral-700 text-sm">Mantenimiento Mensual ($50/mes)</SelectItem>
                  <SelectItem value="other" className="dark:text-white dark:hover:bg-neutral-700 text-sm">Otro / Consulta</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Mensaje */}
            <div className="space-y-1.5">
              <Label htmlFor="message" className="text-gray-700 dark:text-gray-300 font-semibold text-sm">Cuéntame sobre tu proyecto *</Label>
              <Textarea 
                id="message" 
                name="message" 
                required 
                rows={4} 
                placeholder="Describe qué necesitas..."
                className="resize-none text-sm sm:text-base border-2 border-slate-200 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white focus:border-blue-500"
              />
            </div>

            {/* Botón enviar */}
            <Button 
              type="submit" 
              className="w-full h-12 sm:h-14 text-sm sm:text-base font-semibold bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300" 
              size="lg" 
              disabled={loading || (emailTouched && !emailValidation.valid) || (phoneTouched && !!phone && !phoneValidation.valid)}
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
                  <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                  Enviar mensaje
                </span>
              )}
            </Button>
          </form>
        </motion.div>

        <p className="text-center mt-6 sm:mt-8 text-gray-600 dark:text-gray-400 text-sm sm:text-base">
          O escríbeme a{" "}
          <a href="mailto:webcreaciones.dev@gmail.com" className="font-semibold text-blue-600 dark:text-blue-400 hover:underline">
            webcreaciones.dev@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}
