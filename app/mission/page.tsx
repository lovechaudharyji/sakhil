"use client";

import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mic, Users, BookOpen, ArrowRight, Quote, Globe2, HeartHandshake, Sparkles } from "lucide-react";

const pillars = [
  {
    title: "Advocacy",
    description:
      "Driving policy change and fostering dialogue at local, national, and international levels.",
    icon: Mic,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Community",
    description:
      "Building resilient grassroots networks that empower individuals to take action.",
    icon: Users,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Education",
    description:
      "Equipping the next generation with the knowledge and skills to lead with compassion.",
    icon: BookOpen,
    color: "bg-yellow-100 text-yellow-600",
  },
];

const steps = [
  { title: "Identify Conflict", desc: "Understanding root causes." },
  { title: "Strategic Intervention", desc: "Dialogue & Mediation." },
  { title: "Sustainable Resolution", desc: "Long-term agreements." },
  { title: "Global Harmony", desc: "Lasting peace & prosperity." },
];

export default function MissionPage() {
  return (
    <main className="min-h-screen bg-[var(--color-background-light)]">
      <Navbar />
      <PageWrapper>
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-[var(--color-background-dark)] text-white">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                Blueprint for a <br />
                <span className="text-[var(--color-accent)]">Better World.</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-8">
                &quot;We believe peace is not just the absence of war, but the presence of justice, opportunity, and understanding.&quot;
              </p>
              <button className="px-8 py-4 bg-[var(--color-accent)] text-[var(--color-text-dark)] font-bold rounded-full hover:bg-white transition-all shadow-lg hover:shadow-xl">
                Read Our Manifesto
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[500px] w-full flex items-center justify-center"
            >
              {/* Abstract Peace Symbol / Dove Placeholder */}
              <div className="w-96 h-96 bg-gradient-to-tr from-[var(--color-secondary)] to-[var(--color-accent)] rounded-full blur-[100px] opacity-30 animate-pulse" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <span className="text-[200px] opacity-20">🕊️</span>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">
                Mission, Vision & Ethos
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                The heart of World Peace Harmony is a simple conviction: the world is one family,
                and leadership must reflect compassion, responsibility, and shared purpose.
              </p>
            </div>
            <div className="grid gap-10 md:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent)]" />
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                    <Globe2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--color-text-dark)]">
                    Mission Statement
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-gray-700">
                  World Peace Harmony is dedicated to promoting global unity and advancing world peace harmony
                  through inclusive partnerships and compassionate action. Guided by India&apos;s ancient ideal of
                  Vasudhaiva Kutumbakam &mdash; &quot;the world is one family&quot; &mdash; the organization works to
                  foster dialogue, trust, and collaboration among nations, leaders, and communities. Our mission is to
                  empower individuals and institutions to act with empathy, responsibility, and purpose for a more
                  peaceful and harmonious world.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--color-secondary)] via-[var(--color-accent)] to-[var(--color-primary)]" />
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]">
                    <HeartHandshake className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--color-text-dark)]">
                    Our Vision
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-gray-700">
                  To establish a world united by peace, humanity, and justice &mdash; where all individuals,
                  regardless of nationality, faith, or background, share equal access to dignity, opportunity, and
                  hope. By 2030, World Peace Harmony envisions becoming a globally recognized platform that represents
                  India&apos;s leadership in humanitarian diplomacy, conflict resolution, and fostering world peace
                  harmony.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-primary)] to-[var(--color-secondary)]" />
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-primary)]">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--color-text-dark)]">
                    Our Ethos
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-gray-700">
                  Rooted in India&apos;s civilizational values of compassion, tolerance, and unity, World Peace
                  Harmony serves as a bridge between people and nations, transforming goodwill into global action.
                  By nurturing leadership, fostering dialogue, and driving humanitarian impact, the organization
                  aspires to leave a legacy of enduring world peace harmony and collective prosperity.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">
              Our Strategic Pillars
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              How we translate our vision into tangible action.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all"
              >
                <div
                  className={`w-16 h-16 ${pillar.color} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <pillar.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--color-text-dark)] mb-4">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Theory of Change */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">
                Theory of Change
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our systemic approach to resolving conflict and building peace.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 max-w-5xl mx-auto">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                  <div className="bg-[var(--color-background-light)] p-6 rounded-xl border border-gray-200 text-center w-full md:w-64 hover:border-[var(--color-primary)] transition-colors">
                    <h4 className="font-bold text-[var(--color-primary)] mb-2">
                      {step.title}
                    </h4>
                    <p className="text-sm text-gray-500">{step.desc}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <ArrowRight className="w-6 h-6 text-gray-300 hidden md:block" />
                  )}
                  {index < steps.length - 1 && (
                     <div className="w-0.5 h-8 bg-gray-300 md:hidden my-2" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-24 bg-[var(--color-primary)] text-white relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Stories of Impact
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
               {[1, 2].map((i) => (
                 <motion.div
                   key={i}
                   whileHover={{ scale: 1.02 }}
                   className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl relative"
                 >
                   <Quote className="absolute top-6 right-6 w-12 h-12 text-[var(--color-accent)]/20" />
                   <p className="text-lg text-gray-200 italic mb-6 leading-relaxed">
                     &quot;Through the Youth Leadership program, I learned that my voice matters. Now, I lead peace workshops in my own community, inspiring others to choose dialogue over violence.&quot;
                   </p>
                   <div className="flex items-center gap-4">
                     <div className="w-12 h-12 bg-gray-300 rounded-full" />
                     <div>
                       <h4 className="font-bold text-white">Amina K.</h4>
                       <p className="text-sm text-[var(--color-accent)]">Youth Ambassador, Kenya</p>
                     </div>
                   </div>
                 </motion.div>
               ))}
            </div>
          </div>
        </section>
      </PageWrapper>
      <Footer />
    </main>
  );
}
