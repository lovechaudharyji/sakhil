"use client";

import { motion } from "framer-motion";
import { MoonStar, Cross, Asterisk, Leaf, Sparkles, Star } from "lucide-react";

const items = [
  { label: "Islam", icon: MoonStar },
  { label: "Christianity", icon: Cross },
  { label: "Hinduism", icon: Asterisk },
  { label: "Sikhism", icon: Leaf },
  { label: "Buddhism", icon: Sparkles },
  { label: "Judaism", icon: Star },
];

export default function GlobalUnitySection() {
  return (
    <section className="bg-[var(--color-background-light)] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            Global Religious Unity
          </h2>
          <p className="mt-4 text-3xl font-semibold text-[var(--color-text-dark)] md:text-4xl">
            Many traditions, one shared commitment to peace.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-dark)]/80 md:text-base">
            World Peace Harmony convenes voices from major faith traditions to stand together for human
            dignity, justice, and cooperation, without compromising individual beliefs.
          </p>
        </div>
        <motion.div
          className="mt-12 grid gap-6 md:grid-cols-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          {items.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-black/5 bg-white/80 p-8 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-secondary)]/80 hover:shadow-lg"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[var(--color-secondary)]/60 bg-[var(--color-background-light)] text-[var(--color-secondary)] shadow-sm transition-all duration-300 group-hover:shadow-md">
                <item.icon className="h-8 w-8" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-text-dark)]">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
