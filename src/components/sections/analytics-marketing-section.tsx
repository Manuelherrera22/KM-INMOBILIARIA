"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Megaphone,
  Radar,
  TrendingUp,
  Globe,
  Target,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

const channels = [
  { name: "Portales aliados", reach: "1.2M impresiones", performance: 82 },
  { name: "Campañas pagas", reach: "860K impresiones", performance: 74 },
  { name: "Landing personalizadas", reach: "420K visitas", performance: 68 },
];

const marketInsights = [
  { label: "Demanda Palermo Soho", value: "+18%", detail: "vs mes anterior" },
  { label: "Ticket promedio USD", value: "$284K", detail: "Departamentos 3 amb." },
  { label: "Cap rate alquiler", value: "5.4%", detail: "+0.6pp" },
];

export function AnalyticsMarketingSection() {
  return (
    <section id="analitica" className="py-24 scroll-mt-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <Badge variant="outline" className="border-primary/40 bg-primary/10 text-primary">
                  Marketing + Analítica
                </Badge>
                <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                  Despliega campañas y decisiones basadas en inteligencia de datos.
                </h2>
                <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
                  Diseña landings personalizadas, activa campañas omnicanal y recibe análisis de
                  mercado en tiempo real para ajustar pricing y estrategias de captación.
                </p>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-xs text-muted-foreground">
                <BarChart3 className="size-5 text-primary" />
                Dashboard en vivo · KPI críticos
              </div>
            </div>

            <Tabs defaultValue="channels" className="mt-8">
              <TabsList className="flex w-full justify-start gap-2 rounded-full bg-black/30 p-1 text-xs uppercase">
                <TabsTrigger
                  value="channels"
                  className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Canales
                </TabsTrigger>
                <TabsTrigger
                  value="market"
                  className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Insights de mercado
                </TabsTrigger>
                <TabsTrigger
                  value="audiences"
                  className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Audiencias
                </TabsTrigger>
              </TabsList>

              <TabsContent value="channels" className="mt-8 space-y-4 focus-visible:outline-none">
                {channels.map((channel) => (
                  <div
                    key={channel.name}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-muted-foreground"
                  >
                    <div className="flex items-center justify-between text-white">
                      <span>{channel.name}</span>
                      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        {channel.reach}
                      </span>
                    </div>
                    <Progress value={channel.performance} className="mt-3 h-2 bg-white/10" />
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="market" className="mt-8 grid gap-4 sm:grid-cols-3 focus-visible:outline-none">
                {marketInsights.map((insight) => (
                  <div
                    key={insight.label}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-muted-foreground"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
                      {insight.label}
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-white">{insight.value}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{insight.detail}</p>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="audiences" className="mt-8 space-y-4 focus-visible:outline-none">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-3 text-white">
                    <Target className="size-5 text-secondary" />
                    Segmentación inteligente
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Crea audiencias dinámicas según intención, interacciones y perfil financiero.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-3 text-white">
                    <Radar className="size-5 text-accent" />
                    Alertas de competitividad
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Detecta nuevas publicaciones, cambios de precios y oportunidades emergentes.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            <Card className="border-white/10 bg-gradient-to-br from-secondary/15 via-white/5 to-transparent backdrop-blur">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-white">
                  <Megaphone className="size-5 text-secondary" />
                  Campañas automatizadas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    <span>Torre Nova · Lema: Viví desde las alturas</span>
                    <span>ROI 4.2x</span>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Emails dinámicos + Ads sociales + Landing personalizada con asistentes IA.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    <span>Programa inversores rental</span>
                    <span>ROI 3.5x</span>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Secuencias automatizadas con comparativas de rentabilidad y llamados.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-white/5 backdrop-blur">
              <CardContent className="space-y-4 p-6">
                <div className="flex items-center gap-3 text-sm font-medium text-white">
                  <TrendingUp className="size-5 text-primary" />
                  Forecast de ventas
                </div>
                <div className="grid gap-3 text-sm text-muted-foreground">
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                    <span>Ingresos proyectados Q3</span>
                    <span className="text-white">USD 4.6M</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                    <span>Crecimiento leads calificados</span>
                    <span className="text-white">+24%</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                    <span>Embudo marketing → ventas</span>
                    <span className="text-white">Conversión 18%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-white/5 backdrop-blur">
              <CardContent className="flex flex-col gap-4 p-6">
                <div className="flex items-center gap-3 text-sm font-medium text-white">
                  <Globe className="size-5 text-accent" />
                  Integraciones omnicanal
                </div>
                <p className="text-sm text-muted-foreground">
                  Conecta portales inmobiliarios globales, CRM externos, redes sociales y tu ecosistema
                  corporativo mediante API, webhooks y conectores certificados.
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                  <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1">
                    Mercado Libre Inmuebles
                  </span>
                  <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1">
                    Zillow
                  </span>
                  <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1">
                    Idealista
                  </span>
                  <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1">
                    Meta Ads / Google Ads
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

