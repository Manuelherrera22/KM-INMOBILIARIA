"use client";

import { motion } from "framer-motion";
import {
  AlarmClock,
  Building,
  CalendarCheck,
  FileSignature,
  Network,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "./section-heading";

const featureTiles = [
  {
    title: "Gestión de inventario",
    description:
      "Creación rápida, versionado y publicación instantánea en sitios propios y marketplaces aliados.",
    icon: Building,
    metric: "Catálogo vivo",
  },
  {
    title: "CRM nativo",
    description:
      "Pipeline visual, segmentación avanzada, scoring de leads impulsado por datos.",
    icon: UsersRound,
    metric: "Cierre +28%",
  },
  {
    title: "Automatizaciones",
    description:
      "Workflows condicionales con recordatorios, nurtures multicanal y reportes automáticos.",
    icon: AlarmClock,
    metric: "Ahorra 12h/sem",
  },
  {
    title: "Integraciones",
    description:
      "API abierta, Webhooks, conector nativo a portales, ERPs y herramientas de marketing.",
    icon: Network,
    metric: "32 conectores",
  },
  {
    title: "Documentos digitales",
    description:
      "Contratos inteligentes, control de versiones y firmas electrónicas auditadas.",
    icon: FileSignature,
    metric: "Firmas 100% online",
  },
  {
    title: "Agenda sin fricción",
    description:
      "Reservas automáticas de tours virtuales, visitas físicas y videollamadas.",
    icon: CalendarCheck,
    metric: "Agenda 24/7",
  },
  {
    title: "IA generativa",
    description:
      "Redacción de descripciones, recomendaciones de pricing y seguimiento scoring.",
    icon: Sparkles,
    metric: "IA copiloto",
  },
  {
    title: "Seguridad & cumplimiento",
    description:
      "Roles granulares, trazabilidad total, cifrado extremo a extremo y cumplimiento GDPR.",
    icon: ShieldCheck,
    metric: "Confianza enterprise",
  },
];

export function FeatureMosaic() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Suite inmobiliaria integral"
          title="Domina cada etapa del ciclo comercial sin cambiar de plataforma."
          description="Centraliza toda la operación inmobiliaria con un ecosistema modular donde cada funcionalidad se conecta para ofrecer experiencias memorables."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featureTiles.map((tile, index) => (
            <motion.article
              key={tile.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/10"
            >
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white transition-colors duration-300 group-hover:border-primary/40 group-hover:bg-primary group-hover:text-primary-foreground">
                    <tile.icon className="size-6" />
                  </div>
                  <Badge variant="outline" className="border-white/10 bg-white/5">
                    {tile.metric}
                  </Badge>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-white">
                  {tile.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  {tile.description}
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                <span>Más detalles</span>
                <span>→</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

