export interface PlatformNavItem {
  readonly title: string;
  readonly description: string;
  readonly href: string;
  readonly icon: string;
}

export const platformNavItems: PlatformNavItem[] = [
  {
    title: "Resumen",
    description: "KPIs clave, actividades recientes y proyecciones.",
    href: "/dashboard",
    icon: "layout-dashboard",
  },
  {
    title: "Propiedades",
    description: "Catálogo, publicación multicanal y tours virtuales.",
    href: "/properties",
    icon: "home",
  },
  {
    title: "CRM",
    description: "Pipelines, contactos, agenda inteligente y IA.",
    href: "/crm",
    icon: "users",
  },
  {
    title: "Automatizaciones",
    description: "Workflows de marketing, ventas y soporte.",
    href: "/automations",
    icon: "workflow",
  },
  {
    title: "Colaboración",
    description: "Espacios de trabajo, chat, video y notas.",
    href: "/collaboration",
    icon: "group",
  },
  {
    title: "Documentos",
    description: "Contratos, firmas digitales y compliance.",
    href: "/documents",
    icon: "file-text",
  },
  {
    title: "Analítica",
    description: "Dashboards, insights de mercado y forecasting.",
    href: "/analytics",
    icon: "chart-line",
  },
  {
    title: "Marketing",
    description: "Campañas, landings y audiencias segmentadas.",
    href: "/marketing",
    icon: "megaphone",
  },
  {
    title: "Soporte",
    description: "Atención omnicanal y tickets inteligentes.",
    href: "/support",
    icon: "headset",
  },
];

