"use client";

import { useMemo, useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import { Activity, Globe, TrendingUp } from "lucide-react";
import { PlatformPageHeader } from "@/components/platform/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ensureChartsRegistered } from "@/lib/register-charts";

ensureChartsRegistered();

const demandTrendData = {
  labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
  datasets: [
    {
      label: "Demanda Palermo Soho",
      data: [68, 72, 78, 82, 88, 90],
      borderColor: "rgba(59,130,246,1)",
      backgroundColor: "rgba(59,130,246,0.2)",
      tension: 0.4,
      fill: true,
    },
    {
      label: "Demanda Belgrano R",
      data: [54, 58, 60, 63, 65, 69],
      borderColor: "rgba(34,197,94,1)",
      backgroundColor: "rgba(34,197,94,0.2)",
      tension: 0.4,
      fill: true,
    },
  ],
};

const pricingBarData = {
  labels: ["Palermo", "Belgrano", "Recoleta", "Puerto Madero"],
  datasets: [
    {
      label: "Precio promedio USD/m²",
      data: [2850, 2650, 3100, 3850],
      backgroundColor: [
        "rgba(59,130,246,0.8)",
        "rgba(168,85,247,0.8)",
        "rgba(45,212,191,0.8)",
        "rgba(250,204,21,0.8)",
      ],
      borderRadius: 12,
    },
  ],
};

const kpiTiles = [
  { label: "Nuevos leads calificados", value: "1.240", trend: "+26%" },
  { label: "Tours completados", value: "1.842", trend: "+18%" },
  { label: "Cierres confirmados", value: "48", trend: "+12%" },
  { label: "Tiempo medio de cierre", value: "32 días", trend: "-5 días" },
];

export default function AnalyticsPage() {
  const [tab, setTab] = useState("mercado");

  const lineOptions = useMemo(
    () => ({
      responsive: true,
      plugins: { legend: { display: false }, tooltip: { enabled: true } },
      scales: {
        x: { grid: { color: "rgba(255,255,255,0.04)" }, ticks: { color: "rgba(148,163,184,0.8)" } },
        y: { grid: { color: "rgba(255,255,255,0.04)" }, ticks: { color: "rgba(148,163,184,0.8)" } },
      },
    }),
    [],
  );

  const barOptions = useMemo(
    () => ({
      responsive: true,
      plugins: { legend: { display: false }, tooltip: { enabled: true } },
      scales: {
        x: { grid: { color: "rgba(255,255,255,0.04)" }, ticks: { color: "rgba(148,163,184,0.8)" } },
        y: { grid: { color: "rgba(255,255,255,0.04)" }, ticks: { color: "rgba(148,163,184,0.8)" } },
      },
    }),
    [],
  );

  return (
    <div className="space-y-6">
      <PlatformPageHeader
        badge="Analítica avanzada"
        title="Visualiza tendencias, pricing y rentabilidad"
        description="Accede a dashboards interactivos con insights de mercado, rendimiento y forecasting con IA."
        actions={
          <>
            <Button variant="outline" className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10">
              Exportar a BI
            </Button>
            <Button className="rounded-full px-5">
              Crear reporte
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
          <TabsTrigger value="mercado" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Insights de mercado
          </TabsTrigger>
          <TabsTrigger value="rendimiento" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Rendimiento comercial
          </TabsTrigger>
          <TabsTrigger value="proyecciones" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Forecast
          </TabsTrigger>
        </TabsList>

        <TabsContent value="mercado" className="mt-8 space-y-6 focus-visible:outline-none">
          <Card className="border-white/10 bg-black/30 backdrop-blur">
            <CardHeader className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base font-semibold text-white">
                  Demanda por zona
                </CardTitle>
                <p className="text-xs text-muted-foreground">
                  Evolución de consultas y comportamiento de usuarios en portales.
                </p>
              </div>
              <Badge variant="secondary">Últimos 6 meses</Badge>
            </CardHeader>
            <CardContent>
              <Line data={demandTrendData} options={lineOptions} height={280} />
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-black/30 backdrop-blur">
            <CardHeader className="flex items-center justify-between">
              <CardTitle className="text-base font-semibold text-white">
                Pricing comparativo
              </CardTitle>
              <Badge variant="outline" className="border-white/20 text-xs text-muted-foreground">
                USD / m²
              </Badge>
            </CardHeader>
            <CardContent>
              <Bar data={pricingBarData} options={barOptions} height={280} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rendimiento" className="mt-8 space-y-6 focus-visible:outline-none">
          <div className="grid gap-4 lg:grid-cols-4">
            {kpiTiles.map((tile) => (
              <Card key={tile.label} className="border-white/10 bg-black/30 backdrop-blur">
                <CardContent className="space-y-3 p-5 text-sm text-muted-foreground">
                  <div className="flex size-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Activity className="size-5" />
                  </div>
                  <p className="text-sm font-semibold text-white">{tile.label}</p>
                  <p className="text-2xl font-semibold text-white">{tile.value}</p>
                  <p className="text-xs text-primary">{tile.trend}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-primary/10 via-white/5 to-secondary/10 p-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-3 text-white">
              <TrendingUp className="size-5 text-secondary" />
              Recomendaciones IA
            </div>
            <p className="mt-3">
              Ajusta pricing en Palermo +4%, refuerza campañas en inversores y activa cross selling
              con inmuebles comerciales para tu cartera premium.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="proyecciones" className="mt-8 space-y-6 focus-visible:outline-none">
          <Card className="border-white/10 bg-black/30 backdrop-blur">
            <CardHeader className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base font-semibold text-white">
                  Forecast trimestral
                </CardTitle>
                <p className="text-xs text-muted-foreground">
                  Proyecciones basadas en performance histórico y mercado.
                </p>
              </div>
              <Badge variant="outline" className="border-white/20 text-xs text-muted-foreground">
                Escenario optimista
              </Badge>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                Ventas estimadas Q3 · USD 4.6M · +22% vs Q2
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                Interés internacional +18% · Ajuste recomendando en listados bilingües.
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                Inventario crítico: residenciales de 2 ambientes · demanda +28%.
              </div>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-black/30 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-base font-semibold text-white">
                Integraciones de datos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <Globe className="size-4 text-primary" />
                Data lake propio + portales externos (Mercado Libre, Zillow, Idealista)
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                Conectores BI (Power BI, Looker, Tableau) con datasets optimizados.
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                Enriquecimiento automático con datos catastrales y socioeconómicos.
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

