import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { ThemeProvider } from "@/components/ThemeProvider";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.web-creaciones.com"),
  title: {
    default: "WebCreaciones - Desarrollo Web Profesional | Landing Pages desde $150",
    template: "%s | WebCreaciones"
  },
  description: "Desarrollo web profesional para pequeños negocios y emprendedores. Landing pages desde $150, sitios web desde $300. Diseño 100% responsivo, entrega en 1 semana, hosting incluido. Desarrollador web freelance en Lima, Perú.",
  keywords: [
    "desarrollo web", 
    "diseño web", 
    "landing page", 
    "sitio web económico", 
    "página web pequeños negocios", 
    "web responsivo", 
    "desarrollador web freelance",
    "crear página web",
    "diseño web Lima",
    "página web Perú",
    "desarrollo web profesional",
    "landing page barata",
    "web para emprendedores",
    "sitio web profesional"
  ],
  authors: [{ name: "WebCreaciones", url: "https://www.web-creaciones.com" }],
  creator: "WebCreaciones",
  publisher: "WebCreaciones",
  robots: { 
    index: true, 
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    }
  },
  alternates: {
    canonical: "https://www.web-creaciones.com",
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://www.web-creaciones.com",
    siteName: "WebCreaciones",
    title: "WebCreaciones - Desarrollo Web Profesional | Tu web en 1 semana",
    description: "Tu primera página web profesional en una semana. Landing pages desde $150. Diseño responsivo, hosting incluido y precios accesibles para emprendedores.",
    images: [
      { 
        url: "/og-image.webp", 
        width: 1200, 
        height: 630, 
        alt: "WebCreaciones - Desarrollo Web Profesional",
        type: "image/webp"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WebCreaciones - Tu página web profesional en 1 semana",
    description: "Landing pages desde $150. Diseño responsivo, hosting incluido. Desarrollo web para emprendedores.",
    images: ["/og-image.webp"],
    creator: "@webcreaciones",
  },
  icons: { 
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  category: "technology",
  verification: {
    google: "tu-codigo-de-verificacion-aqui",
  },
};

// Schema.org structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.web-creaciones.com/#website",
      "url": "https://www.web-creaciones.com",
      "name": "WebCreaciones",
      "description": "Desarrollo web profesional para pequeños negocios y emprendedores",
      "inLanguage": "es-PE"
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.web-creaciones.com/#business",
      "name": "WebCreaciones",
      "description": "Desarrollo web profesional para pequeños negocios. Landing pages y sitios web responsivos con entrega rápida.",
      "url": "https://www.web-creaciones.com",
      "telephone": "+51943850706",
      "email": "webcreaciones.dev@gmail.com",
      "priceRange": "$80 - $300",
      "areaServed": {
        "@type": "Country",
        "name": "Peru"
      },
      "serviceType": ["Desarrollo Web", "Diseño Web", "Landing Pages", "Sitios Web"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios de Desarrollo Web",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Landing Page Simple",
              "description": "Página web de una sola página con diseño responsivo"
            },
            "price": "150",
            "priceCurrency": "USD"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Sitio Web Básico",
              "description": "Sitio web de hasta 5 páginas con diseño personalizado"
            },
            "price": "300",
            "priceCurrency": "USD"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mantenimiento Mensual",
              "description": "Actualizaciones, correcciones y soporte continuo"
            },
            "price": "80",
            "priceCurrency": "USD"
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.web-creaciones.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Cuánto tiempo tardarás en crear mi página web?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dependiendo del tipo de proyecto: Landing Page (5-7 días), Sitio Web Básico (1-2 semanas). Contando desde la aprobación del diseño."
          }
        },
        {
          "@type": "Question",
          "name": "¿Incluyes hosting y dominio?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "El desarrollo incluye subida a Vercel (hosting gratuito con CDN global). El dominio personalizado lo adquieres tú, pero te ayudo con la configuración sin costo adicional."
          }
        },
        {
          "@type": "Question",
          "name": "¿Mi sitio será responsive?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "¡Absolutamente! Todos mis diseños se adaptan perfectamente a celulares, tablets y computadoras."
          }
        }
      ]
    }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth dark" suppressHydrationWarning>
      <head>
        {/* Preconnect para reducir latencia de red */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Preload logo para LCP más rápido */}
        <link rel="preload" href="/logo-full.svg" as="image" type="image/svg+xml" />
        
        <meta name="theme-color" content="#2563eb" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="canonical" href="https://www.web-creaciones.com" />
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} 
        />
        {/* Script para evitar flash de tema incorrecto - optimizado */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(){try{var t=localStorage.getItem('theme');document.documentElement.classList.toggle('dark',t!=='light');document.documentElement.classList.toggle('light',t==='light')}catch(e){document.documentElement.classList.add('dark')}})();`
        }} />
      </head>
      <body className={poppins.className + " antialiased overflow-x-hidden bg-white dark:bg-black transition-colors"}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-Y4VLHCJ27Q" strategy="lazyOnload" />
        <Script id="ga" strategy="lazyOnload">{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag("js", new Date()); gtag("config", "G-Y4VLHCJ27Q");`}</Script>
      </body>
    </html>
  );
}
