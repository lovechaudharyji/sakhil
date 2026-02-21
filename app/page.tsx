"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HomeAboutSection from "@/components/HomeAboutSection";
import LeadershipSection from "@/components/LeadershipSection";
import Footer from "@/components/Footer";
import Image from "next/image";
import { MapPin } from "lucide-react";

const homeGalleryImages = Array.from(
  { length: 57 },
  (_, index) => `/photog/1 (${index + 1}).jpeg`,
);

const VISIBLE_HOME_GALLERY_IMAGES = 12;

function HomeSignatureInitiatives() {
  const initiatives = [
    {
      title: "Peace Walks & Public Rallies",
      description: "Large-scale gatherings that turn city streets into corridors of hope.",
      image: "/Peace.png",
      tag: "On-Ground Mobilisation",
    },
    {
      title: "Unity & Youth Leadership",
      description: "Young voices leading interfaith collaborations and civic engagement.",
      image: "/unity.png",
      tag: "Youth & Leadership",
    },
    {
      title: "Interfaith Harmony Forums",
      description: "Spiritual and civic leaders sharing one stage to affirm shared values.",
      image: "/interfaith.png",
      tag: "Interfaith Dialogue",
    },
  ];

  return (
    <section className="bg-[var(--color-background-light)] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            Signature Initiatives
          </h2>
          <p className="mt-4 text-3xl font-semibold text-[var(--color-text-dark)] md:text-4xl">
            How World Peace Harmony appears on the ground.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-dark)]/80 md:text-base">
            From mass peace walks to intimate interfaith circles, each initiative is designed to be
            visually powerful and spiritually grounded.
          </p>
        </motion.div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group relative overflow-hidden rounded-3xl border border-black/5 bg-white shadow-lg transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={initiative.image}
                  alt={initiative.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">
                    {initiative.tag}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-3 px-6 py-6">
                <h3 className="text-lg font-semibold text-slate-900">
                  {initiative.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-700">
                  {initiative.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomePhotoGallery() {
  const [startIndex, setStartIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (homeGalleryImages.length <= VISIBLE_HOME_GALLERY_IMAGES) {
      return;
    }

    const interval = setInterval(() => {
      setIsFading(true);

      setTimeout(() => {
        setStartIndex(
          (prev) => (prev + VISIBLE_HOME_GALLERY_IMAGES) % homeGalleryImages.length,
        );
        setIsFading(false);
      }, 350);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const visibleImages: string[] = [];

  for (
    let i = 0;
    i < VISIBLE_HOME_GALLERY_IMAGES && i < homeGalleryImages.length;
    i += 1
  ) {
    const index = (startIndex + i) % homeGalleryImages.length;
    visibleImages.push(homeGalleryImages[index]);
  }

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            Photo Gallery
          </h2>
          <p className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
            Moments from our global peace initiatives.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
            A visual journey through gatherings, community work, and interfaith harmony.
          </p>
        </div>
        <div
          className={`mt-12 grid auto-rows-[80px] grid-cols-2 gap-3 sm:auto-rows-[140px] sm:grid-cols-3 lg:auto-rows-[160px] lg:grid-cols-6 transition-opacity duration-700 ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >
          {visibleImages.map((src, index) => {
            const remaining = visibleImages.length - index;
            let layoutClass = "col-span-1 row-span-1";

            if (remaining > 3) {
              if (index % 10 === 0) {
                layoutClass = "col-span-2 row-span-2";
              } else if (index % 10 === 3) {
                layoutClass = "col-span-2 row-span-1";
              } else if (index % 10 === 6) {
                layoutClass = "row-span-2";
              }
            }

            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl bg-[var(--color-background-light)] ${layoutClass}`}
              >
                <Image
                  src={src}
                  alt="World Peace Harmony event"
                  fill
                  sizes="(min-width: 1024px) 16vw, (min-width: 768px) 33vw, 50vw"
                  loading="lazy"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function HomeMapSection() {
  return (
    <section className="bg-[var(--color-background-light)] py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 md:flex-row md:items-stretch">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
            <MapPin className="h-4 w-4" />
            <span>Our Location</span>
          </div>
          <h2 className="mt-6 text-3xl font-semibold text-slate-900 md:text-4xl">
            Visit World Peace Harmony in Delhi.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
            You are always welcome to connect with us in person at our Delhi office,
            surrounded by the communities we serve.
          </p>
          <div className="mt-8 rounded-2xl border border-black/5 bg-white p-6 text-sm leading-relaxed text-slate-800 shadow-lg">
            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--color-primary)] text-white">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Delhi Office</p>
                <p className="mt-1">
                  100, Nihal Vihar Park Rd,
                  <br />
                  DDA Park Nihal Vihar, Nangloi,
                  <br />
                  Delhi, 110041, India
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="group relative h-[320px] w-full overflow-hidden rounded-3xl border border-black/5 bg-white shadow-xl md:h-[380px]">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)]/8 via-transparent to-[var(--color-secondary)]/12" />
            <iframe
              src="https://www.google.com/maps?q=100,%20Nihal%20Vihar%20Park%20Rd,%20DDA%20Park%20Nihal%20Vihar,%20Nangloi,%20Delhi,%20110041&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full grayscale opacity-80 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-background-light)]">
      <Navbar />
      <Hero />
      <HomeAboutSection />
      <HomeSignatureInitiatives />
      <LeadershipSection />
      <HomePhotoGallery />
      <HomeMapSection />
      <Footer />
    </main>
  );
}
