"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const leaders = [
  {
    name: "Dr. Shakeel Saifi",
    tag: "Chairman",
    title: "Chairman, World Peace Harmony",
    subtitle: "CEO, Saifi International Events and Telefilms Inc. • CEO, Saifi Hospitals",
    image: "/Shakeel Saifi.webp",
  },
  {
    name: "Mr. Nitin Gadkari Ji",
    tag: "Chief Patron",
    title: "Chief Patron, World Peace Harmony",
    subtitle: "Minister of Road Transport and Highways, Government of India",
    image: "/Nitin Gadkari Ji.webp",
  },
  {
    name: "Mr. P. P. Chaudhary Ji",
    tag: "Chief Patron",
    title: "Chief Patron, World Peace Harmony",
    subtitle: "Member of Parliament • Chairman, One Nation One Election",
    image: "/P. P. Chaudhary Ji.webp",
  },
  {
    name: "Shri Pradeep Kumar Singh",
    tag: "Patron",
    title: "Patron, World Peace Harmony",
    subtitle: "Member of Parliament, Lok Sabha",
    image: "/Shri Pradeep Kumar Singh.webp",
  },
  {
    name: "Mr. Rajendra Singh Miglani",
    tag: "Vice Chairman",
    title: "Vice Chairman, World Peace Harmony",
    subtitle: "Owner, Uttam Galva Steel",
    image: "/Rajendra Singh Miglani.webp",
  },
  {
    name: "Mrs. Supriya Jay Doshi",
    tag: "Chairman – Women’s Cell",
    title: "Chairman, Women’s Cell, World Peace Harmony",
    subtitle: "Founder, VDO Solutions",
    image: "/Supriya Jay Doshi.webp",
  },
];

export default function LeadershipSection() {
  return (
    <section className="bg-[var(--color-background-light)] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            Leadership
          </h2>
          <p className="mt-4 text-3xl font-semibold text-[var(--color-text-dark)] md:text-4xl">
            Visionary leaders guiding World Peace Harmony.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-dark)]/80 md:text-base">
            The leadership of World Peace Harmony brings together experience from public life, social
            impact, and global enterprise to advance our shared mission of peace and harmony.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-black/5 bg-white/90 p-6 shadow-sm backdrop-blur-md transition-all duration-400 hover:-translate-y-1.5 hover:border-[var(--color-secondary)]/80 hover:shadow-xl"
            >
              <div className="flex items-start gap-4 md:gap-6">
                <div className="relative h-32 w-24 shrink-0 rounded-2xl bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20 p-[3px] shadow-sm md:h-36 md:w-24">
                  <div className="h-full w-full overflow-hidden rounded-2xl bg-white">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      sizes="120px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="inline-flex items-center rounded-full bg-[var(--color-background-light)] px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-[var(--color-primary)]/90 mb-2">
                    {leader.tag}
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 md:text-lg">
                    {leader.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[var(--color-primary)]">
                    {leader.title}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-700">
                    {leader.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
