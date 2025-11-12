"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, Bell, Sparkles, ChevronRight } from "lucide-react";
import { platformNavItems } from "@/config/navigation";
import { getPlatformIcon } from "@/components/platform/icon-map";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface PlatformShellProps {
  readonly children: React.ReactNode;
}

export function PlatformShell(props: PlatformShellProps) {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const activeItem = React.useMemo(
    () => platformNavItems.find((item) => item.href === pathname),
    [pathname],
  );

  const NavList = (
    <nav className="space-y-2">
      {platformNavItems.map((item) => {
        const Icon = getPlatformIcon(item.icon);
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className={cn(
              "group block rounded-2xl border border-transparent px-4 py-3 text-sm transition-all duration-200 hover:border-white/10 hover:bg-white/5",
              active ? "border-primary/40 bg-primary/15 text-white shadow-[0_20px_40px_-30px_rgba(59,130,246,0.8)]" : "text-muted-foreground",
            )}
          >
            <div className="flex items-center gap-3">
              <span
                className={cn(
                  "flex size-10 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-white transition-colors duration-200",
                  active ? "border-primary/40 bg-primary text-primary-foreground" : "group-hover:border-primary/40 group-hover:text-primary",
                )}
              >
                <Icon className="size-5" />
              </span>
              <div>
                <p className="font-medium text-white">{item.title}</p>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </div>
              <ChevronRight className="ml-auto size-4 text-muted-foreground/60" />
            </div>
          </Link>
        );
      })}
    </nav>
  );

  return (
    <div className="flex min-h-screen bg-[radial-gradient(circle_at_top,_#070815,_#03010a)]">
      <aside className="hidden w-[320px] flex-col border-r border-white/5 bg-black/30 px-6 py-8 backdrop-blur-2xl lg:flex">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-2xl bg-primary/20 text-primary">
              <Sparkles className="size-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">KM Inmobiliaria</p>
              <p className="text-xs text-muted-foreground">Proptech Command Center</p>
            </div>
          </Link>
          <Badge variant="outline" className="border-secondary/30 bg-secondary/15 text-secondary-foreground">
            Beta
          </Badge>
        </div>
        <div className="mt-8 flex-1 overflow-hidden">
          <ScrollArea className="h-full pr-4">{NavList}</ScrollArea>
        </div>
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-muted-foreground">
          <p className="text-white">¿Nuevo equipo?</p>
          <p className="mt-1">
            Invita a tus agentes y configura automatizaciones desde el panel de onboarding.
          </p>
          <Button
            asChild
            size="sm"
            className="mt-3 h-8 rounded-full border border-white/10 bg-black/50 text-xs text-white hover:bg-black/60"
          >
            <Link href="/settings">Configurar cuenta</Link>
          </Button>
        </div>
      </aside>

      <div className="flex flex-1 flex-col">
        <header className="sticky top-0 z-30 border-b border-white/5 bg-black/40 backdrop-blur">
          <div className="flex items-center justify-between gap-4 px-4 py-4 md:px-8">
            <div className="flex items-center gap-3">
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-10 w-10 rounded-2xl border-white/10 bg-white/5 text-white hover:bg-white/10 lg:hidden"
                  >
                    <Menu className="size-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[320px] border-r border-white/10 bg-black/80 backdrop-blur-2xl">
                  <SheetHeader>
                    <SheetTitle className="text-base font-semibold text-white">
                      KM Inmobiliaria
                    </SheetTitle>
                  </SheetHeader>
                  <div className="mt-6 space-y-6">{NavList}</div>
                </SheetContent>
              </Sheet>
              <div>
                <p className="text-sm font-medium text-white">
                  {activeItem?.title ?? "Espacio de trabajo"}
                </p>
                {activeItem?.description ? (
                  <p className="text-xs text-muted-foreground">
                    {activeItem.description}
                  </p>
                ) : null}
              </div>
            </div>
            <div className="flex flex-1 items-center justify-end gap-3">
              <div className="hidden max-w-sm flex-1 items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-2 text-sm text-muted-foreground sm:flex">
                <Search className="size-4 text-muted-foreground/70" />
                <Input
                  placeholder="Buscar propiedades, clientes, tareas..."
                  className="h-6 border-none bg-transparent p-0 text-xs text-white placeholder:text-muted-foreground focus-visible:ring-0"
                />
              </div>
              <Button
                size="icon"
                variant="outline"
                className="h-10 w-10 rounded-2xl border-white/10 bg-white/5 text-white hover:bg-white/10"
              >
                <Bell className="size-5" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-left text-sm text-white hover:bg-white/10">
                    <Avatar className="size-9 border border-white/10">
                      <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=KM" alt="Usuario" />
                      <AvatarFallback>KM</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-xs text-muted-foreground">Equipo</p>
                      <p className="text-sm font-medium text-white">Broker principal</p>
                    </div>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 border-white/10 bg-black/90 text-sm text-muted-foreground">
                  <DropdownMenuLabel className="text-white">
                    Sesión activa
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-white/10" />
                  <DropdownMenuItem className="text-white">Perfil</DropdownMenuItem>
                  <DropdownMenuItem className="text-white">Preferencias</DropdownMenuItem>
                  <DropdownMenuItem className="text-white">Centro de ayuda</DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-white/10" />
                  <DropdownMenuItem className="text-white">Cerrar sesión</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        <main className="flex-1 px-4 py-8 md:px-8">
          <div className="space-y-6">{props.children}</div>
        </main>
      </div>
    </div>
  );
}

