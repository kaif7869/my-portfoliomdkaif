import { Briefcase } from "lucide-react";

const timeline = [
  {
    role: "Full Stack Developer",
    company: "Deluxe Digital Advertising",
    period: "May 2026 - Present",
    points: [
      "Built responsive web interfaces with React, Next.js, and Tailwind CSS.",
      "Created backend APIs with Node.js, Express.js, and MongoDB.",
      "Integrated chatbot, contact, and portfolio workflows into modern web apps.",
      "Handling Exprintmart website"
    ]
  },
  {
    role: "Software Developer",
    company: "Rachana Infotech",
    period: "Sep 2025 - Apr 2026",
    points: [
      "Architected scalable backend banking modules in PHP, supporting high-volume transactional workloads.",
      "Reduced API response times by ~35% implementing Redis caching strategies across critical endpoints",
      "Containerized services with Docker, ensuring environment consistency across dev/staging/production. ",
      "Built React.js dashboards and integrated third-party REST APIs for payment gateways and banking. "
    ]
  },
  {
    role: "Backend Developer",
    company: "DevPOLer",
    period: "May 2025 - Sep 2026",
    points: [
      "Developed secure banking account statement retrieval and processing features using Next.js backend APIs ",
      "Integrated AWS (S3, Lambda, SES) and Firebase for real-time data sync and file storage. ",
      "Used Firebase for real-time database synchronization and application state management ",
      "Improved backend reliability, scalability, and performance through optimized API architecture "
    ]
  },
  {
    role: "Software Developer",
    company: "Hiddle",
    period: "Sep 2024 - Apr 2025",
    points: [
      "Deployed apps on Microsoft Azure (App Service, Azure SQL), cutting release time 60% via CI/CD ",
      "Developed React.js components improving UI responsiveness and reducing page load time. ",
      "Built modern frontend designs and responsive web interfaces for freelance and client-based projects similar ",
      "Collaborated on scalable web application development using React.js, JavaScript, Tailwind CSS, and REST APIs. "
    ]
  },
];

export default function ExperiencePage() {
  return (
    <section className="min-h-screen bg-[#0f172a] px-5 py-12 text-white md:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="font-semibold uppercase tracking-[4px] text-green-400">
          Experience
        </p>
        <h1 className="mt-4 text-5xl font-bold md:text-7xl">
          Practical experience building web applications
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-400">
          My work centers on turning product ideas into usable full stack
          applications, with attention to layout quality, maintainable code, and
          clear user flows.
        </p>

        <div className="mt-14 space-y-6">
          {timeline.map(item => (
            <article
              key={`${item.role}-${item.period}`}
              className="rounded-2xl border border-white/10 bg-white/5 p-7"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-green-400 text-black">
                    <Briefcase size={28} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">{item.role}</h2>
                    <p className="mt-2 text-gray-400">{item.company}</p>
                  </div>
                </div>
                <span className="rounded-xl border border-white/10 bg-[#0b1120] px-4 py-2 text-sm text-gray-300">
                  {item.period}
                </span>
              </div>

              <ul className="mt-6 space-y-3 text-gray-300">
                {item.points.map(point => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-green-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
