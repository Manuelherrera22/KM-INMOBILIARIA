"use client";

import { useState } from "react";
import { MessageSquare, PhoneCall, Sparkles, Video } from "lucide-react";
import { PlatformPageHeader } from "@/components/platform/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const tickets = [
  {
    id: "#SUP-2314",
    customer: "Juan Pérez",
    channel: "Chat",
    priority: "Alta",
    status: "En curso",
    assigned: "Lucía",
  },
  {
    id: "#SUP-2315",
    customer: "María Gómez",
    channel: "WhatsApp",
    priority: "Media",
    status: "Resuelto",
    assigned: "Bot + Marcos",
  },
  {
    id: "#SUP-2316",
    customer: "Broker Orion",
    channel: "Video",
    priority: "Alta",
    status: "Agendado",
    assigned: "Diego",
  },
];

const slas = [
  { label: "Tiempo respuesta chat", value: "2m", status: "Dentro SLA" },
  { label: "Tiempo respuesta WhatsApp", value: "5m", status: "Dentro SLA" },
  { label: "Tiempo cierre tickets", value: "3.2h", status: "Mejorar" },
];

const automation = [
  { title: "Bots IA", detail: "Resuelve el 62% de consultas iniciales." },
  { title: "Encuestas NPS", detail: "Promedio 4.6/5 · Envío automático post interacción." },
  { title: "Escalado automático", detail: "Casos VIP escalados a supervisores en 1 min." },
];

export default function SupportPage() {
  const [tab, setTab] = useState("tickets");

  return (
    <div className="space-y-6">
      <PlatformPageHeader
        badge="Atención al cliente"
        title="Gestión omnicanal con SLA garantizados"
        description="Coordina chat, WhatsApp, videollamadas y telefonía con bots inteligentes, agentes humanos y reportes automáticos."
        actions={
          <>
            <Button variant="outline" className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10">
              Configurar SLA
            </Button>
            <Button className="rounded-full px-5">
              Crear ticket
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
          <TabsTrigger value="tickets" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Tickets
          </TabsTrigger>
          <TabsTrigger value="canales" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Canales
          </TabsTrigger>
          <TabsTrigger value="automatizacion" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Automatización
          </TabsTrigger>
        </TabsList>

        <TabsContent value="tickets" className="mt-8 space-y-6 focus-visible:outline-none">
          <Card className="border-white/10 bg-black/30 backdrop-blur">
            <CardHeader className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base font-semibold text-white">
                  Bandeja de tickets
                </CardTitle>
                <p className="text-xs text-muted-foreground">
                  Seguimiento y asignación automática según prioridad y canal.
                </p>
              </div>
              <Badge variant="secondary">Resolución 92%</Badge>
            </CardHeader>
            <CardContent className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <Table>
                <TableHeader>
                  <TableRow className="border-white/10">
                    <TableHead className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Ticket
                    </TableHead>
                    <TableHead className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Cliente
                    </TableHead>
                    <TableHead className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Canal
                    </TableHead>
                    <TableHead className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Prioridad
                    </TableHead>
                    <TableHead className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Estado
                    </TableHead>
                    <TableHead className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Asignado
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tickets.map((ticket) => (
                    <TableRow key={ticket.id} className="border-white/10">
                      <TableCell className="text-sm text-white">{ticket.id}</TableCell>
                      <TableCell className="text-xs text-muted-foreground">{ticket.customer}</TableCell>
                      <TableCell className="text-xs text-muted-foreground">{ticket.channel}</TableCell>
                      <TableCell className="text-xs text-primary">{ticket.priority}</TableCell>
                      <TableCell className="text-xs text-muted-foreground">{ticket.status}</TableCell>
                      <TableCell className="text-xs text-muted-foreground">{ticket.assigned}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="canales" className="mt-8 space-y-6 focus-visible:outline-none">
          <div className="grid gap-4 lg:grid-cols-3">
            <Card className="border-white/10 bg-black/30 backdrop-blur">
              <CardContent className="space-y-3 p-5 text-sm text-muted-foreground">
                <div className="flex size-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <MessageSquare className="size-5" />
                </div>
                <p className="text-sm font-semibold text-white">Chat + WhatsApp</p>
                <p>Conversaciones unificadas con historial y resumen automático.</p>
              </CardContent>
            </Card>
            <Card className="border-white/10 bg-black/30 backdrop-blur">
              <CardContent className="space-y-3 p-5 text-sm text-muted-foreground">
                <div className="flex size-10 items-center justify-center rounded-2xl bg-secondary/15 text-secondary-foreground">
                  <Video className="size-5" />
                </div>
                <p className="text-sm font-semibold text-white">Video asistido</p>
                <p>Salas con co-browsing, notas y firma digital durante la sesión.</p>
              </CardContent>
            </Card>
            <Card className="border-white/10 bg-black/30 backdrop-blur">
              <CardContent className="space-y-3 p-5 text-sm text-muted-foreground">
                <div className="flex size-10 items-center justify-center rounded-2xl bg-accent/15 text-accent-foreground">
                  <PhoneCall className="size-5" />
                </div>
                <p className="text-sm font-semibold text-white">Telefonía inteligente</p>
                <p>Enrutamiento automático, grabaciones y transcripción IA.</p>
              </CardContent>
            </Card>
          </div>
          <Card className="border-white/10 bg-black/30 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-base font-semibold text-white">
                SLA en tiempo real
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 lg:grid-cols-3">
              {slas.map((sla) => (
                <div
                  key={sla.label}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-muted-foreground"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
                    {sla.label}
                  </p>
                  <p className="mt-2 text-xl font-semibold text-white">{sla.value}</p>
                  <p className="text-xs text-primary">{sla.status}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="automatizacion" className="mt-8 space-y-6 focus-visible:outline-none">
          <Card className="border-white/10 bg-black/30 backdrop-blur">
            <CardHeader className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base font-semibold text-white">
                  Automatización de soporte
                </CardTitle>
                <p className="text-xs text-muted-foreground">
                  Bots IA, follow-ups y encuestas automáticas para cada interacción.
                </p>
              </div>
              <Badge variant="outline" className="border-white/20 text-xs text-muted-foreground">
                Ahorro 42% tiempo
              </Badge>
            </CardHeader>
            <CardContent className="grid gap-4 lg:grid-cols-3">
              {automation.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-muted-foreground"
                >
                  <div className="flex items-center gap-2 text-white">
                    <Sparkles className="size-4 text-secondary" />
                    <p className="text-sm font-semibold">{item.title}</p>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">{item.detail}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

