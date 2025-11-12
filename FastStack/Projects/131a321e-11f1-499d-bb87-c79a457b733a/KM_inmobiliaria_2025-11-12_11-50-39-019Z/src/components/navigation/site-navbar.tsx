"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Plataforma", href: "#plataforma" },
  { label: "Tours 360°", href: "#tours" },
  { label: "CRM & Automatización", href: "#crm" },
  { label: "Documentos", href: "#documentos" },
  { label: "Analítica", href: "#analitica" },
  { label: "Soporte", href: "#soporte" },
];

export function SiteNavbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <motion.nav
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-black/50 px-4 py-3 backdrop-blur-xl sm:px-6"
        >
          <Link href="/" className="flex items-center gap-3">
            <div className="relative size-12">
              <Image
                src="/km-logo.svg"
                alt="KM Inmobiliaria"
                fill
                sizes="48px"
                className="rounded-2xl"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-white">KM Inmobiliaria</p>
              <p className="text-xs text-muted-foreground">Proptech Command Center</p>
            </div>
          </Link>

          <div className="hidden items-center gap-3 lg:flex">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              asChild
              className="hidden rounded-full border border-white/10 bg-white/5 text-xs text-white hover:bg-white/10 md:inline-flex"
            >
              <Link href="/dashboard">Abrir demo</Link>
            </Button>
            <Button
              size="sm"
              asChild
              className="rounded-full bg-primary px-4 text-xs text-primary-foreground shadow-[0_12px_40px_-18px_rgba(59,130,246,0.7)]"
            >
              <Link href="#contacto">Agenda consultoría</Link>
            </Button>
          </div>
        </motion.nav>
      </div>
    </header>
  );
}

