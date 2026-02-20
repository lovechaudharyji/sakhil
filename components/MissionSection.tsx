"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const items = [
  {
    title: "Peace",
    image: "/Peace.png",
    description:
      "Supporting dialogue, conflict transformation, and cooperative action in regions of tension.",
  },
  {
    title: "Unity",
    image: "/unity.png",
    description:
      "Building bridges between communities, nations, and institutions through shared initiatives.",
  },
  {
    title: "Interfaith Harmony",
    image: "/interfaith.png",
    description:
      "Creating platforms where diverse faiths stand together for dignity, justice, and human flourishing.",
  },
];

export default function MissionSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            Mission And Vision
          </h2>
          <p className="mt-4 text-3xl font-semibold text-[var(--color-text-dark)] md:text-4xl">
            A focused mandate for peace, unity, and shared responsibility.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-dark)]/80 md:text-base">
            World Peace Harmony advances a clear framework that connects local initiatives with global
            cooperation, rooted in respect for diversity and common purpose.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-black/5 bg-black/60 p-7 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-[var(--color-secondary)]/80 hover:shadow-xl"
            >
              <div className="absolute inset-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/55 to-black/25" />
              </div>
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white/90">
                    {item.title}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 h-1 w-24 origin-left scale-x-0 rounded-full bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent)] transition-transform duration-300 group-hover:scale-x-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
