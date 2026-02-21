"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={twMerge(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[var(--color-background-dark)]/90 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/30 bg-white/10">
            <Image
              src="/images/qt=q_95.webp"
              alt="World Peace Harmony symbol"
              fill
              sizes="64px"
              className="object-contain"
              priority
            />
          </div>
    
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-6 md:flex">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-[var(--color-accent)] transition-colors text-sm font-medium tracking-wide uppercase"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="https://www.instagram.com/worldpeaceharmony0?igsh=Z2w1ZG5sYmdoZ3J0"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2.5 rounded-full bg-[var(--color-primary)] text-white text-sm font-semibold shadow-lg transition-all duration-300 hover:bg-[var(--color-secondary)] hover:shadow-xl hover:-translate-y-0.5"
            >
              Join the Movement
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            className="text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[var(--color-background-dark)] border-t border-white/10 md:hidden flex flex-col p-6 shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="py-4 text-white/90 hover:text-[var(--color-accent)] border-b border-white/5 text-center text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="https://www.instagram.com/worldpeaceharmony0?igsh=Z2w1ZG5sYmdoZ3J0"
              target="_blank"
              rel="noreferrer"
              className="mt-6 w-full rounded-xl bg-[var(--color-primary)] py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[var(--color-secondary)]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Join the Movement
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
