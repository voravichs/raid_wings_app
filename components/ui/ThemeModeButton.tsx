"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeModeButton() {
    const [themeReady, setThemeReady] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    useEffect(() => {
        if (!resolvedTheme) return;

        document.documentElement.dataset.themeReady = "true";
        setThemeReady(true);
    }, [resolvedTheme]);

    if (!themeReady) return null;

    const isDarkMode = resolvedTheme === "dark";

    return (
        <button
            type="button"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={isDarkMode}
            onClick={() => setTheme(isDarkMode ? "light" : "dark")}
            className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-ink text-paper shadow-lg transition-colors hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-dark"
        >
            {isDarkMode
                ? <FiSun className="size-6" aria-hidden="true" />
                : <FiMoon className="size-6" aria-hidden="true" />}
        </button>
    );
}
