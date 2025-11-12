"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/sections/section-heading";
import { Button } from "@/components/ui/button";

const signaturePortfolio = [
  {
    name: "Mirador Reforma 290",
    location: "Ciudad de México · CDMX",
    price: "MXN 9.6M",
    status: "Preventa exclusiva",
    image:
      "https://images.unsplash.com/photo-1529429617124-aee0a66aab4a?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "165 m² · 3 recámaras",
      "Amenidades sky lounge",
      "Integrado a SISUB, MLS CDMX",
    ],
  },
  {
    name: "Bosque Alto 8",
    location: "Bogotá · Chapinero Alto",
    price: "COP 1.48B",
    status: "Disponible · Firma inmediata",
    image:
      "https://images.unsplash.com/photo-1542317854-07132d9d0026?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "180 m² · Penthouse dúplex",
      "Terraza con vista a los cerros",
      "Escrituración digital Supernotariado",
    ],
  },
  {
    name: "Vitacura Corporate Hub",
    location: "Santiago de Chile · Vitacura",
    price: "UF 115.000",
    status: "Entrega enero 2026",
    image:
      "https://images.unsplash.com/photo-1487956382158-bb926046304a?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "1.050 m² · Oficinas clase A+",
      "Certificación CES & LEED",
      "Gestión de arriendos en UF automatizada",
    ],
  },
];

export function PropertyShowcaseSection() {
  return (
    <section id="portafolio" className="scroll-mt-32 pb-20 sm:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <SectionHeading
          eyebrow="Colección inmobiliaria"
          title="Propiedades premium gestionadas de punta a punta en KM Inmobiliaria."
          description="Visualiza cómo la plataforma centraliza fichas, recorridos y analítica para cada activo. Captura, comercializa y firma sin perder consistencia de marca."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {signaturePortfolio.map((property, index) => (
            <motion.article
              key={property.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 380px"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 space-y-2 text-white">
                  <Badge variant="outline" className="border-white/30 bg-black/30 text-xs text-white uppercase tracking-[0.3em]">
                    {property.status}
                  </Badge>
                  <h3 className="text-lg font-semibold">{property.name}</h3>
                  <p className="text-sm text-white/80">{property.location}</p>
                </div>
              </div>
              <div className="space-y-5 p-6">
                <p className="text-xl font-semibold text-white">{property.price}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {property.highlights.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl border border-white/10 bg-black/20 px-4 py-2"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="ghost"
                  className="w-full rounded-full text-xs text-muted-foreground hover:text-white"
                >
                  Ver ficha interactiva
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

