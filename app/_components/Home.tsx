"use client";

import Link from 'next/link';

const homeLinks = [
    { label: 'Lore', href: '/lore' },
    { label: 'Rulebook', href: '/rulebook' },
    { label: 'VTT', href: '/vtt' },
    { label: 'Downloads', href: '/download' },
];

export default function HomePage() {

    return (
        <main className="flex flex-1 flex-col font-serif">
            <div className="text-center mt-8 px-8">
                <h1 className="text-3xl text-sky-dark sm:text-4xl">
                    A High-Flying Roguelite Raiding TTRPG
                </h1>
            </div>
            <div className="flex flex-1 flex-col items-center gap-12 px-6 pb-8 pt-12 text-center">
                <div
                    className="mt-auto grid w-full max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
                >
                    {homeLinks.map(({ label, href }) => (
                        <div
                            key={href}
                        >
                            <Link
                                href={href}
                                className="block h-full rounded-lg bg-linear-to-b from-sky-light to-sky px-5 py-5 text-xl font-bold text-white transition-[transform,filter] duration-200 hover:-translate-y-1 active:brightness-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-dark"
                            >
                                {label}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}