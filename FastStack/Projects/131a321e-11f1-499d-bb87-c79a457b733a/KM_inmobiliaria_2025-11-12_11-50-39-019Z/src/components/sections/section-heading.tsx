"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  readonly eyebrow?: string;
  readonly title: string;
  readonly description?: string;
  readonly className?: string;
}

export function SectionHeading(props: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto max-w-3xl text-center", props.className)}>
      {props.eyebrow ? (
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-3 inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary"
        >
          {props.eyebrow}
        </motion.span>
      ) : null}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -80px 0px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl"
      >
        {props.title}
      </motion.h2>
      {props.description ? (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="mt-4 text-balance text-base text-muted-foreground sm:text-lg"
        >
          {props.description}
        </motion.p>
      ) : null}
    </div>
  );
}

