"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Instagram as InstagramIcon } from "lucide-react";
import type { InstagramPost } from "@/lib/instagram";

type Props = {
  posts: InstagramPost[];
};

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function InstagramFeedClient({ posts }: Props) {
  if (posts.length === 0) {
    return (
      <div className="mt-8 rounded-2xl border border-dashed border-gray-200 bg-white/60 px-6 py-8 text-center text-sm text-[var(--color-text-dark)]/70">
        Instagram feed is currently unavailable. Please check back soon.
      </div>
    );
  }

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href={post.permalink}
                target="_blank"
                rel="noreferrer"
                aria-label={post.caption ?? "Instagram post"}
                className="group block h-full"
              >
                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/70 bg-white/60 shadow-sm backdrop-blur-md transition-all duration-300 group-hover:border-[var(--color-accent)] group-hover:shadow-xl">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={post.media_url}
                      alt={post.caption ?? "Instagram post"}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-background-dark)]/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-black/50 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white">
                      <InstagramIcon className="h-3 w-3" />
                      <span>Instagram</span>
                    </div>
                  </div>
                  {post.caption && (
                    <div className="flex flex-1 flex-col px-5 py-4">
                      <p className="line-clamp-3 text-sm leading-relaxed text-[var(--color-text-dark)]/80">
                        {post.caption}
                      </p>
                    </div>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <div className="mt-10 flex justify-center">
        <Link
          href="https://www.instagram.com/worldpeaceharmony0/?hl=en"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-8 py-3 text-sm font-semibold text-[var(--color-text-dark)] shadow-lg transition-all duration-300 hover:bg-white hover:shadow-xl"
        >
          <InstagramIcon className="h-4 w-4" />
          <span>View More on Instagram</span>
        </Link>
      </div>
    </>
  );
}
