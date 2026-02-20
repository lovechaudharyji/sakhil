"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";

const events = [
  {
    id: 1,
    title: "Global Peace Summit 2024",
    date: "Oct 15, 2024",
    location: "Geneva, Switzerland",
    description:
      "A gathering of world leaders and activists to discuss strategies for sustainable peace.",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Community Harmony Workshop",
    date: "Nov 05, 2024",
    location: "New York, USA",
    description:
      "Interactive workshop focused on building trust and understanding within diverse communities.",
    image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Youth Leadership Camp",
    date: "Dec 10, 2024",
    location: "Nairobi, Kenya",
    description:
      "Empowering young leaders with skills to drive positive change in their regions.",
    image: "https://images.unsplash.com/photo-1526976668912-1a811878dd37?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function Events() {
  return (
    <section id="events" className="py-24 bg-[var(--color-background-light)]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">
              Upcoming Events
            </h2>
            <p className="text-[var(--color-text-dark)]/70">
              Join us at our upcoming events and be a part of the global movement for peace and harmony.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-[var(--color-primary)] font-bold hover:text-[var(--color-secondary)] transition-colors">
            View All Events <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event) => (
            <motion.div
              key={event.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-[var(--color-text-dark)]/60 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-[var(--color-secondary)]" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-[var(--color-secondary)]" />
                    {event.location}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  {event.title}
                </h3>
                <p className="text-[var(--color-text-dark)]/70 text-sm mb-6 line-clamp-2">
                  {event.description}
                </p>
                <button className="w-full py-3 border border-gray-200 text-[var(--color-text-dark)] font-medium rounded-xl hover:bg-[var(--color-primary)] hover:text-white hover:border-transparent transition-all">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="md:hidden mt-8 text-center">
          <button className="flex items-center justify-center gap-2 text-[var(--color-primary)] font-bold hover:text-[var(--color-secondary)] transition-colors mx-auto">
            View All Events <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
