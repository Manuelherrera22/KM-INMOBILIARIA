"use client";

import { useState } from "react";
import { CalendarCheck2, MessageCircle, PhoneCall, Sparkles, Users } from "lucide-react";
import { PlatformPageHeader } from "@/components/platform/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ensureChartsRegistered } from "@/lib/register-charts";
import { Line } from "react-chartjs-2";

ensureChartsRegistered();

const pipelineColumns = ["Lead", "Etapa", "Siguiente acción", "Propiedad objetivo"];

const pipelineRows = [
  {
    lead: "Ana Suárez",
    stage: "Visita virtual completada",
    next: "Enviar propuesta personalizada (hoy)",
    property: "Torre Nova · 3 ambientes",
  },
  {
    lead: "Grupo Inversor Orion",
    stage: "Negociación",
    next: "Videollamada cierre (mañana 09:30)",
    property: "Oficinas Catalinas 530 m²",
  },
  {
    lead: "Martín Ferrero",
    stage: "Lead calificado",
    next: "Agendar tour físico (sábado)",
    property: "Loft Palermo Design",
  },
];

const engagementData = {
  labels: ["L", "M", "X", "J", "V", "S", "D"],
  datasets: [
    {
      label: "Interacciones multicanal",
      data: [24, 32, 41, 28, 37, 18, 12],
      borderColor: "rgba(59, 130, 246, 1)",
      backgroundColor: "rgba(59, 130, 246, 0.2)",
      fill: true,
      tension: 0.4,
    },
    {
      label: "Respuestas clientes",
      data: [12, 18, 26, 20, 25, 10, 8],
      borderColor: "rgba(168, 85, 247, 1)",
      backgroundColor: "rgba(168, 85, 247, 0.2)",
      fill: true,
      tension: 0.4,
    },
  ],
};

