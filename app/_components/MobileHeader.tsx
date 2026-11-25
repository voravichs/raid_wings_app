"use client";

import Link from "next/dist/client/link";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { FiMenu, FiMail, FiX } from "react-icons/fi";
import { FaBluesky } from "react-icons/fa6";

const navItems = [
  { label: "Lore", href: "/lore" },
  { label: "Rulebook", href: "/rulebook" },
  { label: "VTT", href: "/vtt" },
  { label: "Download", href: "/download" },
];

type MobileHeaderProps = {
    isSuperWide: boolean;
};

export default function MobileHeader({ isSuperWide }: MobileHeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const reduceMotion = useReducedMotion();

    return (
        <AnimatePresence initial={false}>
            {!isSuperWide && (
                <motion.header
                    key="mobile-header"
                    className="block overflow-hidden"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.25, ease: "easeInOut" }}
                >
                    <div className="grid grid-cols-5 sm:grid-cols-12 bg-sky-light">
                        {/* Logo */}
                        <div className="col-span-4 sm:col-span-8 lg:col-span-2 bg-sky">
                            <Link href="/">
                                <Image 
                                    src="/logos/raidwingslogo_white.svg"
                                    loading="eager" 
                                    alt="Logo" 
                                    width={160} 
                                    height={58.133331}
                                    className="h-24 w-auto mx-auto my-2"
                                />
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="col-span-1 flex sm:hidden bg-sky">
                            <button
                                type="button"
                                className="my-auto mx-auto text-white"
                                aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                                aria-expanded={isMenuOpen}
                                aria-controls="mobile-navigation"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <AnimatePresence initial={false} mode="wait">
                                    <motion.span
                                        key={isMenuOpen ? "close" : "menu"}
                                        className="flex size-10 items-center justify-center"
                                        initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                        exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                                        transition={{ duration: 0.16, ease: "easeInOut" }}
                                    >
                                        {isMenuOpen
                                            ? <FiX className="size-10" aria-hidden="true" />
                                            : <FiMenu className="size-10" aria-hidden="true" />}
                                    </motion.span>
                                </AnimatePresence>
                            </button>
                        </div>
                        
                        {/* Social Media Icons */}
                        <div className="hidden sm:block sm:col-span-4 bg-sky">
                            <div className="flex h-full justify-center gap-8">
                                <div className="col-span-1 flex">
                                    <FiMail className="cursor-pointer my-auto mx-auto size-10 text-white" />
                                </div>
                                <div className="col-span-1 flex cursor-pointer">
                                    <FaBluesky className="my-auto mx-auto size-10 text-white" />
                                </div>
                            </div>
                        </div>

                        {/* Mobile Navigation */}
                        <div id="mobile-navigation" className="col-span-5 sm:hidden">
                            <AnimatePresence initial={false}>
                                {isMenuOpen && (
                                    <motion.div
                                        key="mobile-menu"
                                        className="grid grid-cols-5 overflow-hidden"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2, ease: "easeOut" }}
                                    >
                                        <nav aria-label="Primary navigation" className="col-span-4 font-serif">
                                            <div className="flex flex-col px-8 py-4 gap-4">
                                                {navItems.map(({ label, href }) => (
                                                    <Link
                                                        key={href}
                                                        href={href}
                                                        className="text-3xl text-white transition-transform duration-200 ease-out hover:translate-x-2 hover:text-blue-200 focus-visible:translate-x-2"
                                                    >
                                                        {label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </nav>

                                        {/* Mobile Social Media */}
                                        <div className="col-span-1 flex flex-col">
                                            <button
                                                type="button"
                                                aria-label="Email Raid Wings"
                                                className="flex h-1/2 cursor-pointer items-center justify-center rounded-xl border-3 border-sky-light bg-sky-dark transition-colors duration-150 hover:bg-sky focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white"
                                            >
                                                <FiMail className="size-10 text-white" aria-hidden="true" />
                                            </button>
                                            <button
                                                type="button"
                                                aria-label="Raid Wings on Bluesky"
                                                className="flex h-1/2 cursor-pointer items-center justify-center rounded-xl border-3 border-sky-light bg-sky-dark transition-colors duration-150 hover:bg-sky focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white"
                                            >
                                                <FaBluesky className="size-10 text-white" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.header>
            )}
        </AnimatePresence>
    )
}