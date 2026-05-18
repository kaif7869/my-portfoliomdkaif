export const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://my-portfoliomdkaif.vercel.app";

export const siteName = "Mohammad Kaif Portfolio";

export const defaultTitle =
    "Mohammad Kaif | Full Stack Developer Portfolio";

export const defaultDescription =
    "Portfolio of Mohammad Kaif, a full stack developer building responsive web applications with React, Next.js, Node.js, Express.js, MongoDB, and Tailwind CSS.";

export const keywords = [
    "Mohammad Kaif",
    "Mohammad Kaif portfolio",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MongoDB Developer",
    "MERN Stack Developer",
    "Web Developer India",
    "Freelance Full Stack Developer"
];

export const socialImage = "/Images/personal/mohammadkaifphoto.webp";

export function absoluteUrl(path = "/") {
    return new URL(path, siteUrl).toString();
}

export function createPageMetadata({
    title,
    description,
    path = "/",
    image = socialImage,
    robots
}) {
    const url = absoluteUrl(path);

    return {
        title,
        description,
        keywords,
        alternates: {
            canonical: url
        },
        openGraph: {
            title,
            description,
            url,
            siteName,
            type: "website",
            images: [{
                url: absoluteUrl(image),
                width: 1200,
                height: 630,
                alt: "Mohammad Kaif Full Stack Developer Portfolio"
            }]
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [absoluteUrl(image)]
        },
        robots
    };
}