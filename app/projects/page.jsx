import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Bank Software Frontend",
    type: "React Application",
    desc: "A responsive personal portfolio with fixed navigation, dedicated sections, and a clean dark interface.",
    stack: ["React", "Tailwind CSS"],
    liveUrl: "https://reliable-crostata-3c383c.netlify.app/",
    codeUrl: "https://github.com/your-username/bank-software-frontend"
  },
  {
    title: "AI Chat Assistant",
    type: "Support Chatbot",
    desc: "A floating chatbot experience connected to an API route for conversational support.",
    stack: ["React", "API Route", "OpenAI"],
    liveUrl: "https://your-chat-assistant-link.com",
    codeUrl: "https://github.com/your-username/ai-chat-assistant"
  },
  {
    title: "Full Stack Dashboard",
    type: "MERN Product",
    desc: "Dashboard-style application patterns with reusable UI, CRUD flows, and MongoDB-backed data.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    liveUrl: "https://your-dashboard-link.com",
    codeUrl: "https://github.com/your-username/full-stack-dashboard"
  }
];

export default function ProjectsPage() {
  return (
    <section className="min-h-screen bg-[#0f172a] px-5 py-12 text-white md:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="font-semibold uppercase tracking-[4px] text-green-400">
          Projects
        </p>
        <h1 className="mt-4 text-5xl font-bold md:text-7xl">
          Selected work and product builds
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-400">
          A focused collection of projects that show frontend craft, backend
          implementation, API integration, and practical product thinking.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 xl:grid-cols-3">
          {projects.map(project => (
            <article
              key={project.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:border-green-400/50"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
                {project.type}
              </p>
              <h2 className="mt-4 text-3xl font-bold">{project.title}</h2>
              <p className="mt-4 leading-relaxed text-gray-400">{project.desc}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.stack.map(item => (
                  <span
                    key={item}
                    className="rounded-xl bg-[#0b1120] px-3 py-2 text-sm text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-green-400 px-4 py-3 font-semibold text-black transition hover:bg-green-300"
                >
                  Live Demo
                  <ArrowUpRight size={18} />
                </a>

                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-3 font-semibold text-green-400 transition hover:bg-white/5"
                >
                  Source Code
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
