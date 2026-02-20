import { NextResponse } from "next/server";
import { fetchInstagramFeed } from "@/lib/instagram";

export const revalidate = 3600;

export async function GET() {
  try {
    const posts = await fetchInstagramFeed();

    return NextResponse.json(
      {
        data: posts,
      },
      {
        status: 200,
      }
    );
  } catch {
    return NextResponse.json(
      {
        error: "Failed to fetch Instagram feed",
      },
      {
        status: 500,
      }
    );
  }
}

