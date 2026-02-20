"use client";

import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Linkedin, Award, Users, Globe, Heart, Shield } from "lucide-react";
import Image from "next/image";

const timeline = [
  {
    year: "2015",
    title: "First Summit",
    description: "Launched our inaugural peace summit in Geneva with 50 delegates.",
  },
  {
    year: "2017",
    title: "Youth Initiative",
    description: "Started the global youth ambassador program in 10 countries.",
  },
  {
    year: "2020",
    title: "Global Expansion",
    description: "Expanded operations to 25+ cities and impacted 10,000 lives.",
  },
  {
    year: "2024",
    title: "Digital Harmony",
    description: "Launched the digital peace platform connecting activists worldwide.",
  },
];

const leaders = [
  {
    name: "Dr. Sarah Johnson",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
  },
  {
    name: "James Chen",
    role: "Director of Operations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Amara Diallo",
    role: "Head of Advocacy",
    image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=1972&auto=format&fit=crop",
  },
];

const values = [
  {
    title: "Integrity",
    icon: Shield,
    desc: "Upholding the highest standards of honesty and transparency.",
  },
  {
    title: "Compassion",
    icon: Heart,
    desc: "Acting with empathy and care for all communities.",
  },
  {
    title: "Courage",
    icon: Award,
    desc: "Boldly addressing injustice and advocating for change.",
  },
  {
    title: "Collaboration",
    icon: Users,
    desc: "Working together across borders to achieve shared goals.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--color-background-light)]">
      <Navbar />
      <PageWrapper>
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover grayscale"
          >
            <source
              src="https://videos.pexels.com/video-files/3195641/3195641-uhd_2560_1440_25fps.mp4"
              type="video/mp4"
            />
          </video>
          <div className="relative z-20 text-center text-white max-w-4xl px-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              United by Purpose, <br />
              <span className="text-[var(--color-accent)]">Driven by Peace.</span>
            </motion.h1>
            <p className="text-xl md:text-2xl text-gray-200 font-light">
              The Architects of Harmony building a bridge to a better future.
            </p>
          </div>
        </section>

        {/* Our Story (Timeline) */}
        <section className="py-24 container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">
              Our Journey
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From a small gathering to a global movement, trace our path of impact.
            </p>
          </div>
          <div className="relative border-l-2 border-[var(--color-accent)] ml-6 md:ml-1/2 space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-8 md:pl-12"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--color-primary)] border-2 border-white ring-2 ring-[var(--color-accent)]" />
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <span className="text-[var(--color-accent)] font-bold text-xl block mb-2">
                    {item.year}
                  </span>
                  <h3 className="text-2xl font-bold text-[var(--color-text-dark)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">
                Leadership Team
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Visionaries guiding our mission towards a harmonious world.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              {leaders.map((leader, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="group relative overflow-hidden rounded-2xl"
                >
                  <div className="aspect-[3/4] relative">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {leader.name}
                      </h3>
                      <p className="text-[var(--color-accent)] font-medium mb-4">
                        {leader.role}
                      </p>
                      <a href="#" className="text-white hover:text-[var(--color-accent)]">
                        <Linkedin className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Footprint */}
        <section className="py-24 bg-[var(--color-background-dark)] text-white relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-4xl font-bold mb-8">Global Footprint</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-12">
              Our impact spans across continents, empowering communities and fostering dialogue in over 25 countries.
            </p>
            <div className="relative h-[400px] w-full max-w-4xl mx-auto opacity-80">
               {/* Simple SVG World Map Placeholder */}
               <Globe className="w-full h-full text-[var(--color-accent)]/20 animate-pulse" />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-[var(--color-accent)]">
                 Map Visualization Loading...
               </div>
            </div>
          </div>
        </section>

        {/* Values Grid */}
        <section className="py-24 container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">
              Our Core Values
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-6 hover:shadow-lg transition-shadow"
              >
                <div className="bg-[var(--color-primary)]/10 p-4 rounded-xl">
                  <value.icon className="w-8 h-8 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </PageWrapper>
      <Footer />
    </main>
  );
}
