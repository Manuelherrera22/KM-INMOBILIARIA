"use client";

import { motion } from "framer-motion";
import { Headphones, MessageCircle, PhoneCall, Video } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const supportChannels = [
  {
    title: "Chat asistido 24/7",
    description: "Bots entrenados + agentes humanos con contexto completo.",
    icon: MessageCircle,
    response: "< 2 min",
  },
  {
    title: "Videollamadas co-browsing",
    description: "Recorridos guiados, anotaciones compartidas y acuerdo instantáneo.",
    icon: Video,
    response: "Reserva inmediata",
  },
  {
    title: "Línea comercial prioritaria",
    description: "Atención telefónica con enrutamiento inteligente y grabaciones.",
    icon: PhoneCall,
    response: "Disponible 9-21h",
  },
];

export function SupportSection() {
  return (
    <section id="soporte" className="pb-24 scroll-mt-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div id="contacto" className="rounded-3xl border border-white/10 bg-gradient-to-br from-primary/20 via-black/40 to-secondary/20 p-10 backdrop-blur">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-10 lg:grid-cols-[1fr_1.3fr]"
          >
            <div className="space-y-4">
              <Badge variant="outline" className="border-white/40 bg-black/40 text-white">
                Atención al cliente premium
              </Badge>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Acompañamiento experto para tus clientes y tu equipo.
              </h2>
              <p className="text-base text-muted-foreground">
                Conecta con asesores en vivo, chatbots inteligentes y videollamadas interactivas.
                Automatiza respuestas frecuentes y escaladas con SLA garantizados.
              </p>
              <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                <span className="rounded-full border border-white/20 bg-black/30 px-3 py-1">
                  Centros de ayuda personalizados
                </span>
                <span className="rounded-full border border-white/20 bg-black/30 px-3 py-1">
                  Encuestas NPS automáticas
                </span>
                <span className="rounded-full border border-white/20 bg-black/30 px-3 py-1">
                  Integración con Zendesk, HubSpot, Freshdesk
                </span>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Button size="lg" className="h-12 rounded-full px-8 text-base">
                  Habla con un especialista
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-full border-white/30 bg-white/10 px-8 text-base text-white hover:bg-white/20"
                >
                  Descarga el brochure
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <Card className="border-white/10 bg-black/30 backdrop-blur">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex size-12 items-center justify-center rounded-2xl border border-white/20 bg-primary/20 text-primary">
                    <Headphones className="size-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Mesa de ayuda tier 2</p>
                    <p className="text-xs text-muted-foreground">
                      Especialistas técnicos y de negocio disponibles para tu equipo interno.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <div className="grid gap-4 sm:grid-cols-3">
                {supportChannels.map((channel) => (
                  <Card key={channel.title} className="border-white/10 bg-white/5 backdrop-blur">
                    <CardContent className="space-y-3 p-4 text-sm text-muted-foreground">
                      <div className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-black/30 text-white">
                        <channel.icon className="size-5" />
                      </div>
                      <p className="text-sm font-semibold text-white">{channel.title}</p>
                      <p className="text-xs text-muted-foreground">{channel.description}</p>
                      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
                        SLA {channel.response}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

