import blogs from "@/utils/blogs";

export const dynamic = "force-dynamic";

export async function GET() {
  const blogData = await Promise.all(blogs.map(fetchBlogMetadata));

  return Response.json({
    success: true,
    blogs: blogData
  });
}

async function fetchBlogMetadata(blog) {
  try {
    const response = await fetch(blog.url, {
      cache: "no-store",
      headers: {
        "User-Agent": "Mozilla/5.0 Portfolio Blog Metadata Fetcher"
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch ${blog.url}`);
    }

    const html = await response.text();

    return {
      id: blog.id,
      url: blog.url,
      image:
        getMetaContent(html, "property", "og:image") || blog.fallbackImage,
      title:
        cleanText(getHeading(html)) ||
        cleanText(getMetaContent(html, "property", "og:title")) ||
        cleanText(getTitle(html)) ||
        blog.fallbackTitle,
      description:
        cleanText(getMetaContent(html, "name", "description")) ||
        cleanText(getMetaContent(html, "property", "og:description")) ||
        blog.fallbackDescription,
      date:
        formatDate(
          getMetaContent(html, "property", "article:published_time") ||
            getMetaContent(html, "name", "date")
        ) ||
        getVisibleDate(html) ||
        blog.fallbackDate
    };
  } catch (error) {
    console.error(error);

    return {
      id: blog.id,
      url: blog.url,
      image: blog.fallbackImage,
      title: blog.fallbackTitle,
      description: blog.fallbackDescription,
      date: blog.fallbackDate
    };
  }
}

function getMetaContent(html, attribute, value) {
  const pattern = new RegExp(
    `<meta[^>]+${attribute}=["']${escapeRegExp(value)}["'][^>]+content=["']([^"']+)["'][^>]*>`,
    "i"
  );
  const reversedPattern = new RegExp(
    `<meta[^>]+content=["']([^"']+)["'][^>]+${attribute}=["']${escapeRegExp(value)}["'][^>]*>`,
    "i"
  );

  return decodeHtml(pattern.exec(html)?.[1] || reversedPattern.exec(html)?.[1]);
}

function getTitle(html) {
  return decodeHtml(/<title[^>]*>([^<]+)<\/title>/i.exec(html)?.[1]);
}

function getHeading(html) {
  return decodeHtml(/<h1[^>]*>(.*?)<\/h1>/is.exec(html)?.[1]);
}

function getVisibleDate(html) {
  const match = /([A-Z][a-z]+ \d{1,2}, \d{4})/.exec(stripTags(html));
  return match?.[1] || "";
}

function formatDate(value) {
  if (!value) {
    return "";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return cleanText(value);
  }

  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC"
  }).format(date);
}

function cleanText(value = "") {
  return decodeHtml(value).replace(/\s+/g, " ").trim();
}

function decodeHtml(value = "") {
  return value
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) =>
      String.fromCodePoint(Number.parseInt(hex, 16))
    )
    .replace(/&#(\d+);/g, (_, decimal) =>
      String.fromCodePoint(Number.parseInt(decimal, 10))
    )
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&rsquo;/g, "'")
    .replace(/&lsquo;/g, "'")
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
    .replace(/&mdash;/g, "-")
    .replace(/&ndash;/g, "-")
    .replace(/&hellip;/g, "...")
    .replace(/&nbsp;/g, " ")
    .replace(/â/g, "'")
    .replace(/â/g, '"')
    .replace(/â/g, '"')
    .replace(/â/g, "-")
    .replace(/â/g, "-")
    .replace(/â¦/g, "...");
}

function stripTags(value = "") {
  return value.replace(/<[^>]*>/g, " ");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
