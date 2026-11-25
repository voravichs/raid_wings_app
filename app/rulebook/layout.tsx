import type { ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/app/_components/Header";

export const metadata: Metadata = {
    title: "Rulebook | Raid Wings",
    description: "The Raid Wings tabletop role-playing game rulebook.",
};

const chapters = [
    {
        title: "Getting started",
        links: [
            { label: "Overview", href: "#overview" },
            { label: "The mission loop", href: "#mission-loop" },
        ],
    },
    {
        title: "Core rules",
        links: [
            { label: "Making a test", href: "#tests" },
            { label: "Combat", href: "#combat" },
        ],
    },
    {
        title: "Reference",
        links: [{ label: "Conditions", href: "#conditions" }],
    },
];

const pageSections = [
    { label: "Overview", href: "#overview" },
    { label: "The mission loop", href: "#mission-loop" },
    { label: "Making a test", href: "#tests" },
    { label: "Combat", href: "#combat" },
    { label: "Conditions", href: "#conditions" },
];

export default function RulebookLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <div className="min-h-screen">
            <Header />

            <div className="border-y border-ink/10 bg-accent">
                <div className="mx-auto flex max-w-[90rem] items-center gap-3 px-5 py-3 text-sm sm:px-8">
                    <Link href="/" className="font-semibold text-sky-dark hover:underline">
                        Raid Wings
                    </Link>
                    <span aria-hidden="true" className="text-ink/50">/</span>
                    <span className="font-semibold">Rulebook</span>
                    <span className="ml-auto hidden text-ink/60 sm:inline">Player guide</span>
                </div>
            </div>

            <div className="mx-auto grid max-w-[90rem] grid-cols-1 lg:grid-cols-[15rem_minmax(0,1fr)] xl:grid-cols-[15rem_minmax(0,1fr)_13rem]">
                <aside className="border-b border-ink/10 px-5 py-5 lg:sticky lg:top-0 lg:max-h-screen lg:overflow-y-auto lg:border-b-0 lg:border-r lg:px-6 lg:py-8">
                    <nav aria-label="Rulebook chapters" className="flex gap-8 overflow-x-auto lg:block">
                        {chapters.map((chapter) => (
                            <section key={chapter.title} className="shrink-0 lg:mb-8">
                                <h2 className="mb-2 text-xs font-bold uppercase tracking-wider text-ink/60">
                                    {chapter.title}
                                </h2>
                                <ul className="flex gap-4 text-sm lg:block lg:space-y-1">
                                    {chapter.links.map((link) => (
                                        <li key={link.href}>
                                            <Link
                                                href={link.href}
                                                className="block rounded-md py-1 text-ink/80 hover:text-sky-dark lg:px-3 lg:py-2"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        ))}
                    </nav>
                </aside>

                <div className="min-w-0 px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
                    {children}
                </div>

                <aside className="hidden xl:block">
                    <nav aria-label="On this page" className="sticky top-8 px-6 py-12">
                        <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-ink/60">
                            On this page
                        </h2>
                        <ul className="space-y-2 border-l border-ink/15 pl-4 text-sm text-ink/70">
                            {pageSections.map((section) => (
                                <li key={section.href}>
                                    <Link href={section.href} className="hover:text-sky-dark">
                                        {section.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>

            </div>
        </div>
    );
}