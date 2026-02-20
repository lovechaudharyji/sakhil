"use client";

import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--color-background-dark)] text-white">
      <div className="mx-auto max-w-7xl px-6 pb-6 pt-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-9 w-9 overflow-hidden rounded-full border border-white/30 bg-white/10">
                <Image
                  src="/qt=q_95.webp"
                  alt="World Peace Harmony symbol"
                  fill
                  sizes="36px"
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold tracking-wide">
                World Peace Harmony
              </span>
            </Link>
            <p className="max-w-sm text-xs leading-relaxed text-gray-300">
              A global interfaith platform from India dedicated to peaceful coexistence and service.
            </p>
            <div className="flex items-center gap-2">
              <a
                href="https://www.facebook.com/worldpeaceharmonyIndia/"
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/5 text-gray-100 transition hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-text-dark)]"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/5 text-gray-100 transition hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-text-dark)]"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/worldpeaceharmony0/?hl=en"
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/5 text-gray-100 transition hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-text-dark)]"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/5 text-gray-100 transition hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-text-dark)]"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-300">
              Navigation
            </h4>
            <ul className="mt-3 space-y-2 text-xs">
              {[
                { name: "About", href: "/about" },
                { name: "Mission", href: "/mission" },
                { name: "Media", href: "/media" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-300">
              Delhi Office
            </h4>
            <div className="mt-3 space-y-3 text-xs text-gray-300">
              <p className="leading-relaxed">
                100, Nihal Vihar Park Rd,
                <br />
                DDA Park Nihal Vihar, Nangloi,
                <br />
                Delhi, 110041, India
              </p>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[var(--color-accent)]" />
                <a
                  href="mailto:contact@wph.org"
                  className="text-gray-200 transition-colors hover:text-white"
                >
                  contact@wph.org
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-4 text-[11px] text-gray-500 md:flex md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} World Peace Harmony. All rights reserved.
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-4 md:mt-0">
            <a href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
