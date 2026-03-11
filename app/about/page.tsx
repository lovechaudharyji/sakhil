"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Globe2, Handshake, Sparkles, Target, Users } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const leaders = [
  {
    badge: "Chairman",
    name: "Dr. Shakeel Saifi",
    title: "Chairman, World Peace Harmony",
    detail:
      "CEO, Saifi International Events and Telefilms Inc. • CEO, Saifi Hospital",
    image: "/images/Shakeel Saifi.webp",
  },
  {
    badge: "Chief Patron",
    name: "Mr. Nitin Gadkari Ji",
    title: "Chief Patron, World Peace Harmony",
    detail:
      "Minister of Road Transport and Highways, Government of India",
    image: "/images/Nitin Gadkari Ji.webp",
  },
  {
    badge: "Chief Patron",
    name: "Mr. P. P. Chaudhary Ji",
    title: "Chief Patron, World Peace Harmony",
    detail:
      "Member of Parliament • Chairman, One Nation One Election",
    image: "/images/P. P. Chaudhary Ji.webp",
  },
  {
    badge: "Patron",
    name: "Shri Pradeep Kumar Singh",
    title: "Patron, World Peace Harmony",
    detail:
      "Member of Parliament, Lok Sabha",
    image: "/images/Shri Pradeep Kumar Singh.webp",
  },
  {
    badge: "Vice Chairman",
    name: "Mr. Rajendra Singh Miglani",
    title: "Vice Chairman, World Peace Harmony",
    detail:
      "Owner, Uttam Galva Steel",
    image: "/images/Rajendra Singh Miglani.webp",
  },
  {
    badge: "Chairman – Women’s Cell",
    name: "Mrs. Supriya Jay Doshi",
    title: "Chairman, Women’s Cell, World Peace Harmony",
    detail:
      "Founder, VDO Solutions",
    image: "/images/Supriya Jay Doshi.webp",
  },
];

const aboutHeroSlides = [
  {
    id: 0,
    label: "Global Peace Mission",
    headingPrimary: "Building a World of",
    headingAccent: "Peace, Unity & Harmony",
    description:
      "Together we can create a future where compassion replaces conflict and humanity stands united.",
    primaryButtonText: "Donate Now",
    secondaryButtonText: "Join the Mission",
    supportLine:
      "If you need help or want to support our mission, message us — we are here for you.",
    image: "/Banner/2 (1).jpeg",
  },
  {
    id: 1,
    label: "Help & Support",
    headingPrimary: "Your Support Can",
    headingAccent: "Change Lives",
    description:
      "Every contribution brings hope to families in need and strengthens the foundation of global harmony.",
    primaryButtonText: "Make a Donation",
    secondaryButtonText: "Contact Us",
    supportLine:
      "Need assistance? Want to volunteer? Reach out to us anytime.",
    image: "/Banner/2 (2).jpeg",
  },
  {
    id: 2,
    label: "Community & Action",
    headingPrimary: "Together We",
    headingAccent: "Rise for Humanity",
    description:
      "We believe in action, compassion, and unity beyond borders, cultures, and beliefs.",
    primaryButtonText: "Become a Volunteer",
    secondaryButtonText: "Support a Cause",
    supportLine:
      "Let us know how we can help — or how you would like to contribute.",
    image: "/Banner/2 (3).jpeg",
  },
];

