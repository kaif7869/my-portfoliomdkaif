import {
    absoluteUrl,
    createPageMetadata,
    defaultDescription,
    defaultTitle,
    keywords,
    siteName,
    siteUrl,
} from '@/lib/seo'
import ChatBot from './chatBot/page'
import MobileNav from './components/MobileNav'
import Sidebar from './components/Sidebar'
import './globals.css'

export const metadata = {
    metadataBase: new URL(siteUrl),
    ...createPageMetadata({
        title: defaultTitle,
        description: defaultDescription,
    }),
    applicationName: siteName,
    authors: [{ name: 'Mohammad Kaif', url: siteUrl }],
    creator: 'Mohammad Kaif',
    publisher: 'Mohammad Kaif',
    category: 'portfolio',
    icons: {
        icon: '/favicon.ico',
    },
}

const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mohammad Kaif',
    url: siteUrl,
    image: absoluteUrl('/Images/personal/mohammadkaifphoto.webp'),
    jobTitle: 'Full Stack Developer',
    email: 'mailto:mohammadkaifdevalapur@gmail.com',
    telephone: '+91-6362196902',
    address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN',
    },
    knowsAbout: keywords,
    sameAs: [],
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(personJsonLd),
                    }}
                />
            </head>
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
    )
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

                <div className='flex'>
                    <a
                        href='/blogs'
                        className='text-white hover:text-green-400'
                    >
                        Blogs
                    </a>
                </div>    

                <div className="flex items-center gap-4">
                    <a
                        href="/contact"
                        className="rounded-xl bg-green-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-green-300"
                    >
                        Hire Me
                    </a>

                    <a
                        href="/freelancing"
                        className="rounded-xl bg-green-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-green-300"
                    >
                        Freelancing
                    </a>
                </div>
            </div>
        </header>
    )
}
