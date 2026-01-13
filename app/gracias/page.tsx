import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "¡Mensaje Enviado! - WebCreaciones",
  description: "Tu mensaje ha sido enviado correctamente. Te responderemos en menos de 24 horas.",
  robots: { index: false, follow: false },
};

export default function GraciasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-black dark:to-neutral-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white dark:bg-neutral-900 rounded-2xl shadow-xl dark:shadow-2xl dark:shadow-black/50 p-8 text-center border border-gray-100 dark:border-neutral-800">
        <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-12 h-12 text-green-600 dark:text-green-400" />
        </div>
        
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">¡Mensaje Recibido!</h1>
        <p className="text-lg text-slate-600 dark:text-gray-300 mb-6">
          Gracias por contactarme. Te responderé en menos de 24 horas.
        </p>
        <p className="text-slate-500 dark:text-gray-400 mb-8">
          Revisa tu bandeja de entrada y spam para confirmar que recibiste una copia de tu mensaje.
        </p>
        
        <Button asChild size="lg" className="w-full bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200">
          <Link href="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Link>
        </Button>
      </div>
    </div>
  );
}
