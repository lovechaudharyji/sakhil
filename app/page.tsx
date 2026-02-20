 "use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HomeAboutSection from "@/components/HomeAboutSection";
import MissionSection from "@/components/MissionSection";
import LeadershipSection from "@/components/LeadershipSection";
import Footer from "@/components/Footer";
import Image from "next/image";
import { MapPin } from "lucide-react";

const homeGalleryImages = Array.from(
  { length: 57 },
  (_, index) => `/photog/1 (${index + 1}).jpeg`,
);

const VISIBLE_HOME_GALLERY_IMAGES = 12;

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
          <p className="mt-4 text-3xl font-semibold text-[var(--color-text-dark)] md:text-4xl">
            Moments from our global peace initiatives.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-dark)]/80 md:text-base">
            A visual journey through gatherings, community work, and interfaith harmony.
          </p>
        </div>
        <div
          className={`mt-12 columns-2 gap-4 space-y-4 sm:columns-3 lg:columns-4 transition-opacity duration-700 ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >
          {visibleImages.map((src, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl bg-[var(--color-background-light)]"
            >
              <Image
                src={src}
                alt="World Peace Harmony event"
                width={800}
                height={600}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeMapSection() {
  return (
    <section className="bg-[var(--color-background-light)] py-24 text-[var(--color-text-dark)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 md:flex-row md:items-stretch">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
            <MapPin className="h-4 w-4" />
            <span>Our Location</span>
          </div>
          <h2 className="mt-6 text-3xl font-semibold md:text-4xl">
            Visit World Peace Harmony in Delhi.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-dark)]/80 md:text-base">
            You are always welcome to connect with us in person at our Delhi office,
            surrounded by the communities we serve.
          </p>
          <div className="mt-8 rounded-2xl border border-black/5 bg-white p-6 text-sm leading-relaxed text-[var(--color-text-dark)]/85 shadow-lg">
            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--color-primary)] text-white">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <p className="font-semibold">Delhi Office</p>
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
      <MissionSection />
      <LeadershipSection />
      <HomePhotoGallery />
      <HomeMapSection />
      <Footer />
    </main>
  );
}
