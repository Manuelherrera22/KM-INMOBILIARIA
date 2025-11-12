"use client";

import { useState } from "react";
import { Palette, Sparkles, Target } from "lucide-react";
import { PlatformPageHeader } from "@/components/platform/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const campaigns = [
  {
    name: "Lanzamiento Torre Nova",
    status: "Activa",
    budget: "USD 12K",
    roi: "4.2x",
    channels: "Email · Ads · Landing",
  },
  {
    name: "Programa inversores rental",
    status: "Activa",
    budget: "USD 8K",
    roi: "3.5x",
    channels: "Landing · Webinar · Follow-up IA",
  },
  {
    name: "Captación propietarios Barrio Norte",
    status: "Planeada",
    budget: "USD 6K",
    roi: "Objetivo 2.8x",
    channels: "Ads · Outreach · Llamadas",
  },
];

const audiences = [
  { name: "Inversores premium", size: "2.1K", conversion: "19%" },
  { name: "Propietarios potenciales", size: "1.6K", conversion: "14%" },
  { name: "Clientes internacionales", size: "980", conversion: "17%" },
];

const landingStats = [
  { title: "Landing Torre Nova", visits: "42K", conversion: "6.3%", variant: "B" },
  { title: "Landing Altos del Parque", visits: "18K", conversion: "5.2%", variant: "A" },
  { title: "Landing Oficinas Catalinas", visits: "12K", conversion: "4.9%", variant: "Personalizada" },
];

export default function MarketingPage() {
  const [tab, setTab] = useState("campanas");

  return (
    <div className="space-y-6">
      <PlatformPageHeader
        badge="Marketing omnicanal"
        title="Activa campañas, landings y audiencias segmentadas"
        description="Diseña experiencias personalizadas y mide el impacto de cada interacción con dashboards en tiempo real."
        actions={
          <>
            <Button variant="outline" className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10">
              Crear audience
            </Button>
            <Button className="rounded-full px-5">
              Nueva campaña
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
          <TabsTrigger value="campanas" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Campañas
          </TabsTrigger>
          <TabsTrigger value="audiencias" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Audiencias
          </TabsTrigger>
          <TabsTrigger value="landings" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Landings & contenido
          </TabsTrigger>
        </TabsList>

        <TabsContent value="campanas" className="mt-8 space-y-6 focus-visible:outline-none">
          <Card className="border-white/10 bg-black/30 backdrop-blur">
            <CardHeader className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base font-semibold text-white">
                  Campañas activas
                </CardTitle>
                <p className="text-xs text-muted-foreground">
                  Monitoriza ROI y canales en tiempo real, con ajustes automáticos sugeridos.
                </p>
              </div>
              <Badge variant="secondary">ROI promedio 3.6x</Badge>
            </CardHeader>
            <CardContent className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <Table>
                <TableHeader>
                  <TableRow className="border-white/10">
                    <TableHead className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Campaña
                    </TableHead>
                    <TableHead className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Estado
                    </TableHead>
                    <TableHead className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Presupuesto
                    </TableHead>
                    <TableHead className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      ROI
                    </TableHead>
                    <TableHead className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Canales
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {campaigns.map((campaign) => (
                    <TableRow key={campaign.name} className="border-white/10">
                      <TableCell className="text-sm text-white">{campaign.name}</TableCell>
                      <TableCell className="text-xs text-primary">{campaign.status}</TableCell>
                      <TableCell className="text-xs text-muted-foreground">{campaign.budget}</TableCell>
                      <TableCell className="text-xs text-muted-foreground">{campaign.roi}</TableCell>
                      <TableCell className="text-xs text-muted-foreground">{campaign.channels}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="audiencias" className="mt-8 space-y-6 focus-visible:outline-none">
          <div className="grid gap-4 lg:grid-cols-3">
            {audiences.map((audience) => (
              <Card key={audience.name} className="border-white/10 bg-black/30 backdrop-blur">
                <CardContent className="space-y-3 p-5 text-sm text-muted-foreground">
                  <div className="flex size-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Target className="size-5" />
                  </div>
                  <p className="text-sm font-semibold text-white">{audience.name}</p>
                  <p>{audience.size} contactos</p>
                  <p className="text-xs text-primary">Conversión {audience.conversion}</p>
                  <Button variant="ghost" className="w-full rounded-full text-xs text-muted-foreground hover:text-white">
                    Ver reglas de segmentación
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-primary/10 via-white/5 to-secondary/10 p-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-3 text-white">
              <Sparkles className="size-5 text-secondary" />
              Audiencias dinámicas con IA
            </div>
            <p className="mt-3">
              Segmenta por intención, comportamiento y capacidad financiera. Conecta campañas con CRM
              y activa nurtures personalizados con scoring en tiempo real.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="landings" className="mt-8 space-y-6 focus-visible:outline-none">
          <Card className="border-white/10 bg-black/30 backdrop-blur">
            <CardHeader className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base font-semibold text-white">
                  Landings y contenido
                </CardTitle>
                <p className="text-xs text-muted-foreground">
                  Performance por página con test A/B y asistentes IA para copy y diseño.
                </p>
              </div>
              <Button variant="ghost" className="rounded-full text-xs text-muted-foreground hover:text-white">
                Nuevo diseño
              </Button>
            </CardHeader>
            <CardContent className="grid gap-4 lg:grid-cols-3">
              {landingStats.map((landing) => (
                <div
                  key={landing.title}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-muted-foreground"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-white">{landing.title}</p>
                    <Badge variant="outline" className="border-white/20 text-xs text-muted-foreground">
                      Variante {landing.variant}
                    </Badge>
                  </div>
                  <p className="mt-3 text-xs text-muted-foreground">Visitas {landing.visits}</p>
                  <p className="text-xs text-primary">Conversión {landing.conversion}</p>
                  <Button variant="ghost" className="mt-2 w-full rounded-full text-xs text-muted-foreground hover:text-white">
                    Ver sesión de heatmap
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-black/30 backdrop-blur">
            <CardContent className="flex flex-col gap-4 p-6 text-sm text-muted-foreground">
              <div className="flex size-12 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                <Palette className="size-6" />
              </div>
              <p className="text-base font-semibold text-white">Studio creativo</p>
              <p>
                Genera piezas adaptadas a cada audiencia con IA generativa. Exporta a Meta, Google y
                medios programáticos con versionado y aprobaciones integradas.
              </p>
              <Button variant="ghost" className="self-start rounded-full text-xs text-muted-foreground hover:text-white">
                Abrir studio
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

