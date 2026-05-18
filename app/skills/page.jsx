import { Code2, Database, GitBranch, Layers, Server, Wrench } from "lucide-react";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Skills | Mohammad Kaif Full Stack Developer",
  description:
    "Explore Mohammad Kaif's full stack development skills including React, Next.js, Node.js, Express.js, MongoDB, Tailwind CSS, REST APIs, Git, and deployment.",
  path: "/skills"
});

const skillGroups = [
  {
    title: "Frontend",
    icon: <Code2 size={28} />,
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Tailwind CSS"]
  },
  {
    title: "Backend",
    icon: <Server size={28} />,
    skills: ["Node.js", "Express.js", "REST APIs", "Authentication", "API Integration"]
  },
  {
    title: "Database",
    icon: <Database size={28} />,
    skills: ["MongoDB", "Mongoose", "Schema Design", "CRUD Operations", "MySQL", "PostgreSQL"]
  },
  {
    title: "Tools",
    icon: <Wrench size={28} />,
    skills: ["Git", "GitHub", "VS Code", "Postman", "npm"]
  },
  {
    title: "Architecture",
    icon: <Layers size={28} />,
    skills: ["Reusable Components", "Responsive Layouts", "Clean File Structure"]
  },
  {
    title: "Workflow",
    icon: <GitBranch size={28} />,
    skills: ["Debugging", "Deployment", "Code Review", "Performance Tuning"]
  }
];

export default function SkillsPage() {
  return (
    <section className="min-h-screen bg-[#0f172a] px-5 py-12 text-white md:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="font-semibold uppercase tracking-[4px] text-green-400">
          Skills
        </p>
        <h1 className="mt-4 text-5xl font-bold md:text-7xl">
          Tools I use to build reliable products
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-400">
          My stack covers the full application flow: polished interfaces,
          practical backend APIs, database modeling, debugging, and deployment.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map(group => (
            <article
              key={group.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-7"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-400 text-black">
                  {group.icon}
                </div>
                <h2 className="text-2xl font-bold">{group.title}</h2>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {group.skills.map(skill => (
                  <span
                    key={skill}
                    className="rounded-xl border border-white/10 bg-[#0b1120] px-4 py-2 text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
