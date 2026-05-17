import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#0f172a] px-5 py-12 md:px-8 lg:px-10">
      <div className="mx-auto grid min-h-[78vh] max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-5 font-semibold uppercase tracking-widest text-green-400">
            Full Stack Developer
          </p>

          <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
            Hi, I am <span className="text-green-400">Mohammad Kaif</span>
          </h1>

          <p className="mt-8 max-w-[600px] text-lg leading-relaxed text-gray-400">
            I build modern, responsive, and scalable web applications using
            React, Next.js, Node.js, MongoDB, and Tailwind CSS. I enjoy turning
            ideas into polished digital products with clean interfaces and
            reliable backend logic.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <Link
              href="/projects"
              className="flex items-center gap-2 rounded-xl bg-green-400 px-8 py-4 font-semibold text-black transition-all duration-300 hover:bg-green-300"
            >
              View Projects
              <MdOutlineKeyboardArrowRight size={20} />
            </Link>

            <a
              href="/Mohammad-Kaif-Resume.pdf"
              className="rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white/10"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <a
              href="#"
              aria-label="GitHub"
              className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 text-white transition-all duration-300 hover:bg-green-400 hover:text-black"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 text-white transition-all duration-300 hover:bg-green-400 hover:text-black"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        <div className="relative flex justify-center py-6">
          <div className="absolute h-[360px] w-[280px] rounded-full bg-green-400/20 blur-3xl" />

          <div className="relative w-full max-w-[390px]">
            <Image
              src="/Images/personal/mohammadkaifphoto.webp"
              alt="Mohammad Kaif profile"
              width={390}
              height={320}
              priority
              className="relative z-10 h-auto w-full rounded-[32px] border-4 border-white/10 object-contain shadow-2xl"
            />

            <div className="absolute bottom-5 left-4 z-20 rounded-2xl border border-white/10 bg-[#111827]/75 px-4 py-3 text-white shadow-xl backdrop-blur-md sm:px-5 sm:py-4">
              <h3 className="text-2xl font-bold sm:text-3xl">2+</h3>
              <p className="mt-1 text-sm text-gray-200 sm:text-base">
                Years Experience
              </p>
            </div>

            <div className="absolute right-4 top-5 z-20 rounded-2xl border border-white/10 bg-[#111827]/75 px-4 py-3 text-white shadow-xl backdrop-blur-md sm:px-5 sm:py-4">
              <h3 className="text-2xl font-bold sm:text-3xl">20+</h3>
              <p className="mt-1 text-sm text-gray-200 sm:text-base">
                Projects
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-3">
        <InfoCard
          title="Frontend Development"
          desc="Responsive interfaces using React, Next.js, Tailwind CSS, and reusable components."
        />
        <InfoCard
          title="Backend Development"
          desc="REST APIs, authentication flows, and server-side application logic with Node.js."
        />
        <InfoCard
          title="Database Management"
          desc="MongoDB schemas, data modeling, integrations, and performance-aware queries."
        />
      </div>
    </section>
  );
}

function InfoCard({ title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg transition-all duration-300 hover:-translate-y-2">
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-400 text-2xl font-bold text-black">
        *
      </div>

      <h3 className="mt-6 text-2xl font-bold text-white">{title}</h3>
      <p className="mt-4 leading-relaxed text-gray-400">{desc}</p>

      <Link
        href="/skills"
        className="mt-6 inline-block font-semibold text-green-400 hover:underline"
      >
        Learn More
      </Link>
    </div>
  );
}
