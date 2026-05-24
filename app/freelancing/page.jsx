import { createPageMetadata } from "@/lib/seo";
import {
  ArrowRight,
  BadgeCheck,
  Code2,
  Headphones,
  LayoutDashboard,
  Rocket,
  Smartphone
} from "lucide-react";
import Link from "next/link";

export const metadata = createPageMetadata({
  title: "Freelancing Services | Mohammad Kaif",
  description:
    "Hire Mohammad Kaif for website, web application, app, and full stack development services with one month of free support after delivery.",
  path: "/freelancing"
});

const services = [
  {
    title: "Website Development",
    desc: "Modern business, portfolio, landing page, and company websites built with responsive layouts and clean UI.",
    icon: LayoutDashboard
  },
  {
    title: "Web Applications",
    desc: "Interactive dashboards, admin panels, booking flows, forms, APIs, authentication, and database-backed products.",
    icon: Code2
  },
  {
    title: "App Development",
    desc: "App-style experiences for mobile and desktop using modern frontend patterns, reusable screens, and smooth flows.",
    icon: Smartphone
  },
  {
    title: "Ongoing Services",
    desc: "Bug fixes, feature updates, redesigns, deployment support, performance improvements, and maintenance.",
    icon: Headphones
  }
];

const processSteps = [
  "Requirement discussion",
  "Design and development",
  "Testing and deployment",
  "One month free support"
];

export default function FreelancingPage() {
  return (
    <section className="min-h-screen bg-[#0f172a] px-5 py-12 text-white md:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <p className="font-semibold uppercase tracking-[4px] text-green-400">
              Freelancing Services
            </p>
            <h1 className="mt-4 text-5xl font-bold leading-tight md:text-7xl">
              I create websites, web applications, apps, and digital services
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-400">
              I help businesses, startups, students, and personal brands build
              useful digital products with responsive design, clean code, and
              reliable support after delivery.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-green-400 px-6 py-4 font-semibold text-black transition hover:bg-green-300"
              >
                Start a Project
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-4 font-semibold text-green-400 transition hover:bg-white/5"
              >
                View Work
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-green-400/30 bg-green-400/10 p-7 shadow-2xl shadow-green-400/10">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-400 text-black">
              <Rocket size={26} />
            </div>
            <h2 className="mt-6 text-3xl font-bold">
              One month free service
            </h2>
            <p className="mt-4 leading-relaxed text-gray-300">
              After project delivery, I provide one month of free support from
              my side for basic updates, small fixes, guidance, and deployment
              help related to the completed project.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Bug fixing support",
                "Small content updates",
                "Deployment guidance",
                "Basic performance checks"
              ].map(item => (
                <div key={item} className="flex items-center gap-3 text-gray-200">
                  <BadgeCheck className="text-green-400" size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map(({ title, desc, icon: Icon }) => (
            <article
              key={title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-green-400/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-400 text-black">
                <Icon size={22} />
              </div>
              <h2 className="mt-5 text-2xl font-bold">{title}</h2>
              <p className="mt-3 leading-relaxed text-gray-400">{desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="font-semibold uppercase tracking-[4px] text-green-400">
              How I Work
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Simple process, clear delivery
            </h2>
            <p className="mt-5 leading-relaxed text-gray-400">
              I keep communication clear from the first discussion to launch, so
              you always know what is being built and what comes next.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {processSteps.map((step, index) => (
              <div
                key={step}
                className="rounded-2xl border border-white/10 bg-[#0b1120] p-5"
              >
                <span className="text-sm font-semibold text-green-400">
                  Step {index + 1}
                </span>
                <h3 className="mt-3 text-xl font-bold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
