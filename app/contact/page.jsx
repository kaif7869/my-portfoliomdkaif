import { createPageMetadata } from "@/lib/seo";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "./ContactForm";

export const metadata = createPageMetadata({
  title: "Contact Mohammad Kaif | Full Stack Developer",
  description:
    "Contact Mohammad Kaif for freelance projects, collaboration, portfolio feedback, and full stack web development work.",
  path: "/contact"
});

const contactItems = [
  { label: "Email", value: "quantamsolutions17816@gmail.com", icon: <Mail size={24} /> },
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

        <ContactForm />
      </div>
    </section>
  );
}
