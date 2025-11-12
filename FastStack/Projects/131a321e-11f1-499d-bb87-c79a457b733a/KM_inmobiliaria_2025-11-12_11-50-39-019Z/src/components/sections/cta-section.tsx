"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="pb-28">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-primary/25 via-black/50 to-secondary/30 p-10 text-center shadow-[0_40px_80px_-60px_rgba(59,130,246,0.4)] backdrop-blur"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-primary-foreground/80">
            Proptech enterprise
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Potencia tu operación inmobiliaria con un hub inteligente, escalable y seguro.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Agenda una sesión estratégica para diseñar tu roadmap o inicia la demo guiada ahora.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              asChild
              className="h-12 rounded-full px-8 text-base shadow-[0_12px_40px_-18px_rgba(59,130,246,0.8)]"
            >
              <Link href="/dashboard">Iniciar demo interactiva</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="h-12 rounded-full border-white/30 bg-white/10 px-8 text-base text-white hover:bg-white/20"
            >
              <Link href="#contacto">Solicitar consultoría</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

