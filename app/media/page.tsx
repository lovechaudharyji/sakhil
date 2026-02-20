"use client";

import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Download, FileText, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

const pressReleases = [
  {
    title: "World Peace Harmony Expands to South America",
    date: "Sep 20, 2024",
    link: "#",
  },
  {
    title: "Annual Impact Report 2023 Released",
    date: "Aug 15, 2024",
    link: "#",
  },
  {
    title: "Statement on Global Climate Action",
    date: "Jul 10, 2024",
    link: "#",
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
];

export default function MediaPage() {
  return (
    <main className="min-h-screen bg-[var(--color-background-light)]">
      <Navbar />
      <PageWrapper>
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-end pb-20 bg-[var(--color-background-dark)] text-white">
           <div className="absolute inset-0">
             <Image
               src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
               alt="Press Conference"
               fill
               className="object-cover opacity-40"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background-dark)] to-transparent" />
           </div>
           <div className="container mx-auto px-6 relative z-10">
             <motion.h1
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-5xl md:text-7xl font-bold mb-4"
             >
               Voices of Peace
             </motion.h1>
             <p className="text-xl text-gray-300 max-w-2xl">
               Our latest stories, press releases, and multimedia resources from the frontlines of change.
             </p>
           </div>
        </section>

        {/* Press Releases */}
        <section className="py-24 container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-[var(--color-primary)]">
              Latest Press Releases
            </h2>
            <button className="text-[var(--color-accent)] font-bold hover:underline">
              View Archive
            </button>
          </div>
          <div className="space-y-4">
            {pressReleases.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                whileHover={{ x: 10 }}
                className="block bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-[var(--color-accent)] transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[var(--color-text-dark)] group-hover:text-[var(--color-primary)] transition-colors mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500">{item.date}</p>
                  </div>
                  <FileText className="w-6 h-6 text-gray-300 group-hover:text-[var(--color-accent)] transition-colors" />
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Multimedia Gallery */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-12">
              Multimedia Gallery
            </h2>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {gallery.map((src, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="relative break-inside-avoid rounded-xl overflow-hidden cursor-pointer group"
                >
                  <Image
                    src={src}
                    alt="Gallery Image"
                    width={600}
                    height={400}
                    className="w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ImageIcon className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Kit */}
        <section className="py-24 bg-[var(--color-background-dark)] text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">Media Resources</h2>
            <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
              Access our official logos, brand guidelines, and high-resolution imagery for press usage.
            </p>
            <div className="flex justify-center gap-6">
              <button className="px-8 py-4 bg-[var(--color-accent)] text-[var(--color-text-dark)] font-bold rounded-full hover:bg-white transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download Brand Kit
              </button>
            </div>
          </div>
        </section>
      </PageWrapper>
      <Footer />
    </main>
  );
}
