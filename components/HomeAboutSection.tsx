"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

type CounterProps = {
  value: number;
  label: string;
  suffix?: string;
};

function Counter({ value, label, suffix = "+" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 40,
    stiffness: 120,
  });
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString();
      }
    });
    return () => unsubscribe();
  }, [springValue]);

  return (
    <div className="flex flex-col">
      <span
        ref={ref}
        className="text-3xl font-semibold text-[var(--color-primary)] md:text-4xl"
      >
        0
      </span>
      <span className="mt-1 text-sm font-medium uppercase tracking-wide text-[var(--color-text-dark)]/70">
        {label}
        {suffix}
      </span>
    </div>
  );
}

export default function HomeAboutSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const isVideoInView = useInView(videoRef, { once: false, margin: "-40px" });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }
    video.muted = isMuted;
    if (!isVideoInView) {
      video.pause();
      return;
    }
    if (isPlaying) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    } else {
      video.pause();
    }
  }, [isVideoInView, isPlaying, isMuted]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) {
      return;
    }
    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {});
      } else {
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) {
      return;
    }
    const next = !isMuted;
    video.muted = next;
    setIsMuted(next);
  };

  return (
    <section
      id="about"
      className="bg-[var(--color-background-light)] py-24"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 lg:flex-row lg:items-center">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            About World Peace Harmony
          </h2>
          <h3 className="mt-4 text-3xl font-semibold text-[var(--color-text-dark)] md:text-4xl">
            A global platform for interfaith peace and cooperation.
          </h3>
          <p className="mt-6 text-sm leading-relaxed text-[var(--color-text-dark)]/80 md:text-base">
            World Peace Harmony brings together leaders, communities, and institutions across cultures and
            faiths to advance dialogue, compassion, and shared responsibility for a more peaceful world.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-dark)]/80 md:text-base">
            Guided by the principle that the world is one family, we convene voices from government,
            civil society, and faith traditions to translate goodwill into concrete action.
          </p>
          <div className="mt-10 grid gap-8 border-t border-black/5 pt-8 sm:grid-cols-3">
            <Counter value={30} label="Countries Represented" />
            <Counter value={5000} label="Global Members" />
            <Counter value={120} label="Peace Initiatives" />
          </div>
        </motion.div>
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="relative mx-auto w-full max-w-2xl">
            <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-[var(--color-primary)]/15 to-[var(--color-secondary)]/10 blur-2xl" />
            <div className="relative rounded-[32px] border border-white/60 bg-white/80 px-8 py-10 shadow-xl backdrop-blur-xl">
              <div className="flex items-stretch gap-8">
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
                    Interfaith Dialogue
                  </p>
                  <p className="mt-2 text-sm text-[var(--color-text-dark)]/80">
                    Roundtables, summits, and community forums that build trust across traditions.
                  </p>
                  <div className="mt-6 rounded-2xl border border-dashed border-[var(--color-secondary)]/40 bg-[var(--color-background-light)] px-4 py-3 text-xs leading-relaxed text-[var(--color-text-dark)]/70">
                    “Our commitment is to create spaces where every voice is heard and every community feels
                    represented in the pursuit of peace.”
                  </div>

                   <div className="mt-6 rounded-2xl border border-dashed border-[var(--color-secondary)]/40 bg-[var(--color-background-light)] px-4 py-3 text-xs leading-relaxed text-[var(--color-text-dark)]/70">
                    “Our commitment is to create spaces where every voice is heard and every community feels
                    represented in the pursuit of peace.”
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="relative h-56 w-32 overflow-hidden rounded-[32px] border border-[var(--color-secondary)]/60 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] md:h-72 md:w-40">
                    <video
                      src="/Video%20(5).mp4"
                      loop
                      ref={videoRef}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2">
                      <button
                        type="button"
                        onClick={togglePlay}
                        aria-label={isPlaying ? "Pause video" : "Play video"}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-xs font-semibold text-[var(--color-primary)] shadow-md transition hover:bg-white"
                      >
                        <span>{isPlaying ? "❚❚" : "▶"}</span>
                      </button>
                      <button
                        type="button"
                        onClick={toggleMute}
                        aria-label={isMuted ? "Unmute video" : "Mute video"}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-xs font-semibold text-[var(--color-primary)] shadow-md transition hover:bg-white"
                      >
                        <span>{isMuted ? "🔇" : "🔊"}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
