"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Activity, BrainCircuit, CalendarDays, MailOpen } from "lucide-react";
import { Line, Bar } from "react-chartjs-2";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ensureChartsRegistered } from "@/lib/register-charts";

ensureChartsRegistered();

const pipelineData = {
  labels: ["Captación", "Interés", "Visita", "Negociación", "Cierre"],
  datasets: [
    {
      label: "Operaciones activas",
      data: [128, 94, 62, 31, 18],
      backgroundColor: "rgba(56, 189, 248, 0.65)",
      borderRadius: 12,
    },
  ],
};

const velocityData = {
  labels: ["Sem 1", "Sem 2", "Sem 3", "Sem 4"],
  datasets: [
    {
      label: "Tiempo promedio (días)",
      data: [18, 16, 14, 12],
      borderColor: "rgba(168, 85, 247, 1)",
      backgroundColor: "rgba(168, 85, 247, 0.3)",
      pointBorderWidth: 2,
      pointRadius: 4,
      fill: true,
      tension: 0.4,
    },
  ],
};

const automationItems = [
  {
    title: "Seguimiento post visita",
    audience: "Clientes premium",
    touchpoints: "Email + WhatsApp + recordatorio asesor",
    conversion: "42%",
  },
  {
    title: "Campaña lanzamiento Torre Nova",
    audience: "Inversores activos",
    touchpoints: "Email + Ads + Reporte personalizado",
    conversion: "31%",
  },
  {
    title: "Reactivación leads fríos",
    audience: "Propietarios potenciales",
    touchpoints: "Email + Llamada automática + Tour 360",
    conversion: "22%",
  },
];

export function CrmAutomationSection() {
  const [activeTab, setActiveTab] = React.useState("pipeline");
  return (
    <section id="crm" className="scroll-mt-32 py-24">
      <div id="automatizacion" className="hidden" />
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <Badge variant="outline" className="border-primary/40 bg-primary/10 text-primary">
              CRM + Automatizaciones
            </Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Domina tu pipeline con IA copiloto y workflows inteligentes.
            </h2>
            <p className="mt-3 max-w-2xl text-base text-muted-foreground">
              Prioriza leads, acelera negociaciones y automatiza cada interacción crítica.
              Organiza todas las oportunidades en tableros dinámicos con analítica predictiva.
            </p>
          </div>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <p className="text-xs uppercase text-muted-foreground">Net score</p>
              <p className="text-xl font-semibold text-white">92/100</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <p className="text-xs uppercase text-muted-foreground">Crecimiento pipeline</p>
              <p className="text-xl font-semibold text-white">+18%</p>
            </div>
          </div>
        </div>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="mt-10 grid gap-6 lg:grid-cols-[1.35fr_1fr]"
        >
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <TabsList className="grid grid-cols-3 rounded-full bg-black/40 p-1 text-xs uppercase">
              <TabsTrigger value="pipeline" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Pipeline
              </TabsTrigger>
              <TabsTrigger value="velocity" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Velocidad
              </TabsTrigger>
              <TabsTrigger value="automatizaciones" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Automatizaciones
              </TabsTrigger>
            </TabsList>

            <TabsContent value="pipeline" className="mt-8 focus-visible:outline-none">
              <div className="h-72">
                <Bar
                  data={pipelineData}
                  options={{
                    responsive: true,
                    plugins: { legend: { display: false }, tooltip: { enabled: true } },
                    scales: {
                      x: {
                        grid: { color: "rgba(255,255,255,0.04)" },
                        ticks: { color: "rgba(226,232,240,0.7)" },
                      },
                      y: {
                        grid: { color: "rgba(255,255,255,0.04)" },
                        ticks: { color: "rgba(226,232,240,0.7)" },
                      },
                    },
                  }}
                />
              </div>
            </TabsContent>

            <TabsContent value="velocity" className="mt-8 focus-visible:outline-none">
              <div className="h-72">
                <Line
                  data={velocityData}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: { display: false },
                      tooltip: { enabled: true },
                    },
                    scales: {
                      x: {
                        grid: { color: "rgba(255,255,255,0.04)" },
                        ticks: { color: "rgba(226,232,240,0.7)" },
                      },
                      y: {
                        grid: { color: "rgba(255,255,255,0.04)" },
                        ticks: { color: "rgba(226,232,240,0.7)" },
                      },
                    },
                  }}
                />
              </div>
            </TabsContent>

            <TabsContent value="automatizaciones" className="mt-8 focus-visible:outline-none">
              <Table>
                <TableHeader>
                  <TableRow className="border-white/5">
                    <TableHead className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Campaña
                    </TableHead>
                    <TableHead className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Audiencia
                    </TableHead>
                    <TableHead className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Flujo
                    </TableHead>
                    <TableHead className="text-right text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Conversión
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {automationItems.map((item) => (
                    <TableRow key={item.title} className="border-white/5">
                      <TableCell className="text-sm text-white">{item.title}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {item.audience}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {item.touchpoints}
                      </TableCell>
                      <TableCell className="text-right text-sm font-semibold text-primary">
                        {item.conversion}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="border-white/10 bg-white/5 backdrop-blur">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-white">
                    <BrainCircuit className="size-5 text-secondary" />
                    IA asistente comercial
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    Recibe recomendaciones de pricing, mensajes sugeridos y próximos pasos
                    prioritarios según el contexto y la interacción de cada cliente.
                  </p>
                  <ul className="grid gap-2 text-xs text-muted-foreground">
                    <li className="rounded-xl border border-white/5 bg-black/20 px-3 py-2">
                      Resumen instantáneo de oportunidades destacadas.
                    </li>
                    <li className="rounded-xl border border-white/5 bg-black/20 px-3 py-2">
                      Alertas cuando un lead está listo para avanzar.
                    </li>
                    <li className="rounded-xl border border-white/5 bg-black/20 px-3 py-2">
                      Redacción automática de follow-ups personalizados.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="border-white/10 bg-gradient-to-br from-primary/10 via-white/5 to-secondary/10 backdrop-blur">
                <CardContent className="flex flex-col gap-4 p-6">
                  <div className="flex items-center gap-3 text-sm font-medium text-white">
                    <Activity className="size-5 text-primary" />
                    Resumen diario inteligente
                  </div>
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <p>08:00 · Leads nuevos asignados (12)</p>
                    <p>09:30 · Tour virtual agendado Barrio Norte</p>
                    <p>11:45 · Contrato digital listo para firma</p>
                    <p>15:00 · Videollamada onboarding propietario</p>
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs text-muted-foreground">
                    <MailOpen className="size-4 text-secondary" />
                    Envíos programados a tu bandeja y apps favoritas.
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="border-white/10 bg-white/5 backdrop-blur">
                <CardContent className="flex flex-col gap-4 p-6">
                  <div className="flex items-center gap-3 text-sm font-medium text-white">
                    <CalendarDays className="size-5 text-accent" />
                    Agenda inteligente
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Sincroniza Google, Outlook y calendarios corporativos para coordinar tours,
                    videollamadas y firmas en un clic.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                    <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1">
                      Confirmaciones automáticas
                    </span>
                    <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1">
                      Reagendado asistido
                    </span>
                    <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1">
                      Recordatorios multicanal
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </Tabs>
      </div>
    </section>
  );
}

