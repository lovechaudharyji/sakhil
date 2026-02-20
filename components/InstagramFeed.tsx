import { Instagram as InstagramIcon } from "lucide-react";
import { fetchInstagramFeed } from "@/lib/instagram";
import InstagramFeedClient from "./InstagramFeedClient";

export default async function InstagramFeed() {
  let posts = [];

  try {
    posts = await fetchInstagramFeed();
  } catch {
    posts = [];
  }

  return (
    <section id="media" className="bg-[var(--color-background-light)] py-24">
      <div className="mx-auto flex max-w-7xl flex-col px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-primary)]">
            <InstagramIcon className="h-4 w-4" />
            <span>Global Moments of Peace</span>
          </div>
          <h2 className="mt-6 text-4xl font-bold text-[var(--color-primary)] md:text-5xl">
            Global Moments of Peace
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-text-dark)]/75 md:text-lg">
            Real stories from our movement worldwide.
          </p>
        </div>
        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-[var(--color-primary)]/10 to-transparent" />
        <div className="mt-10">
          <InstagramFeedClient posts={posts} />
        </div>
      </div>
    </section>
  );
}
