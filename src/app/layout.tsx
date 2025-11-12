import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/components/providers/app-providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://km-inmobiliaria.faststack.local"),
  title: {
    default: "KM Inmobiliaria · Plataforma Integral Proptech",
    template: "%s · KM Inmobiliaria",
  },
  description:
    "Plataforma inmobiliaria 360º con CRM, automatizaciones, tours virtuales, integraciones con portales y colaboración en tiempo real para agentes y desarrolladores.",
  applicationName: "KM Inmobiliaria",
  keywords: [
    "proptech",
    "plataforma inmobiliaria",
    "CRM inmobiliario",
    "tours 360",
    "automatización de ventas",
  ],
  openGraph: {
    title: "KM Inmobiliaria · Plataforma Integral Proptech",
    description:
      "Gestione propiedades, clientes y marketing desde un único hub colaborativo con tours virtuales 360º y automatizaciones inteligentes.",
    type: "website",
    locale: "es_ES",
    url: "https://km-inmobiliaria.faststack.local",
  },
  twitter: {
    card: "summary_large_image",
    title: "KM Inmobiliaria · Plataforma Integral Proptech",
    description:
      "Hub inmobiliario con CRM, automatizaciones, tours 360º y marketing avanzado para agentes modernos.",
  },
};

export default function RootLayout(props: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background font-sans text-foreground antialiased`}
      >
        <AppProviders>{props.children}</AppProviders>
      </body>
    </html>
  );
}
