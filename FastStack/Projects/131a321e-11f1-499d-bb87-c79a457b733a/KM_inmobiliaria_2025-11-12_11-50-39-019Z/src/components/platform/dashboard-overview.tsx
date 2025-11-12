"use client";

import { useMemo } from "react";
import { Line, Doughnut } from "react-chartjs-2";
import { Activity, ArrowUpRight, Building2, Users2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ensureChartsRegistered } from "@/lib/register-charts";
import { PlatformPageHeader } from "@/components/platform/page-header";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

ensureChartsRegistered();

const pipelineByStage = {
  labels: ["Captación", "Interés", "Visita", "Negociación", "Cierre"],
  datasets: [
    {
      label: "Pipeline activo",
      data: [42, 64, 28, 16, 9],
      borderColor: "rgba(59, 130, 246, 1)",
      backgroundColor: "rgba(59, 130, 246, 0.2)",
      tension: 0.45,
      fill: true,
      pointBackgroundColor: "rgba(59, 130, 246, 1)",
      pointBorderColor: "#0b1220",
    },
  ],
};

const productMix = {
  labels: ["Residencial", "Comercial", "Oficinas", "Terrenos"],
  datasets: [
    {
      data: [48, 22, 18, 12],
      backgroundColor: [
        "rgba(59, 130, 246, 0.8)",
        "rgba(168, 85, 247, 0.8)",
        "rgba(45, 212, 191, 0.8)",
        "rgba(250, 204, 21, 0.8)",
      ],
      borderColor: "rgba(12, 18, 32, 1)",
      borderWidth: 2,
    },
  ],
};

const recentActivities = [
  {
    time: "09:15",
    type: "Tour virtual",
    detail: "Residencial Altos del Parque · 3 interesados",
  },
  {
    time: "10:05",
    type: "Campaña",
    detail: "Lanzamiento Torre Nova · ROI proyectado 4.2x",
  },
  {
    time: "11:20",
    type: "Contrato",
    detail: "Firma digital depto. Palermo · Propietario confirmado",
  },
  {
    time: "12:10",
    type: "Lead calificado",
    detail: "Cliente inversor solicitó video tour personalizado",
  },
];

const topProperties = [
  {
    name: "Torre Nova Sky Residence",
    channel: "Portales + Landing",
    visits: "1.8K",
    status: "Negociación",
  },
  {
    name: "Loft Palermo Design",
    channel: "Landing personalizada",
    visits: "1.1K",
    status: "Visitas",
  },
  {
    name: "Oficinas Catalinas",
    channel: "Private Listing",
    visits: "860",
    status: "Cierre",
  },
];

