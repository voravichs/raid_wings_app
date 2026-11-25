// "use client";

// import { useEffect, useState } from "react";
import DesktopHeader from "@/app/_components/Header";
import HomePage from "@/app/_components/Home";

export default function HomeShell() {
    // const [isWide, setIsWide] = useState(false);
    // const [isSuperWide, setIsSuperWide] = useState(false);
    // const [isMediaReady, setIsMediaReady] = useState(false);

    // useEffect(() => {
    //     const wideQuery = window.matchMedia("(min-width: 40rem)");
    //     const superWideQuery = window.matchMedia("(min-width: 64rem)");
    //     const update = () => {
    //         setIsWide(wideQuery.matches);
    //         setIsSuperWide(superWideQuery.matches);
    //         setIsMediaReady(true);
    //     };

    //     update();
    //     wideQuery.addEventListener("change", update);
    //     superWideQuery.addEventListener("change", update);
    //     return () => {
    //         wideQuery.removeEventListener("change", update);
    //         superWideQuery.removeEventListener("change", update);
    //     };
    // }, []);

    return (
        <div className="flex min-h-screen flex-col">
            <DesktopHeader />
            <HomePage/>
        </div>
    );
}
