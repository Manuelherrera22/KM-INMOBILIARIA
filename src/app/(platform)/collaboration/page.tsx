"use client";

import { useState } from "react";
import { MessageSquare, Share2, Users, Video } from "lucide-react";
import { PlatformPageHeader } from "@/components/platform/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const spaces = [
  {
    name: "Proyecto Torre Nova",
    members: 18,
    status: "En curso",
    updates: "Actualizado hace 12 min",
  },
  {
    name: "Captación Barrio Norte",
    members: 9,
    status: "Campaña activa",
    updates: "Hace 25 min",
  },
  {
    name: "Due diligence oficinas Catalinas",
    members: 6,
    status: "Revisión legal",
    updates: "Hace 45 min",
  },
];

const messages = [
  {
    user: "Lucía García",
    role: "Broker senior",
    content: "Actualicé el contrato con los comentarios del propietario.",
    time: "09:24",
  },
  {
    user: "Marcos Díaz",
    role: "Agente comercial",
    content: "Tour virtual revisión final listo para compartir.",
    time: "10:03",
  },
  {
    user: "Ana Prieto",
    role: "Marketing",
    content: "Landing y anuncios aprobados. Go live 11:00.",
    time: "10:32",
  },
];

const callAgenda = [
  { time: "11:00", title: "Call inversor Orion", detail: "Visita guiada + firma digital" },
  { time: "13:30", title: "Videollamada propietario Torre Nova", detail: "Ajustes contrato" },
  { time: "16:00", title: "Demo equipo aliado", detail: "Onboarding y permisos" },
];

export default function CollaborationPage() {
  const [tab, setTab] = useState("espacios");

  return (
    <div className="space-y-6">
      <PlatformPageHeader
        badge="Trabajo en equipo"
        title="Espacios colaborativos, chat y videollamadas integradas"
        description="Coordina equipos internos y externos con espacios compartidos, permisos granulares y comunicación contextual."
        actions={
          <>
            <Button variant="outline" className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10">
              Invitar colaboradores
            </Button>
            <Button className="rounded-full px-5">
              Crear workspace
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
          <TabsTrigger value="espacios" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Espacios
          </TabsTrigger>
          <TabsTrigger value="comunicacion" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Comunicación
          </TabsTrigger>
          <TabsTrigger value="videollamadas" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Video rooms
          </TabsTrigger>
        </TabsList>

        <TabsContent value="espacios" className="mt-8 space-y-6 focus-visible:outline-none">
          <div className="grid gap-4 lg:grid-cols-3">
            {spaces.map((space) => (
              <Card key={space.name} className="border-white/10 bg-black/30 backdrop-blur">
                <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-4">
                  <div>
                    <CardTitle className="text-sm font-semibold text-white">
                      {space.name}
                    </CardTitle>
                    <p className="text-xs text-muted-foreground">{space.updates}</p>
                  </div>
                  <Badge variant="outline" className="border-white/20 text-xs text-muted-foreground">
                    {space.status}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-3 text-xs text-muted-foreground">
                  <p>{space.members} miembros activos</p>
                  <p>Tareas sincronizadas y checklists compartidos.</p>
                  <Button variant="ghost" className="w-full rounded-full text-xs text-muted-foreground hover:text-white">
                    Abrir workspace
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="comunicacion" className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_1fr] focus-visible:outline-none">
          <Card className="border-white/10 bg-black/30 backdrop-blur">
            <CardHeader className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base font-semibold text-white">
                  Conversaciones recientes
                </CardTitle>
                <p className="text-xs text-muted-foreground">
                  Chats contextuales dentro de cada propiedad u oportunidad.
                </p>
              </div>
              <Badge variant="secondary">Live</Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <ScrollArea className="max-h-72 space-y-3">
                {messages.map((msg) => (
                  <div
                    key={msg.user}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-muted-foreground"
                  >
                    <Avatar className="size-10 border border-white/10">
                      <AvatarImage
                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(msg.user)}&background=1d1f2b&color=fff`}
                        alt={msg.user}
                      />
                      <AvatarFallback>{msg.user.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold text-white">{msg.user}</p>
                        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
                          {msg.time}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">{msg.role}</p>
                      <p className="mt-2 text-sm text-white">{msg.content}</p>
                    </div>
                  </div>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-black/30 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-base font-semibold text-white">
                Canales integrados
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <MessageSquare className="size-4 text-primary" />
                Chat omnicanal (WhatsApp, email, SMS)
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <Share2 className="size-4 text-secondary" />
                Compartición segura de documentos
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <Users className="size-4 text-accent" />
                Roles, grupos y menciones inteligentes
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="videollamadas" className="mt-8 space-y-6 focus-visible:outline-none">
          <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
            <Card className="border-white/10 bg-black/30 backdrop-blur">
              <CardHeader className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-base font-semibold text-white">
                    Agenda de videollamadas
                  </CardTitle>
                  <p className="text-xs text-muted-foreground">
                    Salas con co-browsing, notas y grabación automática.
                  </p>
                </div>
                <Button variant="ghost" className="rounded-full text-xs text-muted-foreground hover:text-white">
                  Ver calendario
                </Button>
              </CardHeader>
              <CardContent className="space-y-3">
                {callAgenda.map((call) => (
                  <div
                    key={call.title}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-muted-foreground"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
                      {call.time}
                    </p>
                    <p className="mt-1 text-white">{call.title}</p>
                    <p className="text-xs text-muted-foreground">{call.detail}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-black/30 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-base font-semibold text-white">
                  Funcionalidades destacadas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <Video className="mr-2 inline size-4 text-primary" />
                  Grabación, transcripción y resúmenes automáticos.
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  Traducción simultánea y subtítulos para clientes internacionales.
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  Notas inteligentes con asignación directa a tareas y contratos.
                </div>
                <Separator className="bg-white/10" />
                <Button variant="ghost" className="w-full rounded-full text-xs text-muted-foreground hover:text-white">
                  Configurar salas personalizadas
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

