"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CallToActionSection() {
  return (
    <section
      id="membership"
      className="relative overflow-hidden bg-[var(--color-background-dark)] py-24"
    >
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="pointer-events-none absolute inset-0"
      >
        <motion.div
          initial={{ x: "-20%", y: "-20%" }}
          animate={{ x: "0%", y: "0%" }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-[var(--color-secondary)]/25 blur-3xl"
        />
        <motion.div
          initial={{ x: "10%", y: "10%" }}
          animate={{ x: "-10%", y: "-5%" }}
          transition={{ duration: 22, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="absolute bottom-[-120px] right-[-40px] h-80 w-80 rounded-full bg-[var(--color-primary)]/25 blur-3xl"
        />
      </motion.div>
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-3xl border border-white/10 bg-gradient-to-r from-[var(--color-secondary)]/25 via-[var(--color-background-dark)] to-[var(--color-primary)]/25 px-8 py-12 text-center shadow-2xl backdrop-blur-2xl md:px-12 md:py-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-text-light)]/70">
              Call To Action
            </h2>
            <p className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              Together we build a more peaceful future.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[var(--color-text-light)]/80 md:text-base">
              Become part of a global community of leaders, practitioners, and citizens who are committed to
              dialogue, responsibility, and collective action for peace.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mt-10 flex justify-center"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-secondary)] px-10 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-white hover:text-[var(--color-secondary)]"
              >
                Apply For Membership
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
