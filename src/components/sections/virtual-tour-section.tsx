"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Camera, Map, Smartphone } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const VirtualTourCanvas = dynamic(
  () =>
    import("@/components/tours/virtual-tour-canvas").then(
      (mod) => mod.VirtualTourCanvas,
    ),
  {
    ssr: false,
  },
);

const devicePreviews = [
  { device: "VR Headset", detail: "Experiencia inmersiva 360º" },
  { device: "Tablet", detail: "Modo asesor con notas colaborativas" },
  { device: "Mobile", detail: "Recorridos guiados y chat integrado" },
];

export function VirtualTourSection() {
  return (
    <section
      id="tours"
      className="relative overflow-hidden pb-24 pt-16 scroll-mt-32"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-40 top-32 h-[420px] w-[420px] rounded-full bg-primary/30 blur-[220px]" />
        <div className="absolute -right-24 bottom-10 h-[360px] w-[360px] rounded-full bg-secondary/25 blur-[200px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Tours virtuales 360º"
          title="Recorridos hiperrealistas que convierten interés en visitas calificadas."
          description="Ofrece experiencias inmersivas con anotaciones contextuales, analítica de interacción y guías automatizadas para asesorar a tus clientes como si estuvieras allí."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[32px] border border-white/10 bg-black/20 p-4 backdrop-blur-lg"
          >
            <div className="absolute left-6 top-6 z-10 flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-muted-foreground">
              <Camera className="size-4 text-primary" />
              Demo en vivo 360º
            </div>
            <div className="aspect-[16/9] overflow-hidden rounded-[24px] border border-white/5 bg-black">
              <VirtualTourCanvas />
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
              <span>
                Tracking de calor · Chats in-tour · Warnings de interés
              </span>
              <Badge variant="outline" className="border-primary/30 text-primary">
                VR Ready
              </Badge>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="space-y-6"
          >
            <Card className="border-white/10 bg-white/5 p-6 backdrop-blur">
              <CardContent className="space-y-4 p-0 text-sm text-muted-foreground">
                <div className="flex items-center gap-3 text-white">
                  <Map className="size-5 text-primary" />
                  <div>
                    <p className="text-base font-medium">
                      Capta y destaca cada detalle
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Anota ambientes, materiales y puntos de interés con capas
                      interactivas visibles en tiempo real por tus clientes.
                    </p>
                  </div>
                </div>
                <ul className="grid gap-3 text-sm">
                  <li className="rounded-2xl border border-white/5 bg-black/20 px-4 py-2 text-muted-foreground">
                    Hotspots multimedia con video, planos y fichas técnicas.
                  </li>
                  <li className="rounded-2xl border border-white/5 bg-black/20 px-4 py-2 text-muted-foreground">
                    Telemetría de permanencia y alertas sobre espacios más
                    visitados.
                  </li>
                  <li className="rounded-2xl border border-white/5 bg-black/20 px-4 py-2 text-muted-foreground">
                    Guiones asistidos por IA con narración automática.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center gap-3 text-sm font-medium text-white">
                <Smartphone className="size-5 text-secondary" />
                Multipantalla sin fricción
              </div>
              <div className="mt-4 grid gap-3">
                {devicePreviews.map((item) => (
                  <div
                    key={item.device}
                    className="flex items-center justify-between rounded-2xl border border-white/5 bg-black/20 px-4 py-3 text-xs text-muted-foreground"
                  >
                    <span>{item.device}</span>
                    <span>{item.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

