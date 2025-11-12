"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface PlatformPageHeaderProps {
  readonly badge?: string;
  readonly title: string;
  readonly description?: string;
  readonly actions?: React.ReactNode;
  readonly className?: string;
}

export function PlatformPageHeader(props: PlatformPageHeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn(
        "flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur lg:flex-row lg:items-center lg:justify-between",
        props.className,
      )}
    >
      <div>
        {props.badge ? (
          <Badge variant="outline" className="border-white/20 bg-white/10 text-xs text-white">
            {props.badge}
          </Badge>
        ) : null}
        <h1 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
          {props.title}
        </h1>
        {props.description ? (
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            {props.description}
          </p>
        ) : null}
      </div>
      {props.actions ? <div className="flex flex-wrap gap-3">{props.actions}</div> : null}
    </motion.header>
  );
}

