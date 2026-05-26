import { siteUrl } from "@/lib/seo";

const routes = [
  { path: "/", priority: 1 },
  { path: "/about", priority: 0.8 },
  { path: "/skills", priority: 0.8 },
  { path: "/projects", priority: 0.9 },
  { path: "/blogs", priority: 0.8 },
  { path: "/freelancing", priority: 0.9 },
  { path: "/experience", priority: 0.8 },
  { path: "/education", priority: 0.6 },
  { path: "/contact", priority: 0.7 }
];

export default function sitemap() {
  const lastModified = new Date();

  return routes.map(route => ({
    url: new URL(route.path, siteUrl).toString(),
    lastModified,
    changeFrequency: "monthly",
    priority: route.priority
  }));
}
