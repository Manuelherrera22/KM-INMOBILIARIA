"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/sections/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Globe2, Building, MessageCircle } from "lucide-react";

const marketCards = [
  {
    country: "México",
    cities: ["CDMX", "Guadalajara", "Monterrey"],
    portals: ["Inmuebles24", "Mercado Libre", "La Haus"],
    currency: "MXN · USD",
    highlight: "Conectores SISUB y MLS CDMX listos para sincronizar oferta y demanda.",
  },
  {
    country: "Colombia",
    cities: ["Bogotá", "Medellín", "Barranquilla"],
    portals: ["Finca Raíz", "Ciencuadras", "Properati"],
    currency: "COP · USD",
    highlight: "Workflows notariales digitales con Supernotariado y billeteras PSE.",
  },
  {
    country: "Chile",
    cities: ["Santiago", "Viña del Mar", "Concepción"],
    portals: ["Yapo", "Portalinmobiliario", "Toctoc"],
    currency: "UF · CLP",
    highlight: "Pricing automático indexado a UF y arriendos con reajuste automático.",
  },
  {
    country: "Argentina",
    cities: ["Buenos Aires", "Córdoba", "Rosario"],
    portals: ["Zonaprop", "Argenprop", "Mudafy"],
    currency: "USD · ARS",
    highlight: "Gestión de contratos bilingües y pre-liquidación de COTI y AFIP.",
  },
];

const partnerStats = [
  { label: "Brokers aliados en LATAM", value: "420+" },
  { label: "Portales conectados", value: "32" },
  { label: "Canales de mensajería locales", value: "14" },
];

export function LatamNetworkSection() {
  return (
    <section id="mercados" className="py-20 sm:py-24 scroll-mt-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <SectionHeading
          eyebrow="Red inmobiliaria latinoamericana"
          title="Opera con una plataforma que entiende cada mercado de la región."
          description="Sincroniza inventario, precios y cumplimiento regulatorio desde Tijuana hasta Ushuaia con conectores locales y soporte multilenguaje."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="flex items-center justify-between gap-3">
              <Badge variant="outline" className="border-white/15 bg-white/5 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Principales hubs
              </Badge>
              <Globe2 className="size-6 text-primary" />
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {marketCards.map((market) => (
                <Card key={market.country} className="border-white/10 bg-black/20 backdrop-blur">
                  <CardContent className="space-y-3 p-5">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-white">{market.country}</p>
                      <Badge variant="secondary">{market.currency}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Ciudades clave: {market.cities.join(" · ")}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Portales: {market.portals.join(", ")}
                    </p>
                    <p className="text-xs text-muted-foreground/80">{market.highlight}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex h-full flex-col justify-between gap-6"
          >
            <Card className="border-white/10 bg-gradient-to-br from-primary/15 via-white/5 to-secondary/10 backdrop-blur">
              <CardContent className="space-y-4 p-6">
                <div className="flex items-center gap-3 text-sm font-semibold text-white">
                  <Building className="size-5 text-primary" />
                  Partners corporativos
                </div>
                <p className="text-xs text-muted-foreground">
                  API y SSO listos para integrarse con redes inmobiliarias regionales, developers
                  y fondos de inversión con presencia multipaís.
                </p>
                <div className="grid gap-3 text-xs text-muted-foreground">
                  {partnerStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3"
                    >
                      <span>{stat.label}</span>
                      <span className="text-white">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-white/5 backdrop-blur">
              <CardContent className="flex flex-col gap-4 p-6">
                <div className="flex items-center gap-3 text-sm font-semibold text-white">
                  <MessageCircle className="size-5 text-secondary" />
                  Localización y compliance
                </div>
                <p className="text-xs text-muted-foreground">
                  Traducción automática es/en/pt, plantillas fiscales por país, homologación con
                  normativas UIF, CNBV, CMF y SUGEF.
                </p>
                <p className="text-xs text-muted-foreground">
                  Equipos de soporte en GMT-6, GMT-5 y GMT-3 para acompañar a tus brokers en vivo.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

