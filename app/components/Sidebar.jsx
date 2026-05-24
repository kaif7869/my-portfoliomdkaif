"use client";

import {
  Briefcase,
  Code2,
  FolderGit2,
  GraduationCap,
  Home,
  Mail,
  Rocket,
  User
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const navItems = [
  { href: "/", title: "Home", icon: Home },
  { href: "/about", title: "About Me", icon: User },
  { href: "/skills", title: "Skills", icon: Code2 },
  { href: "/projects", title: "Projects", icon: FolderGit2 },
  { href: "/freelancing", title: "Freelancing", icon: Rocket },
  { href: "/experience", title: "Experience", icon: Briefcase },
  { href: "/education", title: "Education", icon: GraduationCap },
  { href: "/contact", title: "Contact", icon: Mail }
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-[280px] flex-col justify-between border-r border-white/10 bg-[#111827] p-6 lg:flex">
      <div>
        <Link href="/" className="block rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-green-400">
            Full Stack
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">Mohammad Kaif</h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-400">
            React, Next.js, Node.js and MongoDB developer.
          </p>
        </Link>

        <nav className="mt-8 space-y-2">
          {navItems.map(({ href, title, icon: Icon }) => (
            <NavItem
              key={href}
              href={href}
              title={title}
              icon={<Icon size={20} />}
              active={pathname === href}
            />
          ))}
        </nav>
      </div>

      <div>
        <div className="flex items-center justify-center gap-4">
          <a
            href="#"
            aria-label="GitHub"
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:bg-green-400 hover:text-black"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/mohammad-kaif-devalapur-948929222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            aria-label="LinkedIn"
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:bg-green-400 hover:text-black"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          Copyright 2026 Mohammad Kaif Devalapur
        </p>
      </div>
    </aside>
  );
}

function NavItem({ href, title, icon, active }) {
  return (
    <Link
      href={href}
      className={`flex w-full items-center gap-4 rounded-xl px-4 py-3 transition-all duration-300 ${
        active
          ? "bg-green-400 text-black"
          : "text-gray-300 hover:bg-white/5 hover:text-white"
      }`}
    >
      {icon}
      <span className="font-medium">{title}</span>
    </Link>
  );
}
