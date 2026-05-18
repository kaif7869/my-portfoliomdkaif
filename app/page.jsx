// app/page.jsx

import About from "./components/about/About";
import Hero from "./components/Hero";
import { createPageMetadata, defaultDescription, defaultTitle } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: defaultTitle,
  description: defaultDescription
});

export default function Home() {
  return (
    <>
      <Hero />
      <About />
    </>
  );
}
