"use client";

import PageWrapper from "@/components/PageWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { MapPin } from "lucide-react";

export default function ContactPage() {

  return (
    <main className="min-h-screen bg-[var(--color-background-light)]">
      <Navbar />
      <PageWrapper>
        <section className="bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-primary)] text-white">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 py-20 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl text-center lg:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                Get in touch
              </p>
              <h1 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
                Let&apos;s build peace
                <br />
                <span className="bg-gradient-to-r from-white to-[var(--color-background-light)] bg-clip-text text-transparent">
                  together in Delhi and beyond.
                </span>
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-white/85 md:text-base">
                Reach out to World Peace Harmony for collaborations, events, partnerships, or
                support. Our team is ready to connect with you.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="mailto:info@wph.org"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-[var(--color-primary)] shadow-lg transition hover:shadow-xl"
                >
                  Email Us
                </a>
                <a
                  href="https://www.instagram.com/mohmmadsakil0?igsh=bXByMmhrMG1heGx1"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/60 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Message on Instagram
                </a>
              </div>
            </div>
            <div className="w-full max-w-md">
              <div className="overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl">
                <div className="relative h-72 w-full">
                  <Image
                    src="/images/Shakeel Saifi.webp"
                    alt="Dr. Shakeel Saifi"
                    fill
                    sizes="(min-width: 1024px) 22rem, 100vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="px-6 py-5 text-left">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                    Chairman, World Peace Harmony
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/90">
                    Dr. Shakeel Saifi leads World Peace Harmony&apos;s vision for unity, dialogue,
                    and compassionate action across communities and nations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--color-background-light)] py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-start">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                Visit us
              </p>
              <h2 className="text-2xl font-semibold text-[var(--color-text-dark)] md:text-3xl">
                Meet us at our Delhi office.
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-[var(--color-text-dark)]/75">
                You are always welcome to visit us in person. Our office is located in the heart of
                Delhi, surrounded by the communities we serve through peace and unity initiatives.
              </p>
              <div className="mt-4 overflow-hidden rounded-3xl border border-black/5 bg-white shadow-lg">
                <div className="relative h-[320px] w-full">
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)]/10 via-transparent to-[var(--color-secondary)]/20" />
                  <iframe
                    src="https://www.google.com/maps?q=100,%20Nihal%20Vihar%20Park%20Rd,%20DDA%20Park%20Nihal%20Vihar,%20Nangloi,%20Delhi,%20110041&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full grayscale opacity-80 transition-all duration-500 hover:grayscale-0 hover:opacity-100"
                    allowFullScreen
                  ></iframe>
                  <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-[var(--color-primary)] shadow">
                    <MapPin className="h-4 w-4" />
                    <span>100, Nihal Vihar Park Rd, Delhi</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-black/5 bg-white p-7 shadow-md">
                <h3 className="text-lg font-semibold text-[var(--color-text-dark)]">Email</h3>
                <p className="mt-2 text-sm text-[var(--color-text-dark)]/70">
                  For general questions, collaborations, and media enquiries.
                </p>
                <p className="mt-3 text-sm font-semibold text-[var(--color-primary)]">
                  info@wph.org
                </p>
              </div>
              <div className="rounded-3xl border border-black/5 bg-white p-7 shadow-md">
                <h3 className="text-lg font-semibold text-[var(--color-text-dark)]">Phone</h3>
                <p className="mt-2 text-sm text-[var(--color-text-dark)]/70">
                  Call us during business hours for urgent matters or support.
                </p>
                <p className="mt-3 text-sm font-semibold text-[var(--color-primary)]">
                  +91 00000 00000
                </p>
              </div>
              <div className="rounded-3xl border border-black/5 bg-white p-7 shadow-md flex items-center gap-5">
                <div className="relative h-30 w-20 overflow-hidden rounded-2xl border-4 border-[var(--color-primary)]/15">
                  <Image
                    src="/images/Shakeel Saifi.webp"
                    alt="Dr. Shakeel Saifi"
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-[var(--color-text-dark)]">
                    Message Dr. Shakeel Saifi
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--color-text-dark)]/70">
                    Reach out directly on Instagram for leadership, partnerships, or special
                    initiatives.
                  </p>
                  <a
                    href="https://www.instagram.com/mohmmadsakil0?igsh=bXByMmhrMG1heGx1"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-5 py-2 text-xs font-semibold text-white shadow-md transition hover:bg-[var(--color-secondary)]"
                  >
                    Message on Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageWrapper>
      <Footer />
    </main>
  );
}
