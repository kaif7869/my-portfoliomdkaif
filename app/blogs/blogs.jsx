"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadBlogs = async () => {
            try {
                const response = await fetch("/api/blogs", {
                    cache: "no-store"
                });
                const data = await response.json();

                if (!response.ok || !data.success) {
                    throw new Error("Unable to load blogs");
                }

                setBlogs(data.blogs);
            } catch (loadError) {
                console.error(loadError);
                setError("Unable to load blogs right now.");
            } finally {
                setIsLoading(false);
            }
        };

        loadBlogs();
    }, []);

    return (
        <section className="min-h-screen bg-[#0f172a] px-5 py-12 text-white md:px-8 lg:px-10">
            <div className="mx-auto max-w-7xl">
                <p className="font-semibold uppercase tracking-[4px] text-green-400">
                    Blogs
                </p>
                <h1 className="mt-4 text-5xl font-bold md:text-7xl">
                    Notes, ideas and technical writing
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-400">
                    A collection of articles about web development, AI, and the
                    technologies I am exploring.
                </p>

                {isLoading && (
                    <div className="mt-14 rounded-2xl border border-white/10 bg-white/5 p-7 text-gray-300">
                        Loading blogs...
                    </div>
                )}

                {error && (
                    <div className="mt-14 rounded-2xl border border-red-400/30 bg-red-950/30 p-7 text-red-100">
                        {error}
                    </div>
                )}

                {!isLoading && !error && (
                    <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {blogs.map(blog => (
                            <article
                                key={blog.id}
                                className="overflow-hidden rounded-xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-green-400/50"
                            >
                                <div className="relative aspect-[16/10] bg-[#0b1120]">
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        fill
                                        unoptimized
                                        sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                                        className="object-cover"
                                        priority={blog.id === 1}
                                    />
                                </div>

                                <div className="p-5">
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-400">
                                        {blog.date}
                                    </p>
                                    <h2 className="mt-3 text-lg font-bold leading-snug text-white">
                                        {blog.title}
                                    </h2>
                                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-400">
                                        {blog.description}
                                    </p>

                                    <a
                                        href={blog.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="mt-5 inline-flex rounded-lg bg-green-400 px-3 py-2 text-sm font-semibold text-black transition hover:bg-green-300"
                                    >
                                        Read Blog
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Blogs;
