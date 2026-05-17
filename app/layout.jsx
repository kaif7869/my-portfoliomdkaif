import ChatBot from "./chatBot/page";
import MobileNav from "./components/MobileNav";
import Sidebar from "./components/Sidebar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen overflow-hidden bg-[#0b1120] text-white">
        <div className="flex h-screen">
          <Sidebar />

          <div className="flex min-w-0 flex-1 flex-col lg:pl-[280px]">
            <TopNav />

            <main className="min-h-0 flex-1 overflow-y-auto bg-[#0f172a] pb-24 lg:pb-0">
              {children}
            </main>

            <MobileNav />
            <ChatBot />
          </div>
        </div>
      </body>
    </html>
  );
}

function TopNav() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#0f172a]/95 px-5 py-4 backdrop-blur md:px-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-green-400">
            Portfolio
          </p>
          <h1 className="text-xl font-bold text-white md:text-2xl">
            Mohammad Kaif
          </h1>
        </div>

        <a
          href="/contact"
          className="rounded-xl bg-green-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-green-300"
        >
          Hire Me
        </a>
      </div>
    </header>
  );
}
