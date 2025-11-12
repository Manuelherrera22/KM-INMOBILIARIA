import type { ReactNode } from "react";
import { PlatformShell } from "@/components/platform/platform-shell";

export default function PlatformLayout(props: { children: ReactNode }) {
  return <PlatformShell>{props.children}</PlatformShell>;
}

