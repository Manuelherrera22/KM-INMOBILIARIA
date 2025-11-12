import {
  BarChart3,
  FileText,
  Headset,
  Home,
  LayoutDashboard,
  Megaphone,
  Share2,
  Users,
  Workflow,
} from "lucide-react";

const iconMap = {
  "layout-dashboard": LayoutDashboard,
  home: Home,
  users: Users,
  workflow: Workflow,
  group: Share2,
  "file-text": FileText,
  "chart-line": BarChart3,
  megaphone: Megaphone,
  headset: Headset,
} as const;

export type IconKey = keyof typeof iconMap;

export function getPlatformIcon(key: string) {
  return iconMap[key as IconKey] ?? LayoutDashboard;
}

