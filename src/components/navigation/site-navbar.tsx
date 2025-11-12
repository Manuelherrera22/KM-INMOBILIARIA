"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Plataforma", href: "#plataforma" },
  { label: "Portafolio", href: "#portafolio" },
  { label: "Mercados LATAM", href: "#mercados" },
  { label: "Tours 360°", href: "#tours" },
  { label: "CRM & Automatización", href: "#crm" },
  { label: "Documentos", href: "#documentos" },
  { label: "Analítica", href: "#analitica" },
  { label: "Soporte", href: "#soporte" },
];

export function SiteNavbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-3 sm:px-8">
        <motion.nav
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-3 flex items-center justify-between rounded-2xl border border-white/10 bg-black/60 px-3 py-2 backdrop-blur-xl sm:mt-6 sm:px-6 sm:py-3"
        >
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
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

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  size="icon"
                  variant="outline"
                  className="lg:hidden h-9 w-9 rounded-full border-white/10 bg-white/5 text-white hover:bg-white/10"
                  aria-label="Abrir menú de navegación"
                >
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-full max-w-xs border-white/10 bg-black/90 text-white"
              >
                <SheetHeader>
                  <SheetTitle className="text-base font-semibold text-white">
                    KM Inmobiliaria
                  </SheetTitle>
                </SheetHeader>
                <nav className="mt-8 flex flex-col gap-3 text-sm text-muted-foreground">
                  {navLinks.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <a
                        href={item.href}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-left font-medium text-white transition hover:bg-white/10"
                      >
                        {item.label}
                      </a>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-8 flex flex-col gap-2">
                  <SheetClose asChild>
                    <Link
                      href="/dashboard"
                      className="flex h-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-sm font-medium text-white hover:bg-white/20"
                    >
                      Abrir demo
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="#contacto"
                      className="flex h-11 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground shadow-[0_12px_40px_-18px_rgba(59,130,246,0.7)] hover:bg-primary/90"
                    >
                      Agenda consultoría
                    </Link>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>

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
          </div>
        </motion.nav>
      </div>
    </header>
  );
}

