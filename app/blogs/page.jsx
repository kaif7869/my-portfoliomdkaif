import { createPageMetadata } from "@/lib/seo";
import Blogs from "./blogs";

export const metadata = createPageMetadata({
  title: "Blogs | Mohammad Kaif Portfolio",
  description:
    "Read Mohammad Kaif's technical blogs about web development, AI, and modern software engineering.",
  path: "/blogs"
});

export default function BlogsPage() {
  return <Blogs />;
}
