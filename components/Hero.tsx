"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const symbolX = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const symbolY = useTransform(scrollYProgress, [0, 1], [0, 260]);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-primary)]"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-black/20 blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 text-white lg:flex-row lg:items-center lg:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-xl text-center lg:max-w-2xl lg:text-left"
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
          <p className="mb-10 max-w-2xl text-base font-medium leading-relaxed text-gray-100 md:text-lg">
            Promoting peace, interfaith harmony, and global cooperation through dialogue, humanitarian
            engagement, and shared values.
          </p>

          <div className="flex flex-col items-center justify-start gap-4 sm:flex-row lg:justify-start">
            <Link
              href="https://www.instagram.com/mohmmadsakil0?igsh=bXByMmhrMG1heGx1"
              target="_blank"
              rel="noreferrer"
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[var(--color-primary)] shadow-lg transition-all hover:shadow-xl sm:w-auto"
            >
              Contact Us
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="https://www.instagram.com/worldpeaceharmony0?igsh=Z2w1ZG5sYmdoZ3J0"
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center rounded-full border border-white/60 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-white/10 sm:w-auto"
            >
              Become a Member
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-12 w-full max-w-sm lg:mt-0 lg:max-w-xl"
        >
          <motion.div
            className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden lg:max-w-xl"
            style={{ x: symbolX, y: symbolY }}
          >
            <motion.div
              className="relative h-full w-full"
              animate={{
                y: [0, -16, 0, -10, 0],
              }}
              transition={{
                duration: 8,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            >
              <Image
                src="/images/symbol.png"
                alt="World Peace Harmony symbol"
                fill
                sizes="(min-width: 1024px) 42rem, 32rem"
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
