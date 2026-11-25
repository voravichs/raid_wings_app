"use client";

import Link from "next/dist/client/link";
import Image from "next/image";
import { FiMail } from "react-icons/fi";
import { FaBluesky } from "react-icons/fa6";

export default function Header() {
    return (
        <header>
            <div className="grid grid-cols-12">
                {/* Logo */}
                <div className="col-span-8 sm:col-span-6 2xl:col-span-3 px-8 py-4">
                    <Link href="/">
                        <Image 
                            src="/logos/raidwingslogo_blue.svg"
                            loading="eager" 
                            alt="Logo" 
                            width={160} 
                            height={58.133331}
                            className="h-24 sm:h-36 w-auto mx-auto"
                        />
                    </Link>
                </div>
                {/* Spacer */}
                <div className="hidden sm:block sm:col-span-2 2xl:col-span-5"></div>
                {/* Navigation */}
                <div className="col-span-4 sm:col-span-4 ">
                    <div className="flex h-full justify-center sm:justify-end gap-8 sm:gap-16 sm:px-16">
                        <button className="col-span-1 flex">
                            <FiMail className="cursor-pointer my-auto mx-auto size-8 sm:size-10 text-sky" />
                        </button>
                        <button className="col-span-1 flex cursor-pointer">
                            <FaBluesky className="my-auto mx-auto size-8 sm:size-10 text-sky" />
                        </button>
                    </div>
                </div> 
            </div>
        </header>
    )
}