import { createPageMetadata } from "@/lib/seo";
import About from "../components/about/About";

export const metadata = createPageMetadata({
    title: "About Mohammad Kaif | Full Stack Developer",
    description: "Learn about Mohammad Kaif, a full stack developer focused on clean UI, scalable backend architecture, responsive layouts, and modern web applications.",
    path: "/aboutme"
});

export default function AboutPage() {
    return <About / > ;
}