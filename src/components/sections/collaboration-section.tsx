"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Users,
  FileText,
  Share2,
  Video,
  PenLine,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const collaborators = [
  { name: "Lucía", role: "Broker senior", status: "En llamada" },
  { name: "Marcos", role: "Agente junior", status: "Editando propuesta" },
  { name: "Ana", role: "Marketing", status: "Campaña en revisión" },
  { name: "Diego", role: "Legal", status: "Contrato actualizado" },
];

const streamEvents = [
  { time: "09:35", detail: "Comentario en Planos Torre Nova", owner: "Lucía" },
  { time: "10:02", detail: "Video llamada con cliente Juan Perez", owner: "Marcos" },
  { time: "10:45", detail: "Firma digital enviada a propietario", owner: "Diego" },
  { time: "11:10", detail: "Nota de oportunidad destacada", owner: "Ana" },
];

export function CollaborationSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
          >
            <div className="flex flex-wrap items-center gap-4">
              <Badge variant="outline" className="border-secondary/40 bg-secondary/10 text-secondary-foreground">
                Colaboración en tiempo real
              </Badge>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1 rounded-full border border-white/10 bg-black/30 px-3 py-1">
                  <Video className="size-4 text-secondary" /> Video Rooms
                </span>
                <span className="flex items-center gap-1 rounded-full border border-white/10 bg-black/30 px-3 py-1">
                  <MessageSquare className="size-4 text-primary" /> Chat contextual
                </span>
                <span className="flex items-center gap-1 rounded-full border border-white/10 bg-black/30 px-3 py-1">
                  <PenLine className="size-4 text-accent" /> Edición simultánea
                </span>
              </div>
            </div>

            <h2 className="mt-6 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Un HQ colaborativo para equipos, desarrolladores y socios comerciales.
            </h2>
            <p className="mt-4 max-w-2xl text-base text-muted-foreground">
              Crea espacios compartidos por proyectos, asigna tareas, comparte actualizaciones
              instantáneas y coordina reuniones con videollamadas integradas en un clic.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Workspace: Torre Nova</span>
                  <span>Sincronizado 3 min atrás</span>
                </div>
                <div className="mt-4 space-y-4 text-sm text-muted-foreground">
                  <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
                    <Share2 className="size-4 text-primary" />
                    <div>
                      <p className="text-white">Permisos granulares</p>
                      <p>Define espacios, roles y visibilidad por propiedad o cliente.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
                    <FileText className="size-4 text-secondary" />
                    <div>
                      <p className="text-white">Notas contextuales</p>
                      <p>Adjunta comentarios, checklist y archivos directamente en cada ficha.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
                    <Users className="size-4 text-accent" />
                    <div>
                      <p className="text-white">Workspace extendido</p>
                      <p>Invita a brokers externos, arquitectos y abogados con controles RBAC.</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="border-white/10 bg-white/5 backdrop-blur">
                <CardContent className="space-y-4 p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-white">Equipo conectado</p>
                    <Badge variant="secondary">Live</Badge>
                  </div>
                  <div className="space-y-3">
                    {collaborators.map((user) => (
                      <div
                        key={user.name}
                        className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-muted-foreground"
                      >
                        <div className="flex items-center gap-3">
                          <Avatar className="size-10 border border-white/10">
                            <AvatarImage
                              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=1f2937&color=fff`}
                              alt={user.name}
                            />
                            <AvatarFallback>{user.name.slice(0, 2)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium text-white">{user.name}</p>
                            <p className="text-xs text-muted-foreground">{user.role}</p>
                          </div>
                        </div>
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground">
                          {user.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex h-full flex-col gap-6"
          >
            <Card className="flex-1 border-white/10 bg-gradient-to-br from-secondary/15 via-white/5 to-transparent p-6 backdrop-blur">
              <CardContent className="flex h-full flex-col justify-between p-0">
                <div>
                  <p className="text-sm font-medium text-white">Timeline compartido</p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Sigue cada actualización de tu equipo en tiempo real con notificaciones
                    inteligentes dentro de la plataforma o en tus canales preferidos.
                  </p>
                </div>
                <div className="mt-6 space-y-3 text-sm text-muted-foreground">
                  {streamEvents.map((event) => (
                    <div
                      key={`${event.time}-${event.detail}`}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-3 py-3"
                    >
                      <div>
                        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground/70">
                          {event.time}
                        </p>
                        <p className="mt-1 text-sm text-white">{event.detail}</p>
                      </div>
                      <span className="text-xs text-muted-foreground/70">{event.owner}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-white/5 backdrop-blur">
              <CardContent className="flex flex-col gap-4 p-6">
                <div className="flex items-center gap-3 text-sm font-medium text-white">
                  <MessageSquare className="size-5 text-primary" />
                  Chat & video integrados
                </div>
                <p className="text-sm text-muted-foreground">
                  Abre salas de video, comparte pantalla y agrega invitados externos sin salir
                  de la ficha de propiedad o cliente. Graba, transcribe y convierte acuerdos en
                  tareas automáticamente.
                </p>
                <Separator className="bg-white/10" />
                <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                  <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1">
                    Integrado con Teams, Meet, Zoom
                  </span>
                  <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1">
                    Notas inteligentes por llamada
                  </span>
                  <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1">
                    Traducción instantánea
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

