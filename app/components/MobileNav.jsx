"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Briefcase,
  Code2,
  FolderGit2,
  GraduationCap,
  Home,
  Mail,
  User
} from "lucide-react";

const navItems = [
  { href: "/", title: "Home", icon: Home },
  { href: "/about", title: "About", icon: User },
  { href: "/skills", title: "Skills", icon: Code2 },
  { href: "/projects", title: "Projects", icon: FolderGit2 },
  { href: "/experience", title: "Experience", icon: Briefcase },
  { href: "/education", title: "Education", icon: GraduationCap },
  { href: "/contact", title: "Contact", icon: Mail }
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 z-40 flex w-full gap-2 overflow-x-auto border-t border-white/10 bg-[#111827]/95 px-3 py-3 backdrop-blur lg:hidden">
      {navItems.map(({ href, title, icon: Icon }) => {
        const active = pathname === href;

        return (
          <Link
            key={href}
            href={href}
            className={`flex min-w-[76px] flex-col items-center gap-1 rounded-xl px-3 py-2 text-xs font-medium transition ${
              active
                ? "bg-green-400 text-black"
                : "text-gray-300 hover:bg-white/5 hover:text-white"
            }`}
          >
            <Icon size={18} />
            {title}
          </Link>
        );
      })}
    </nav>
  );
}
