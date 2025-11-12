"use client";

import { motion } from "framer-motion";
import { Building2, Bot, Globe2, Headset, Layers, Rocket } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const highlights = [
  {
    icon: Rocket,
    title: "Onboarding exprés",
    description: "Carga propiedades, clientes y pipelines en minutos.",
  },
  {
    icon: Globe2,
    title: "Portales conectados",
    description: "Publica y sincroniza automáticamente en +25 marketplaces.",
  },
  {
    icon: Bot,
    title: "Automatizaciones inteligentes",
    description: "Recordatorios, nurtures y reportes con IA generativa.",
  },
  {
    icon: Headset,
    title: "Atención 360º",
    description: "Chat, video y bots para acompañar a tus clientes siempre.",
  },
  {
    icon: Layers,
    title: "Espacios colaborativos",
    description: "Trabaja en equipo con notas, versiones y control granular.",
  },
  {
    icon: Building2,
    title: "Todo el ciclo inmobiliario",
    description: "Desde la captación hasta la firma digital y el cierre.",
  },
];

export function HeroSection() {
  return (
    <section
      id="plataforma"
      className="relative overflow-hidden pb-20 pt-24 sm:pt-28 lg:pt-32 scroll-mt-32"
    >
      <div className="absolute inset-0 -z-10 opacity-50">
        <div className="absolute inset-0 blur-3xl">
          <div className="absolute left-[10%] top-16 h-56 w-56 rounded-full bg-primary/30 blur-[120px]" />
          <div className="absolute right-[15%] top-32 h-72 w-72 rounded-full bg-secondary/30 blur-[140px]" />
          <div className="absolute bottom-10 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-accent/40 blur-[160px]" />
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid gap-6 lg:grid-cols-[1.2fr_1fr]"
        >
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Plataforma proptech enterprise
            </span>
            <h1 className="text-balance text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-[3.4rem]">
              Impulsa tu negocio inmobiliario con un centro de operaciones
              digital todo en uno.
            </h1>
            <p className="max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
              KM Inmobiliaria unifica publicación multicanal, tours virtuales
              hiperrealistas, CRM colaborativo, automatizaciones de venta y
              analítica avanzada para cerrar operaciones más rápido y con mejor
              experiencia.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="h-12 rounded-full px-8 text-base">
                <Link href="/dashboard">Explorar demo interactiva</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 rounded-full border-white/20 bg-white/5 px-8 text-base text-white hover:bg-white/10"
              >
                <Link href="#contacto">Agenda consultoría</Link>
              </Button>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { label: "+360 tours al mes", value: "1.8K" },
                { label: "Integraciones activas", value: "32" },
                { label: "Tasa de cierre promedio", value: "28%" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/5 bg-white/5 p-5 backdrop-blur"
                >
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="mt-1 text-2xl font-semibold text-white">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 32 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
            className="relative rounded-3xl border border-white/5 bg-gradient-to-br from-white/10 via-white/5 to-white/0 p-6 shadow-[0_40px_80px_-40px_rgba(24,149,255,0.45)] backdrop-blur-xl"
          >
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Live activity</span>
              <span>Últimos 7 días</span>
            </div>
            <div className="mt-6 space-y-4">
              {[
                {
                  title: "Tour 360° Residencial Altos del Parque",
                  description: "32 visitas virtuales · 4 reservas",
                },
                {
                  title: "Campaña multicanal Barrio Norte",
                  description: "Publicada en 12 portales · 1.2K leads",
                },
                {
                  title: "Workflow de seguimiento premium",
                  description: "9 clientes contactados · 3 firmas digitales",
                },
                {
                  title: "Análisis de mercado Palermo Soho",
                  description: "Demanda +18% · Precio promedio USD 285K",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/5 bg-white/5 p-4"
                >
                  <p className="text-sm font-medium text-white">{item.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {highlights.map((highlight) => (
            <div
              key={highlight.title}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/10"
            >
              <div className="flex size-10 items-center justify-center rounded-full bg-primary/15 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <highlight.icon className="size-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {highlight.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {highlight.description}
              </p>
              <div className="absolute inset-x-6 bottom-3 flex h-9 items-center justify-between text-xs text-muted-foreground/70">
                <span>Ver en la demo</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

