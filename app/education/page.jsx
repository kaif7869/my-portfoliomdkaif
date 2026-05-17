import { GraduationCap } from "lucide-react";

const education = [
  {
    title: "Bachelors of Engineering",
    place: "Angadi Institute of Technology and Management, Belagavi",
    period: "2019 - 2023",
    details: "Computer Science degree with focus on software development, data structures, algorithms, databases, and web technologies."
  },
  {
    title: "PUC",
    place: "Govindram Seksaria Science College, Belagavi",
    period: "2017 - 2019",
    details: "PCMB (Physics, Chemistry, Mathematics, Biology)."
  },
  {
    title: "X",
    place: "National Progressive Educatioal Trust School, Belagavi",
    period: "2006 - 2017",
    details: "Basic education in sciences and mathematics."
  },
];

export default function EducationPage() {
  return (
    <section className="min-h-screen bg-[#0f172a] px-5 py-12 text-white md:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="font-semibold uppercase tracking-[4px] text-green-400">
          Education
        </p>
        <h1 className="mt-4 text-5xl font-bold md:text-7xl">
          Learning path and technical foundation
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-400">
          I keep my learning practical by combining core concepts with real
          projects, so each new skill becomes something I can actually ship.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {education.map(item => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-7"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-400 text-black">
                <GraduationCap size={30} />
              </div>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
                {item.period}
              </p>
              <h2 className="mt-3 text-3xl font-bold">{item.title}</h2>
              <p className="mt-3 text-gray-300">{item.place}</p>
              <p className="mt-5 leading-relaxed text-gray-400">{item.details}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