export default function AboutPage() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % aboutHeroSlides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const slide = aboutHeroSlides[activeSlide];

  return (
    <main className="min-h-screen bg-[var(--color-background-light)]">
      <Navbar />
      <PageWrapper>
        <section className="bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-primary)] py-16 md:py-24">
          <div className="container mx-auto px-6">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-[2.5rem] bg-black/30 px-6 py-10 text-white shadow-xl backdrop-blur md:px-10 lg:px-12 lg:py-14"
            >
              <div className="pointer-events-none absolute -left-10 bottom-[-80px] h-64 w-64 rounded-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.26),_transparent_60%)] opacity-80" />
              <div className="pointer-events-none absolute -top-24 right-[-40px] h-72 w-72 rounded-full bg-[radial-gradient(circle_at_bottom,_rgba(0,0,0,0.55),_transparent_60%)] opacity-80" />
              <div className="relative grid gap-10 lg:grid-cols-[1.1fr_minmax(0,0.9fr)] lg:items-center">
                <div className="space-y-6">
                  <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-gray-100">
                    <span className="mr-2">♥</span>
                    {slide.label}
                  </span>
                  <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
                    {slide.headingPrimary}{" "}
                    <span className="block bg-gradient-to-r from-white to-[var(--color-background-light)] bg-clip-text text-transparent">
                      {slide.headingAccent}
                    </span>
                  </h1>
                  <p className="max-w-md text-sm text-gray-200 md:text-base">
                    {slide.description}
                  </p>
                  <div className="space-y-3">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                      <Link
                        href="https://www.instagram.com/mohmmadsakil0?igsh=bXByMmhrMG1heGx1"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-[var(--color-primary)] shadow-lg shadow-black/30 transition hover:shadow-xl"
                      >
                        <span>Contact Us</span>
                        <span className="ml-2 text-lg leading-none">➜</span>
                      </Link>
                      <Link
                        href="https://www.instagram.com/worldpeaceharmony0?igsh=Z2w1ZG5sYmdoZ3J0"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-full border border-white/70 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                      >
                        <span>Join Our Family</span>
                      </Link>
                    </div>
                    <p className="max-w-md text-xs text-gray-200 md:text-sm">
                      {slide.supportLine}
                    </p>
                  </div>
                </div>
                <div className="relative h-60 w-full sm:h-72 md:h-80 lg:h-96">
                  <div className="absolute right-[-18%] top-[-40%] hidden h-[160%] w-[80%] rounded-l-[999px] bg-gradient-to-b from-[#f97316]/70 via-[#f97316]/40 to-transparent opacity-80 lg:block" />
                  <div className="relative z-10 h-full w-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/30 shadow-2xl backdrop-blur">
                    <Image
                      src={slide.image}
                      alt="People gathered together"
                      fill
                      className={activeSlide === 0 || activeSlide === 2 ? "object-cover object-[50%_20%] md:object-[50%_32%]" : "object-cover object-[50%_60%] md:object-[50%_52%]"}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-24 container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4 flex items-center justify-center gap-3 text-4xl font-bold text-[var(--color-primary)]">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                <Globe2 className="h-5 w-5" />
              </span>
              <span>About World Peace Harmony</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              World Peace Harmony is a people-powered movement that believes peace is built
              through everyday actions, shared responsibility, and a deep sense of global
              belonging.
            </p>
          </div>
          <div className="grid gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-black/5 bg-white/90 p-8 shadow-sm backdrop-blur-sm"
            >
              <h3 className="flex items-center gap-3 text-xl font-semibold text-[var(--color-text-dark)]">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <Sparkles className="h-4 w-4" />
                </span>
                <span>Our Understanding of Peace & Harmony</span>
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-gray-700">
                Peace is not just the absence of war or conflict. It is a positive state where
                people live with mutual respect, justice, compassion, and cooperation. Across
                cultures and philosophies, peace and harmony are seen as essential for human
                flourishing and social stability.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-gray-700">
                The ancient Indian idea of{" "}
                <span className="font-semibold italic">Vasudhaiva Kutumbakam</span>—“the world
                is one family”—reminds us that all humans are interconnected and share a
                responsibility to care for one another. Peace and harmony arise when
                individuals and societies embrace this unity.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-3xl border border-black/5 bg-[var(--color-background-light)] p-8 shadow-sm"
            >
              <h3 className="flex items-center gap-3 text-xl font-semibold text-[var(--color-text-dark)]">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <Users className="h-4 w-4" />
                </span>
                <span>Who We Are</span>
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-gray-700">
                World Peace Harmony is more than an organisation; it is a movement for positive
                change. We believe that peace begins with individuals, expands through
                communities, and ultimately reaches nations.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-gray-700">
                We work to bridge differences, promote understanding, and empower people to
                work together for a better future where unity, compassion, and cooperation are
                everyday realities.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 flex items-center justify-center gap-3 text-4xl font-bold text-[var(--color-primary)]">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <Users className="h-5 w-5" />
                </span>
                <span>Leadership</span>
              </h2>
              <p className="mx-auto max-w-2xl text-gray-600">
                Our leadership brings together committed voices from public life, social impact,
                and enterprise, united by the belief that peace starts with purpose, integrity,
                and action.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {leaders.map((leader, index) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="group overflow-hidden rounded-3xl border border-black/5 bg-white/95 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="relative w-full bg-slate-50">
                    <div className="relative mx-auto w-full max-w-xs pt-4 pb-2">
                      <div className="relative w-full overflow-hidden rounded-2xl bg-black/5">
                        <div className="relative aspect-[3/4] w-full">
                          <Image
                            src={leader.image}
                            alt={leader.name}
                            fill
                            sizes="(min-width: 1024px) 16rem, 60vw"
                            className="object-contain lg:grayscale transition-all duration-500 group-hover:scale-105 lg:group-hover:grayscale-0"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-6 top-6 rounded-full bg-[var(--color-primary)] px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-white shadow-md">
                      {leader.badge}
                    </div>
                  </div>
                  <div className="space-y-1 px-6 pb-6 pt-4">
                    <h3 className="text-lg font-semibold text-[var(--color-text-dark)] md:text-xl">
                      {leader.name}
                    </h3>
                    <p className="text-sm font-semibold text-[#1A7D3B]">
                      {leader.title}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-[var(--color-text-dark)]/70 md:text-sm">
                      {leader.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-[var(--color-background-dark)] text-white">
          <div className="container mx-auto px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="flex items-center gap-3 text-3xl font-semibold md:text-4xl">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-emerald-300">
                    <Sparkles className="h-5 w-5" />
                  </span>
                  <span>Our Vision</span>
                </h2>
                <p className="mt-4 text-sm md:text-base text-gray-200 leading-relaxed">
                  We envision a world where peace is not an abstract idea but a shared way of
                  life that shapes how individuals, communities, and nations relate to one
                  another.
                </p>
                <ul className="mt-8 space-y-3 text-sm md:text-base text-gray-100">
                  <li className="rounded-2xl bg-white/5 px-4 py-3">
                    Every individual lives with dignity and respect.
                  </li>
                  <li className="rounded-2xl bg-white/5 px-4 py-3">
                    Communities thrive in harmony, free from prejudice.
                  </li>
                  <li className="rounded-2xl bg-white/5 px-4 py-3">
                    Differences in culture, faith, and background are celebrated.
                  </li>
                  <li className="rounded-2xl bg-white/5 px-4 py-3">
                    Peace becomes a shared global value.
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg"
              >
                <h2 className="flex items-center gap-3 text-3xl font-semibold md:text-4xl">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-amber-300">
                    <Target className="h-5 w-5" />
                  </span>
                  <span>Our Mission</span>
                </h2>
                <p className="mt-4 text-sm md:text-base text-gray-200 leading-relaxed">
                  Our mission reflects our belief that peace is both a personal responsibility
                  and a collective endeavour.
                </p>
                <ul className="mt-6 space-y-3 text-sm md:text-base text-gray-100">
                  <li>Promoting unity among people of all backgrounds.</li>
                  <li>Encouraging dialogue and cooperation to prevent conflict.</li>
                  <li>Supporting community development initiatives that foster peace.</li>
                  <li>Educating youth and adults on compassion and mutual respect.</li>
                  <li>Hosting events and activities that inspire peace-building.</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="order-1 rounded-3xl border border-black/5 bg-white/90 p-4 shadow-sm backdrop-blur"
            >
              <div className="relative h-60 w-full overflow-hidden rounded-2xl bg-black/10 sm:h-72 md:h-80 lg:h-96">
                <video
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  src="/images/school.mp4"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="order-2"
            >
              <h2 className="flex items-center gap-3 text-3xl font-semibold text-[var(--color-primary)] md:text-4xl">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <Users className="h-5 w-5" />
                </span>
                <span>Education & Social Harmony</span>
              </h2>
              <p className="mt-4 text-sm md:text-base leading-relaxed text-[var(--color-text-dark)]/80">
                A special program at Saifi Talimi Madrasa, Nangloi (New Delhi) highlighted the
                institution’s role in education and social harmony. Chairperson Rubina Saifi,
                Washeela Saifi, the management committee and local dignitaries attended.
              </p>
              <p className="mt-3 text-sm md:text-base leading-relaxed text-[var(--color-text-dark)]/80">
                The madrasa provides free education to nearly 2,800 children, teaching Urdu,
                Hindi, English and modern computer education—blending traditional learning with
                contemporary skills for economically weaker families.
              </p>
              <p className="mt-3 text-sm md:text-base leading-relaxed text-[var(--color-text-dark)]/80">
                As chief guest, World Peace Harmony Chairman Shakeel Saifi praised the effort and
                acknowledged national initiatives in digital empowerment, the New Education Policy
                and skill development that expand opportunities for India’s youth.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="flex items-center gap-3 text-3xl font-semibold text-[var(--color-primary)] md:text-4xl">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <Handshake className="h-5 w-5" />
                </span>
                <span>Our Work and Activities</span>
              </h2>
              <p className="mt-4 text-sm md:text-base text-gray-700 leading-relaxed">
                World Peace Harmony partners with individuals, communities, and leaders to host
                outreach programs, peace events, and social initiatives. Through these efforts,
                we aim to build a society that upholds understanding, justice, and cooperation.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid gap-4 md:grid-cols-2"
            >
              <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-sm font-semibold text-[var(--color-text-dark)]">
                  Outreach Programs
                </h3>
                <p className="mt-2 text-xs md:text-sm text-gray-700 leading-relaxed">
                  Engaging communities at the grassroots level to nurture dialogue, trust, and
                  shared responsibility.
                </p>
              </div>
              <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-sm font-semibold text-[var(--color-text-dark)]">
                  Peace Events
                </h3>
                <p className="mt-2 text-xs md:text-sm text-gray-700 leading-relaxed">
                  Hosting gatherings, observances, and campaigns that bring diverse voices
                  together under a common vision of harmony.
                </p>
              </div>
              <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-sm font-semibold text-[var(--color-text-dark)]">
                  Social Initiatives
                </h3>
                <p className="mt-2 text-xs md:text-sm text-gray-700 leading-relaxed">
                  Supporting initiatives that advance justice, dignity, and opportunity for
                  vulnerable communities.
                </p>
              </div>
              <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-sm font-semibold text-[var(--color-text-dark)]">
                  Education & Awareness
                </h3>
                <p className="mt-2 text-xs md:text-sm text-gray-700 leading-relaxed">
                  Creating learning spaces where youth and adults explore compassion, respect,
                  and shared humanity.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </PageWrapper>
      <Footer />
    </main>
  );
}
