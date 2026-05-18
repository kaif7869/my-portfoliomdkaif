import { Mail, MapPin, Phone } from "lucide-react";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact Mohammad Kaif | Full Stack Developer",
  description:
    "Contact Mohammad Kaif for freelance projects, collaboration, portfolio feedback, and full stack web development work.",
  path: "/contact"
});

const contactItems = [
  { label: "Email", value: "mohammadkaifdevalapur@gmail.com", icon: <Mail size={24} /> },
  { label: "Phone", value: "+91 6362196902", icon: <Phone size={24} /> },
  { label: "Location", value: "India", icon: <MapPin size={24} /> }
];

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-[#0f172a] px-5 py-12 text-white md:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="font-semibold uppercase tracking-[4px] text-green-400">
            Contact
          </p>
          <h1 className="mt-4 text-5xl font-bold md:text-7xl">
            Let us build something useful
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-400">
            Send a message for freelance work, collaboration, portfolio
            feedback, or full stack web development projects.
          </p>

          <div className="mt-10 space-y-4">
            {contactItems.map(item => (
              <div
                key={item.label}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-400 text-black">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-400">{item.label}</p>
                  <p className="font-semibold text-white">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <Field label="Name" placeholder="Your name" />
            <Field label="Email" placeholder="you@example.com" type="email" />
          </div>

          <div className="mt-5">
            <Field label="Subject" placeholder="Project or message subject" />
          </div>

          <label className="mt-5 block">
            <span className="text-sm font-semibold text-gray-300">Message</span>
            <textarea
              rows={7}
              placeholder="Tell me about your project..."
              className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-[#0b1120] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-green-400"
            />
          </label>

          <button
            type="submit"
            className="mt-6 w-full rounded-xl bg-green-400 px-6 py-4 font-semibold text-black transition hover:bg-green-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, placeholder, type = "text" }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-gray-300">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-white/10 bg-[#0b1120] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-green-400"
      />
    </label>
  );
}
