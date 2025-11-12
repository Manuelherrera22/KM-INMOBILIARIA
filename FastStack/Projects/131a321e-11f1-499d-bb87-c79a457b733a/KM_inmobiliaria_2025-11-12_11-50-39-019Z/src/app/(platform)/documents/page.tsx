"use client";

import { useState } from "react";
import { FileSpreadsheet, FileText, Lock, ShieldCheck, UploadCloud } from "lucide-react";
import { PlatformPageHeader } from "@/components/platform/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";

const documentQueue = [
  {
    name: "Contrato alquiler Torre Nova",
    owner: "Diego López",
    stage: "Firma digital",
    status: "Enviado",
    due: "Hoy 18:00",
  },
  {
    name: "Anexo amenities Altos del Parque",
    owner: "Ana Prieto",
    stage: "Revisión marketing",
    status: "En revisión",
    due: "Mañana 12:00",
  },
  {
    name: "Informe due diligence Catalinas",
    owner: "Estudio Legal",
    stage: "Checklist compliance",
    status: "Pendiente",
    due: "Viernes",
  },
];

const complianceSummary = [
  { label: "Contratos activos", value: "142", detail: "83 con firma digital" },
  { label: "Alertas de vencimiento", value: "12", detail: "Renovar esta semana" },
  { label: "Documentos auditados", value: "98%", detail: "Cumplimiento GDPR" },
];

const workflows = [
  { title: "Reservas con seña", progress: 88 },
  { title: "Contratos alquiler premium", progress: 72 },
  { title: "Due diligence oficinas", progress: 64 },
];

export default function DocumentsPage() {
  const [tab, setTab] = useState("documentos");

  return (
    <div className="space-y-6">
      <PlatformPageHeader
        badge="Documentos & firmas"
        title="Gestiona contratos, anexos y firmas electrónicas"
        description="Centraliza expedientes digitales con flujos de aprobación, auditoría completa y cumplimiento normativo."
        actions={
          <>
            <Button variant="outline" className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10">
              Subir documento
            </Button>
            <Button className="rounded-full px-5">
              <UploadCloud className="mr-2 size-4" />
              Generar contrato
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
          <TabsTrigger value="documentos" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Documentos activos
          </TabsTrigger>
          <TabsTrigger value="compliance" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Compliance
          </TabsTrigger>
          <TabsTrigger value="workflows" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Workflows
          </TabsTrigger>
        </TabsList>

        <TabsContent value="documentos" className="mt-8 space-y-6 focus-visible:outline-none">
          <Card className="border-white/10 bg-black/30 backdrop-blur">
            <CardHeader className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base font-semibold text-white">
                  Bandeja de documentos
                </CardTitle>
                <p className="text-xs text-muted-foreground">
                  Controla el estado de cada documento en el workflow digital.
                </p>
              </div>
              <Badge variant="secondary">Firma electrónica</Badge>
            </CardHeader>
            <CardContent className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <Table>
                <TableHeader>
                  <TableRow className="border-white/10">
                    <TableHead className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Documento
                    </TableHead>
                    <TableHead className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Responsable
                    </TableHead>
                    <TableHead className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Etapa
                    </TableHead>
                    <TableHead className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Estado
                    </TableHead>
                    <TableHead className="text-right text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Vencimiento
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {documentQueue.map((doc) => (
                    <TableRow key={doc.name} className="border-white/10">
                      <TableCell className="text-sm text-white">{doc.name}</TableCell>
                      <TableCell className="text-xs text-muted-foreground">{doc.owner}</TableCell>
                      <TableCell className="text-xs text-muted-foreground">{doc.stage}</TableCell>
                      <TableCell className="text-xs text-primary">{doc.status}</TableCell>
                      <TableCell className="text-right text-xs text-muted-foreground">{doc.due}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="compliance" className="mt-8 space-y-6 focus-visible:outline-none">
          <div className="grid gap-4 lg:grid-cols-3">
            {complianceSummary.map((item) => (
              <Card key={item.label} className="border-white/10 bg-black/30 backdrop-blur">
                <CardContent className="space-y-3 p-5 text-sm text-muted-foreground">
                  <div className="flex size-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <ShieldCheck className="size-5" />
                  </div>
                  <p className="text-sm font-semibold text-white">{item.label}</p>
                  <p className="text-2xl font-semibold text-white">{item.value}</p>
                  <p className="text-xs text-muted-foreground">{item.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-accent/15 via-white/5 to-transparent p-6 text-sm text-muted-foreground">
            <p className="text-white">Checklist compliance</p>
            <p className="mt-2">
              Valida automáticamente AML/KYC, pólizas y documentación regulatoria por tipo de cliente.
              Integra verificaciones externas y alertas en tiempo real.
            </p>
            <Button variant="ghost" className="mt-4 rounded-full text-xs text-accent hover:text-accent">
              Configurar políticas
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="workflows" className="mt-8 space-y-6 focus-visible:outline-none">
          <div className="grid gap-4 lg:grid-cols-2">
            {workflows.map((flow) => (
              <Card key={flow.title} className="border-white/10 bg-black/30 backdrop-blur">
                <CardHeader className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-sm font-semibold text-white">
                      {flow.title}
                    </CardTitle>
                    <p className="text-xs text-muted-foreground">Proceso automatizado</p>
                  </div>
                  <Badge variant="outline" className="border-white/20 text-xs text-muted-foreground">
                    En ejecución
                  </Badge>
                </CardHeader>
                <CardContent>
                  <Progress value={flow.progress} className="h-2 bg-white/10" />
                  <p className="mt-2 text-xs text-muted-foreground">
                    Avance {flow.progress}%
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="border-white/10 bg-black/30 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-base font-semibold text-white">
                Integraciones documentales
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <FileText className="size-4 text-primary" />
                Plantillas dinámicas con variables y aprobaciones condicionales.
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <FileSpreadsheet className="size-4 text-secondary" />
                Exportación a data warehouse y almacenamiento cifrado.
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <Lock className="size-4 text-accent" />
                Permisos granulares RBAC y auditoría 360º.
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