export default function CrmPage() {
  const [tab, setTab] = useState("pipeline");

  return (
    <div className="space-y-6">
      <PlatformPageHeader
        badge="CRM inteligente"
        title="Gestiona leads, interacciones y productividad comercial"
        description="Segmenta clientes, automatiza seguimientos y toma acción con insights generados por IA en todo el ciclo comercial."
        actions={
          <>
            <Button variant="outline" className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10">
              Importar contactos
            </Button>
            <Button className="rounded-full px-5">
              Crear pipeline
            </Button>
          </>
        }
      />

      <Tabs
        value={tab}
        onValueChange={setTab}
        className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
      >
        <TabsList className="flex w-full justify-start gap-2 rounded-full bg-black/30 p-1 text-xs uppercase">
          <TabsTrigger value="pipeline" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Pipeline
          </TabsTrigger>
          <TabsTrigger value="agenda" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Agenda & tareas
          </TabsTrigger>
          <TabsTrigger value="comunicacion" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Comunicación
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pipeline" className="mt-8 space-y-6 focus-visible:outline-none">
          <Card className="border-white/10 bg-black/30 backdrop-blur">
            <CardHeader className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base font-semibold text-white">
                  Leads prioritarios
                </CardTitle>
                <p className="text-xs text-muted-foreground">
                  Ordenados por score IA según intención y probabilidad de cierre.
                </p>
              </div>
              <Badge variant="secondary">{"Score > 80"}</Badge>
            </CardHeader>
            <CardContent className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <Table>
                <TableHeader>
                  <TableRow className="border-white/10">
                    {pipelineColumns.map((column) => (
                      <TableHead
                        key={column}
                        className="text-xs uppercase tracking-[0.2em] text-muted-foreground"
                      >
                        {column}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pipelineRows.map((row) => (
                    <TableRow key={row.lead} className="border-white/10">
                      <TableCell className="text-sm text-white">{row.lead}</TableCell>
                      <TableCell className="text-xs text-muted-foreground">{row.stage}</TableCell>
                      <TableCell className="text-xs text-primary">{row.next}</TableCell>
                      <TableCell className="text-xs text-muted-foreground">{row.property}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-black/30 backdrop-blur">
            <CardHeader className="flex items-center justify-between">
              <CardTitle className="text-base font-semibold text-white">
                Engagement multicanal
              </CardTitle>
              <Badge variant="outline" className="border-white/20 text-xs text-muted-foreground">
                Últimos 7 días
              </Badge>
            </CardHeader>
            <CardContent>
              <Line
                data={engagementData}
                options={{
                  responsive: true,
                  plugins: { legend: { display: false }, tooltip: { enabled: true } },
                  scales: {
                    x: { ticks: { color: "rgba(148,163,184,0.8)" }, grid: { color: "rgba(255,255,255,0.04)" } },
                    y: { ticks: { color: "rgba(148,163,184,0.8)" }, grid: { color: "rgba(255,255,255,0.04)" } },
                  },
                }}
                height={260}
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="agenda" className="mt-8 space-y-6 focus-visible:outline-none">
          <div className="grid gap-4 lg:grid-cols-3">
            <Card className="border-white/10 bg-black/30 backdrop-blur">
              <CardContent className="flex flex-col gap-3 p-5 text-sm text-muted-foreground">
                <div className="flex size-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <CalendarCheck2 className="size-5" />
                </div>
                <p className="text-sm font-semibold text-white">Agenda coordinada</p>
                <p>Sincroniza calendarios con recordatorios multicanal para visitas y firmas.</p>
                <Button variant="ghost" className="mt-2 w-full rounded-full text-xs text-muted-foreground hover:text-white">
                  Ver calendario semanal
                </Button>
              </CardContent>
            </Card>
            <Card className="border-white/10 bg-black/30 backdrop-blur">
              <CardContent className="flex flex-col gap-3 p-5 text-sm text-muted-foreground">
                <div className="flex size-10 items-center justify-center rounded-2xl bg-secondary/15 text-secondary-foreground">
                  <Sparkles className="size-5" />
                </div>
                <p className="text-sm font-semibold text-white">Sugerencias IA</p>
                <p>Recibe recomendaciones de próximos pasos y mensajes optimizados.</p>
                <Button variant="ghost" className="mt-2 w-full rounded-full text-xs text-muted-foreground hover:text-white">
                  Revisar sugerencias
                </Button>
              </CardContent>
            </Card>
            <Card className="border-white/10 bg-black/30 backdrop-blur">
              <CardContent className="flex flex-col gap-3 p-5 text-sm text-muted-foreground">
                <div className="flex size-10 items-center justify-center rounded-2xl bg-accent/15 text-accent-foreground">
                  <Users className="size-5" />
                </div>
                <p className="text-sm font-semibold text-white">Asignación automática</p>
                <p>Distribuye leads según disponibilidad, experiencia y performance.</p>
                <Button variant="ghost" className="mt-2 w-full rounded-full text-xs text-muted-foreground hover:text-white">
                  Configurar reglas
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="comunicacion" className="mt-8 space-y-6 focus-visible:outline-none">
          <div className="grid gap-4 lg:grid-cols-[1fr_1.2fr]">
            <Card className="border-white/10 bg-black/30 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-base font-semibold text-white">
                  Canales preferidos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <MessageCircle className="size-4 text-primary" />
                  52% WhatsApp automatizado
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <PhoneCall className="size-4 text-secondary" />
                  32% Llamadas con grabación & IA
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <MessageCircle className="size-4 text-accent" />
                  16% Email con plantillas dinámicas
                </div>
              </CardContent>
            </Card>
            <Card className="border-white/10 bg-black/30 backdrop-blur">
              <CardHeader className="flex items-center justify-between">
                <CardTitle className="text-base font-semibold text-white">
                  Inbox unificado
                </CardTitle>
                <Badge variant="outline" className="border-white/20 text-xs text-muted-foreground">
                  {"SLA < 15min"}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <ScrollArea className="max-h-64 rounded-2xl border border-white/10 bg-white/5">
                  <div className="divide-y divide-white/5">
                    {pipelineRows.map((row) => (
                      <div key={`${row.lead}-message`} className="flex items-center justify-between px-4 py-3">
                        <div>
                          <p className="text-sm font-semibold text-white">{row.lead}</p>
                          <p className="text-xs text-muted-foreground">
                            Último contacto: {row.stage}
                          </p>
                        </div>
                        <Button variant="ghost" className="rounded-full text-xs text-primary hover:text-primary">
                          Abrir conversación
                        </Button>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

