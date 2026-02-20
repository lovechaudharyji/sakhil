"use client";

import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How can I volunteer with World Peace Harmony?",
    answer: "You can sign up through our 'Join Us' page or contact your local chapter directly. We welcome volunteers of all backgrounds.",
  },
  {
    question: "Where do my donations go?",
    answer: "85% of all donations go directly to our field programs. The remaining 15% covers administrative and fundraising costs.",
  },
  {
    question: "Can I partner with your organization?",
    answer: "Yes! We are always looking for strategic partners. Please fill out the form below and select 'Partner' as your role.",
  },
];

export default function ContactPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-[var(--color-background-light)]">
      <Navbar />
      <PageWrapper>
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center bg-[var(--color-background-dark)] text-white">
          <div className="text-center z-10 px-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Connect Across <br />
              <span className="text-[var(--color-accent)]">Borders.</span>
            </motion.h1>
            <p className="text-xl text-gray-300">
              Let&apos;s build peace together. We are here to listen and collaborate.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-24 container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: Info & Map */}
            <div>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <Mail className="w-8 h-8 text-[var(--color-primary)] mb-4" />
                  <h3 className="font-bold text-lg mb-2">General Inquiries</h3>
                  <p className="text-gray-600">info@wph.org</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <Phone className="w-8 h-8 text-[var(--color-primary)] mb-4" />
                  <h3 className="font-bold text-lg mb-2">Phone Support</h3>
                  <p className="text-gray-600">+41 22 123 4567</p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 w-full h-[400px] rounded-2xl relative overflow-hidden group">
                 <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-primary)]/10 group-hover:bg-[var(--color-primary)]/20 transition-colors">
                    <MapPin className="w-12 h-12 text-[var(--color-primary)] animate-bounce" />
                    <span className="sr-only">Map showing HQ location</span>
                 </div>
                 <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.884263544626!2d6.140406876798157!3d46.21665907109633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c650693d0e2eb%3A0xa0b695357b0bbc39!2sGeneva%2C%20Switzerland!5e0!3m2!1sen!2s!4v1708527891234!5m2!1sen!2s" 
                   width="100%" 
                   height="100%" 
                   style={{border:0}} 
                   allowFullScreen 
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade"
                   className="opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
                 ></iframe>
              </div>
            </div>

            {/* Right: Smart Form */}
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-8">
                Send us a Message
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all" placeholder="john@example.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">I am a...</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all cursor-pointer">
                    <option>Supporter / Donor</option>
                    <option>Volunteer</option>
                    <option>Journalist / Media</option>
                    <option>Partner Organization</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all" placeholder="How can we help you?"></textarea>
                </div>

                <button type="submit" className="w-full py-4 bg-[var(--color-primary)] text-white font-bold rounded-xl hover:bg-[var(--color-secondary)] transition-all shadow-lg flex items-center justify-center gap-2">
                  Send Message <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                  >
                    <span className="font-bold text-[var(--color-text-dark)]">
                      {faq.question}
                    </span>
                    {activeFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  {activeFaq === index && (
                    <div className="p-6 bg-white border-t border-gray-200 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </PageWrapper>
      <Footer />
    </main>
  );
}
