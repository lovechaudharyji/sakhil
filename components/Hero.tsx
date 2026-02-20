"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-primary)]">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-black/20 blur-3xl" />
      </div>
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold tracking-[0.16em] backdrop-blur-sm">
            GLOBAL INTERFAITH PEACE ORGANIZATION
          </span>
          <h1 className="mb-6 text-4xl font-semibold leading-tight md:text-6xl lg:text-7xl">
            Uniting Humanity
            <br />
            <span className="bg-gradient-to-r from-white to-[var(--color-background-light)] bg-clip-text text-transparent">
              Beyond Boundaries
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-base font-medium leading-relaxed text-gray-100 md:text-lg">
            Promoting peace, interfaith harmony, and global cooperation through dialogue, humanitarian
            engagement, and shared values.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#about"
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[var(--color-primary)] shadow-lg transition-all hover:shadow-xl sm:w-auto"
            >
              Join the Mission
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#membership"
              className="flex w-full items-center justify-center rounded-full border border-white/60 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-white/10 sm:w-auto"
            >
              Become a Member
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
