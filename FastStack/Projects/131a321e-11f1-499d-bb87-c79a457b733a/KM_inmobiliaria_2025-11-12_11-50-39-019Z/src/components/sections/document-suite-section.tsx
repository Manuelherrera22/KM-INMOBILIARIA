"use client";

import { motion } from "framer-motion";
import { CheckCircle, FileCheck, Lock, Shield, Stamp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const workflowSteps = [
  { label: "Solicitud de contrato", status: "Completo", value: 100 },
  { label: "Revisión legal", status: "En progreso", value: 70 },
  { label: "Firma digital", status: "Pendiente", value: 25 },
];

export function DocumentSuiteSection() {
  return (
    <section id="documentos" className="py-24 scroll-mt-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Badge variant="outline" className="border-accent/40 bg-accent/10 text-accent-foreground">
              Documentos & firmas electrónicas
            </Badge>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Workflows legales digitales, seguros y auditables.
            </h2>
            <p className="text-base text-muted-foreground">
              Gestiona contratos, anexos y formularios con control de versiones, permisos
              avanzados y firmas electrónicas válidas en múltiples jurisdicciones.
            </p>
            <Card className="border-white/10 bg-white/5 backdrop-blur">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-white">
                  <Shield className="size-5 text-primary" />
                  Seguridad avanzada
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-white">Cifrado y cumplimiento GDPR</p>
                  <p>Documentos cifrados en reposo y en tránsito, con auditoría completa.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-white">Firma biométrica y OTP</p>
                  <p>Autenticación robusta con validación por SMS, email o app.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-white">Integraciones notariales</p>
                  <p>Conectores con DocuSign, Adobe Sign y proveedores locales.</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 backdrop-blur"
          >
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Expediente digital · Proyecto Torre Nova</span>
              <span>Audit trail activo</span>
            </div>
            <div className="mt-6 space-y-5">
              {workflowSteps.map((step) => (
                <div
                  key={step.label}
                  className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-muted-foreground"
                >
                  <div className="flex items-center justify-between text-white">
                    <span>{step.label}</span>
                    <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {step.status}
                    </span>
                  </div>
                  <Progress value={step.value} className="mt-3 h-2 bg-white/10" />
                </div>
              ))}
            </div>
            <Card className="mt-6 border-white/10 bg-white/5 backdrop-blur">
              <CardContent className="space-y-3 p-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-3 text-white">
                  <FileCheck className="size-5 text-secondary" />
                  Control de versiones y comentarios
                </div>
                <p>
                  Mantén el historial completo de modificaciones. Acepta, rechaza y comenta
                  cambios con trazabilidad inmediata.
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1">
                    Versiones etiquetadas
                  </span>
                  <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1">
                    Comparación lado a lado
                  </span>
                  <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1">
                    Historial descargable
                  </span>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-3 text-white">
                  <Stamp className="size-5 text-primary" />
                  Flujos multijurisdicción
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  Configura plantillas y circuitos según leyes locales o corporativas.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-3 text-white">
                  <Lock className="size-5 text-accent" />
                  Permisos granulares
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  Define quién puede ver, editar o firmar cada documento y crea vencimientos.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-3 text-white">
                  <CheckCircle className="size-5 text-secondary" />
                  Automatiza aprobaciones
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  Envía recordatorios, escalados y alertas en caso de bloqueos o demoras.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

