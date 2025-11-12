"use client";

import { useState } from "react";
import { Plus, Upload, Globe2, Pencil, Images } from "lucide-react";
import { PlatformPageHeader } from "@/components/platform/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";

const publishingChannels = [
  { name: "Sitio corporativo", status: "Publicado", sync: "Hace 5 min" },
  { name: "Mercado Libre", status: "Publicado", sync: "Hace 12 min" },
  { name: "Zillow", status: "En cola", sync: "Programado 10:30" },
  { name: "Idealista", status: "Publicado", sync: "Hace 20 min" },
  { name: "Inmuebles24", status: "Revisión IA", sync: "Pendiente" },
];

const propertyDrafts = [
  {
    name: "Residencial Altos del Parque - Torre A",
    type: "Departamento 4 ambientes · 145 m²",
    status: "Completo 92%",
    completeness: 92,
  },
  {
    name: "Loft Palermo Design",
    type: "Loft premium · 88 m²",
    status: "Multimedia pendiente",
    completeness: 68,
  },
  {
    name: "Sky Offices Catalinas",
    type: "Oficinas AAA · 530 m²",
    status: "Checklist legal 60%",
    completeness: 60,
  },
];

const virtualAssets = [
  {
    title: "Tour VR Altos del Parque",
    viewers: "324 visitas",
    hotspots: 18,
    updated: "Hoy 09:20",
  },
  {
    title: "Tour interactivo Torre Nova",
    viewers: "276 visitas",
    hotspots: 15,
    updated: "Ayer 18:45",
  },
  {
    title: "Recorrido 3D Oficinas Catalinas",
    viewers: "189 visitas",
    hotspots: 12,
    updated: "Ayer 10:10",
  },
];

export default function PropertiesPage() {
  const [activeTab, setActiveTab] = useState("inventario");

  return (
    <div className="space-y-6">
      <PlatformPageHeader
        badge="Gestión de propiedades"
        title="Gestiona tu inventario y publicaciones multicanal"
        description="Centraliza fichas, documentos y multimedia de cada propiedad con sincronización automática a portales y recorridos virtuales."
        actions={
          <>
            <Button variant="outline" className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10">
              <Upload className="mr-2 size-4" />
              Importar desde planilla
            </Button>
            <Button className="rounded-full px-5">
              <Plus className="mr-2 size-4" />
              Nueva propiedad
            </Button>
          </>
        }
      />

      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
      >
        <TabsList className="flex w-full justify-start gap-2 rounded-full bg-black/30 p-1 text-xs uppercase">
          <TabsTrigger value="inventario" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Inventario activo
          </TabsTrigger>
          <TabsTrigger value="publicacion" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Publicación multicanal
          </TabsTrigger>
          <TabsTrigger value="tours" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Tours virtuales y assets
          </TabsTrigger>
        </TabsList>

        <TabsContent value="inventario" className="mt-8 space-y-6 focus-visible:outline-none">
          <Card className="border-white/10 bg-black/30 backdrop-blur">
            <CardHeader className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <CardTitle className="text-base font-semibold text-white">
                  Fichas en progreso
                </CardTitle>
                <p className="text-xs text-muted-foreground">
                  Completa checklist, multimedia e integraciones antes de publicar.
                </p>
              </div>
              <Button variant="ghost" className="rounded-full text-xs text-muted-foreground hover:text-white">
                Ver checklist general
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {propertyDrafts.map((draft) => (
                <div
                  key={draft.name}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-muted-foreground"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-white">{draft.name}</p>
                      <p className="text-xs text-muted-foreground">{draft.type}</p>
                    </div>
                    <Badge variant="outline" className="border-secondary/30 bg-secondary/10 text-secondary-foreground">
                      {draft.status}
                    </Badge>
                  </div>
                  <Progress value={draft.completeness} className="mt-4 h-2 bg-white/10" />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-black/30 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-base font-semibold text-white">
                Checklist rápido por propiedad
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ScrollArea className="max-h-72">
                <Table>
                  <TableHeader>
                    <TableRow className="border-white/10">
                      <TableHead className="w-12">
                        <Checkbox className="border-white/20 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                      </TableHead>
                      <TableHead className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        Propiedad
                      </TableHead>
                      <TableHead className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        Checklist
                      </TableHead>
                      <TableHead className="text-right text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        Responsable
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {propertyDrafts.map((draft) => (
                      <TableRow key={draft.name} className="border-white/10">
                        <TableCell>
                          <Checkbox className="border-white/20 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                        </TableCell>
                        <TableCell className="text-sm text-white">{draft.name}</TableCell>
                        <TableCell className="text-xs text-muted-foreground">{draft.status}</TableCell>
                        <TableCell className="text-right text-xs text-muted-foreground">Equipo comercial</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="publicacion" className="mt-8 space-y-6 focus-visible:outline-none">
          <div className="grid gap-4 lg:grid-cols-2">
            {publishingChannels.map((channel) => (
              <Card key={channel.name} className="border-white/10 bg-black/30 backdrop-blur">
                <CardContent className="flex items-center justify-between gap-4 p-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                      <Globe2 className="size-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{channel.name}</p>
                      <p className="text-xs text-muted-foreground">{channel.sync}</p>
                    </div>
                  </div>
                  <Badge
                    variant={channel.status === "Publicado" ? "outline" : "secondary"}
                    className="border-white/15 text-xs text-muted-foreground"
                  >
                    {channel.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-primary/15 via-white/5 to-transparent p-6 text-sm text-muted-foreground">
            <p className="text-white">Automatiza tu publicación</p>
            <p className="mt-2">
              Define reglas de pricing dinámico, sincroniza descripciones con IA y programa horarios
              de actualización según perfomance de cada portal.
            </p>
            <Button variant="ghost" className="mt-4 rounded-full text-xs text-primary hover:text-primary">
              Configurar reglas avanzadas
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="tours" className="mt-8 space-y-6 focus-visible:outline-none">
          <div className="grid gap-4 lg:grid-cols-3">
            {virtualAssets.map((asset) => (
              <Card key={asset.title} className="border-white/10 bg-black/30 backdrop-blur">
                <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-4">
                  <div>
                    <CardTitle className="text-sm font-semibold text-white">
                      {asset.title}
                    </CardTitle>
                    <p className="text-xs text-muted-foreground">{asset.updated}</p>
                  </div>
                  <Badge variant="outline" className="border-white/15 text-xs text-muted-foreground">
                    {asset.hotspots} hotspots
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-3 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                    <Images className="size-4 text-primary" />
                    Multimedia 8K optimizada
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                    <Pencil className="size-4 text-secondary" />
                    Notas colaborativas y scripts IA
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                    <p>{asset.viewers}</p>
                  </div>
                  <Button variant="ghost" className="w-full rounded-full text-xs text-muted-foreground hover:text-white">
                    Abrir en estudio de tours
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

