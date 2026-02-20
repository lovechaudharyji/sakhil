import "server-only";

export type InstagramMediaType = "IMAGE" | "CAROUSEL_ALBUM" | "VIDEO";

export type InstagramPost = {
  id: string;
  caption: string | null;
  media_url: string;
  permalink: string;
  media_type: InstagramMediaType;
};

type InstagramChild = {
  id: string;
  media_type: InstagramMediaType;
  media_url?: string;
  thumbnail_url?: string;
};

type InstagramMediaItem = {
  id: string;
  caption?: string;
  media_type: InstagramMediaType;
  media_url?: string;
  permalink: string;
  thumbnail_url?: string;
  children?: {
    data: InstagramChild[];
  };
};

type InstagramApiResponse = {
  data?: InstagramMediaItem[];
  error?: {
    message?: string;
    type?: string;
    code?: number;
  };
};

function resolveMediaUrl(item: InstagramMediaItem): string | null {
  if (item.media_type === "IMAGE") {
    return item.media_url ?? null;
  }

  if (item.media_type === "VIDEO") {
    return item.thumbnail_url ?? item.media_url ?? null;
  }

  if (item.media_type === "CAROUSEL_ALBUM") {
    const firstChild = item.children?.data?.[0];

    if (!firstChild) {
      return item.media_url ?? null;
    }

    if (firstChild.media_type === "VIDEO") {
      return firstChild.thumbnail_url ?? firstChild.media_url ?? null;
    }

    return firstChild.media_url ?? null;
  }

  return null;
}

export async function fetchInstagramFeed(): Promise<InstagramPost[]> {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = process.env.INSTAGRAM_USER_ID;

  if (!accessToken || !userId) {
    throw new Error("Missing Instagram configuration");
  }

  const params = new URLSearchParams({
    fields:
      "id,caption,media_type,media_url,permalink,thumbnail_url,children{media_type,media_url,thumbnail_url}",
    limit: "6",
    access_token: accessToken,
  });

  const url = `https://graph.instagram.com/${userId}/media?${params.toString()}`;

  const response = await fetch(url, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error("Instagram API request failed");
  }

  const json = (await response.json()) as InstagramApiResponse;

  if (json.error) {
    throw new Error("Instagram API responded with an error");
  }

  const items = json.data ?? [];

  const posts: InstagramPost[] = items
    .map((item) => {
      const mediaUrl = resolveMediaUrl(item);

      if (!mediaUrl) {
        return null;
      }

      return {
        id: item.id,
        caption: item.caption ?? null,
        media_url: mediaUrl,
        permalink: item.permalink,
        media_type: item.media_type,
      };
    })
    .filter((item): item is InstagramPost => item !== null)
    .slice(0, 6);

  return posts;
}

