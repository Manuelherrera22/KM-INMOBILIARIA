"use client";

import { useState } from "react";
import { Play, Sparkles, Workflow } from "lucide-react";
import { PlatformPageHeader } from "@/components/platform/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Toggle } from "@/components/ui/toggle";
import { Progress } from "@/components/ui/progress";

const workflows = [
  {
    name: "Seguimiento post tour virtual",
    audience: "Leads premium",
    trigger: "Tour completado",
    status: "Activo",
    performance: "ROI 3.8x",
  },
  {
    name: "Reactivación propietarios",
    audience: "Propietarios inactivos",
    trigger: "Sin contacto 30 días",
    status: "Activo",
    performance: "32% respuestas",
  },
  {
    name: "Onboarding nuevos agentes",
    audience: "Agentes incorporados",
    trigger: "Alta en plataforma",
    status: "En pruebas",
    performance: "Checklist 82%",
  },
];

const automationsAnalytics = [
  { label: "Emails enviados", value: "6.8K", trend: "+14%" },
  { label: "Mensajes WhatsApp", value: "2.4K", trend: "+21%" },
  { label: "Recordatorios agenda", value: "1.9K", trend: "+18%" },
];

const journeySteps = [
  { title: "Disparo contextual", detail: "Tour virtual completado", progress: 100 },
  { title: "Mensaje IA + video", detail: "Envío personalizado", progress: 76 },
  { title: "Notificación asesor", detail: "Recordatorio follow-up", progress: 52 },
  { title: "Reporte de resultados", detail: " compartir en tablero", progress: 35 },
];

export default function AutomationsPage() {
  const [tab, setTab] = useState("workflows");

  return (
    <div className="space-y-6">
      <PlatformPageHeader
        badge="Automatizaciones inteligentes"
        title="Diseña workflows omnicanal y procesos asistidos por IA"
        description="Activa journeys personalizados para leads, clientes y equipos, con reglas condicionales y medición de impacto en tiempo real."
        actions={
          <>
            <Button variant="outline" className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10">
              Biblioteca de plantillas
            </Button>
            <Button className="rounded-full px-5">
              <Play className="mr-2 size-4" />
              Crear workflow
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
          <TabsTrigger value="workflows" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Workflows activos
          </TabsTrigger>
          <TabsTrigger value="analytics" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Analítica y optimización
          </TabsTrigger>
          <TabsTrigger value="journeys" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Journeys destacados
          </TabsTrigger>
        </TabsList>

        <TabsContent value="workflows" className="mt-8 space-y-6 focus-visible:outline-none">
          <Card className="border-white/10 bg-black/30 backdrop-blur">
            <CardHeader className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base font-semibold text-white">
                  Automatizaciones principales
                </CardTitle>
                <p className="text-xs text-muted-foreground">
                  Controla estado, performance y responsables en un vistazo.
                </p>
              </div>
              <Toggle
                pressed
                className="rounded-full border border-white/20 bg-white/10 text-xs text-muted-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
              >
                Auto optimizar
              </Toggle>
            </CardHeader>
            <CardContent className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <Table>
                <TableHeader>
                  <TableRow className="border-white/10">
                    <TableHead className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Workflow
                    </TableHead>
                    <TableHead className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Audiencia
                    </TableHead>
                    <TableHead className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Trigger
                    </TableHead>
                    <TableHead className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Estado
                    </TableHead>
                    <TableHead className="text-right text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Resultado
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {workflows.map((workflow) => (
                    <TableRow key={workflow.name} className="border-white/10">
                      <TableCell className="text-sm text-white">{workflow.name}</TableCell>
                      <TableCell className="text-xs text-muted-foreground">{workflow.audience}</TableCell>
                      <TableCell className="text-xs text-muted-foreground">{workflow.trigger}</TableCell>
                      <TableCell className="text-xs text-primary">{workflow.status}</TableCell>
                      <TableCell className="text-right text-xs text-muted-foreground">
                        {workflow.performance}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="mt-8 space-y-6 focus-visible:outline-none">
          <div className="grid gap-4 lg:grid-cols-3">
            {automationsAnalytics.map((metric) => (
              <Card key={metric.label} className="border-white/10 bg-black/30 backdrop-blur">
                <CardContent className="space-y-3 p-5 text-sm text-muted-foreground">
                  <div className="flex size-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Workflow className="size-5" />
                  </div>
                  <p className="text-sm font-semibold text-white">{metric.label}</p>
                  <p className="text-2xl font-semibold text-white">{metric.value}</p>
                  <p className="text-xs text-primary">{metric.trend}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-primary/10 via-white/5 to-secondary/10 p-6 text-sm text-muted-foreground">
            <p className="text-white">Recomendaciones IA</p>
            <p className="mt-2">
              Ajusta timing de envíos para leads premium, suma pasos de video mensajes personalizados
              y activa segmentación avanzada por comportamiento en portales externos.
            </p>
            <Button variant="ghost" className="mt-4 rounded-full text-xs text-primary hover:text-primary">
              Aplicar sugerencias
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="journeys" className="mt-8 space-y-6 focus-visible:outline-none">
          <div className="grid gap-4 lg:grid-cols-2">
            {journeySteps.map((step) => (
              <Card key={step.title} className="border-white/10 bg-black/30 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-sm font-semibold text-white">
                    {step.title}
                  </CardTitle>
                  <p className="text-xs text-muted-foreground">{step.detail}</p>
                </CardHeader>
                <CardContent>
                  <Progress value={step.progress} className="h-2 bg-white/10" />
                  <p className="mt-2 text-xs text-muted-foreground">
                    Completitud {step.progress}%
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-3 text-white">
              <Sparkles className="size-5 text-secondary" />
              Motor de workflows inteligente
            </div>
            <p className="mt-3">
              Diseña journeys visualmente, reasigna acciones en drag & drop y valida simulaciones
              antes de activarlas. Define A/B testing con métricas automáticas.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

