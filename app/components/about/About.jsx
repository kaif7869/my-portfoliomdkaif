import { Code2, Database, Globe, Laptop, Rocket, Server } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="min-h-screen bg-[#0f172a] px-5 py-12 text-white md:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="font-semibold uppercase tracking-[4px] text-green-400">
          About Me
        </p>

        <h1 className="mt-4 text-5xl font-bold leading-tight md:text-7xl">
          Passionate Full Stack <br />
          Developer
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-gray-400">
          I am Mohammad Kaif, a full stack developer focused on building modern
          web applications with clean UI, scalable backend architecture, and
          optimized performance. I like creating products that feel simple to use
          and dependable under the hood.
        </p>
      </div>

      <div className="mx-auto mt-20 grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div className="relative flex justify-center">
          <div className="absolute h-[350px] w-[350px] rounded-full bg-green-400/20 blur-3xl" />

          <Image
            src="/Images/personal/aboutme.png"
            alt="Mohammad Kaif profile"
            width={380}
            height={500}
            className="relative z-10 h-[500px] w-[380px] rounded-[32px] border border-white/10 object-cover shadow-2xl"
          />

          <div className="absolute bottom-10 left-0 z-20 rounded-2xl border border-white/10 bg-white/10 px-6 py-5 backdrop-blur-lg md:left-6">
            <h2 className="text-4xl font-bold text-green-400">20+</h2>
            <p className="mt-1 text-gray-300">Projects Completed</p>
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold leading-tight">
            Building scalable and modern applications for the web.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-400">
            I specialize in frontend and backend development using React.js,
            Next.js, Node.js, Express.js, MongoDB, and Tailwind CSS. I focus on
            responsive layouts, clear user flows, and reliable application
            structure.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-gray-400">
            My goal is to keep improving, learn useful technologies deeply, and
            build products that create real value for users and businesses.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <InfoBox title="Name" value="Mohammad Kaif" />
            <InfoBox title="Experience" value="2+ Years" />
            <InfoBox title="Location" value="India" />
            <InfoBox title="Availability" value="Freelance" />
          </div>

          <Link
            href="/contact"
            className="mt-10 inline-block rounded-xl bg-green-400 px-8 py-4 font-semibold text-black transition-all duration-300 hover:bg-green-300"
          >
            Contact Me
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-28 max-w-7xl">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[4px] text-green-400">
            Skills
          </p>
          <h2 className="mt-4 text-5xl font-bold">Technologies I Use</h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          <SkillCard
            icon={<Code2 size={35} />}
            title="Frontend Development"
            desc="React.js, Next.js, Tailwind CSS, JavaScript, and responsive UI design."
          />
          <SkillCard
            icon={<Server size={35} />}
            title="Backend Development"
            desc="Node.js, Express.js, REST APIs, and server-side application architecture."
          />
          <SkillCard
            icon={<Database size={35} />}
            title="Database"
            desc="MongoDB database management, schema design, and backend integration."
          />
          <SkillCard
            icon={<Globe size={35} />}
            title="Web Applications"
            desc="Modern, fast, SEO-friendly full stack web applications."
          />
          <SkillCard
            icon={<Laptop size={35} />}
            title="UI/UX Design"
            desc="Clean interfaces, consistent spacing, and smooth user experiences."
          />
          <SkillCard
            icon={<Rocket size={35} />}
            title="Performance"
            desc="Optimized loading, reusable components, and maintainable code."
          />
        </div>
      </div>
    </section>
  );
}

function InfoBox({ title, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <p className="text-sm text-gray-400">{title}</p>
      <h3 className="mt-2 text-lg font-semibold">{value}</h3>
    </div>
  );
}

function SkillCard({ icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg transition-all duration-300 hover:-translate-y-2">
      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-green-400 text-black">
        {icon}
      </div>

      <h3 className="mt-6 text-2xl font-bold">{title}</h3>
      <p className="mt-4 leading-relaxed text-gray-400">{desc}</p>
    </div>
  );
}