export function DashboardOverview() {
  const lineOptions = useMemo(
    () => ({
      responsive: true,
      plugins: { legend: { display: false }, tooltip: { enabled: true } },
      scales: {
        x: {
          grid: { color: "rgba(255,255,255,0.03)" },
          ticks: { color: "rgba(148,163,184,0.8)", font: { size: 11 } },
        },
        y: {
          grid: { color: "rgba(255,255,255,0.03)" },
          ticks: { color: "rgba(148,163,184,0.8)", font: { size: 11 } },
        },
      },
    }),
    [],
  );

  const doughnutOptions = useMemo(
    () => ({
      responsive: true,
      cutout: "68%",
      plugins: {
        legend: { display: false },
      },
    }),
    [],
  );

  return (
    <div className="space-y-6">
      <PlatformPageHeader
        badge="Panel ejecutivo"
        title="Resumen de operaciones"
        description="Monitoriza KPIs críticos, actividad reciente y salud del pipeline en un solo vistazo."
        actions={
          <>
            <Button variant="outline" className="rounded-full border-white/20 bg-white/10 text-white hover:bg-white/20">
              Exportar reporte
            </Button>
            <Button className="rounded-full px-5">Compartir dashboard</Button>
          </>
        }
      />

      <div className="grid gap-4 lg:grid-cols-4">
        <Card className="border-white/10 bg-white/5 backdrop-blur">
          <CardContent className="flex flex-col gap-4 p-5">
            <div className="flex size-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Users2 className="size-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Leads activos
              </p>
              <p className="mt-2 text-2xl font-semibold text-white">324</p>
              <p className="text-xs text-primary">+12% vs. semana anterior</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-white/10 bg-white/5 backdrop-blur">
          <CardContent className="flex flex-col gap-4 p-5">
            <div className="flex size-10 items-center justify-center rounded-2xl bg-secondary/15 text-secondary-foreground">
              <Building2 className="size-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Propiedades publicadas
              </p>
              <p className="mt-2 text-2xl font-semibold text-white">186</p>
              <p className="text-xs text-secondary">32 portales sincronizados</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-white/10 bg-white/5 backdrop-blur">
          <CardContent className="flex flex-col gap-4 p-5">
            <div className="flex size-10 items-center justify-center rounded-2xl bg-accent/15 text-accent-foreground">
              <Activity className="size-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Tours completados
              </p>
              <p className="mt-2 text-2xl font-semibold text-white">1.842</p>
              <p className="text-xs text-accent">67 tours VR esta semana</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-white/10 bg-white/5 backdrop-blur">
          <CardContent className="flex flex-col gap-4 p-5">
            <div className="flex size-10 items-center justify-center rounded-2xl bg-white/15 text-white">
              <ArrowUpRight className="size-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Tasa de conversión
              </p>
              <p className="mt-2 text-2xl font-semibold text-white">18.4%</p>
              <p className="text-xs text-muted-foreground">Visita → cierre</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <Card className="border-white/10 bg-white/5 backdrop-blur">
          <CardHeader className="flex items-center justify-between">
            <CardTitle className="text-base font-semibold text-white">
              Evolución del pipeline
            </CardTitle>
            <Badge variant="secondary">Últimas 4 semanas</Badge>
          </CardHeader>
          <CardContent>
            <Line data={pipelineByStage} options={lineOptions} height={280} />
          </CardContent>
        </Card>

        <Card className="border-white/10 bg-white/5 backdrop-blur">
          <CardHeader className="flex items-center justify-between">
            <CardTitle className="text-base font-semibold text-white">
              Mix de inventario
            </CardTitle>
            <Badge variant="outline" className="border-white/10 text-xs text-muted-foreground">
              186 unidades
            </Badge>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center gap-6">
            <div className="relative h-48 w-48">
              <Doughnut data={productMix} options={doughnutOptions} />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-xs text-muted-foreground">
                <span className="text-xl font-semibold text-white">Portafolio</span>
                <span>Actualizado hoy</span>
              </div>
            </div>
            <div className="grid w-full gap-3 text-xs text-muted-foreground">
              {productMix.labels.map((label, idx) => (
                <div
                  key={label}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-2"
                >
                  <span>{label}</span>
                  <span>{productMix.datasets[0].data[idx]}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <Card className="border-white/10 bg-white/5 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-base font-semibold text-white">
              Actividad reciente
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentActivities.map((activity) => (
              <div
                key={`${activity.time}-${activity.type}`}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-muted-foreground"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground/70">
                    {activity.time}
                  </p>
                  <p className="mt-1 text-white">{activity.type}</p>
                  <p className="text-xs text-muted-foreground">{activity.detail}</p>
                </div>
                <Badge variant="outline" className="border-white/15 text-xs text-muted-foreground">
                  Ver
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-white/10 bg-white/5 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-base font-semibold text-white">
              Propiedades destacadas
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Table>
              <TableHeader>
                <TableRow className="border-white/10">
                  <TableHead className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    Propiedad
                  </TableHead>
                  <TableHead className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    Canal
                  </TableHead>
                  <TableHead className="text-right text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    Estado
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topProperties.map((property) => (
                  <TableRow key={property.name} className="border-white/10">
                    <TableCell className="text-sm text-white">{property.name}</TableCell>
                    <TableCell className="text-xs text-muted-foreground">
                      {property.channel}
                    </TableCell>
                    <TableCell className="text-right text-xs text-primary">
                      {property.status}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Separator className="bg-white/10" />
            <Button variant="ghost" className="w-full justify-center text-xs text-muted-foreground hover:text-white">
              Ver catálogo completo
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

