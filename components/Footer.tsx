"use client";

import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-background-dark)] text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="mb-16 grid gap-12 md:grid-cols-4">
          <div className="col-span-1 mb-4 flex flex-col md:col-span-2">
            <Link href="/" className="mb-6 flex items-center gap-3">
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
            <p className="text-gray-400 leading-relaxed max-w-md mb-8">
              We are a global non-profit organization dedicated to fostering peace, unity, and sustainable development through leadership, education, and community engagement.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/worldpeaceharmonyIndia/"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-all hover:bg-[var(--color-accent)] hover:text-[var(--color-text-dark)]"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-all hover:bg-[var(--color-accent)] hover:text-[var(--color-text-dark)]"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/worldpeaceharmony0/?hl=en"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-all hover:bg-[var(--color-accent)] hover:text-[var(--color-text-dark)]"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-all hover:bg-[var(--color-accent)] hover:text-[var(--color-text-dark)]"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-lg font-bold text-white">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: "About", href: "#about" },
                { name: "Programs", href: "#events" },
                { name: "Membership", href: "#membership" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-6 text-lg font-bold text-white">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="font-semibold text-white">HQ:</span>
                123 Peace Avenue, Geneva, Switzerland
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[var(--color-accent)]" />
                <a href="mailto:contact@wph.org" className="hover:text-white transition-colors">
                  contact@wph.org
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="font-semibold text-white">Tel:</span>
                +41 22 123 4567
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} World Peace Harmony. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
