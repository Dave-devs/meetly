'use client'

import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "../constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function MobileNav() {
    const pathname = usePathname();

    return (
        <section className="w-full max-w-[264px]">
            <Sheet>
                <SheetTrigger asChild>
                    <Image
                        src="/./menu.png"
                        alt="Hamburger icon"
                        width={36}
                        height={36}
                        className="invert cursor-pointer sm:hidden"
                    />
                </SheetTrigger>
                <SheetContent side={"left"} className="border-none bg-dark1">
                    <Link href="/" className="flex items-center gap-1">
                        <Image
                            src={"/./logo.png"}
                            alt="Meetly Logo"
                            width={32}
                            height={32}
                            className="max-sm:size-10"
                        />
                        <p className="text-[26px] font-extrabold text-white">
                            Meetly
                        </p>
                    </Link>
                    {/* Other Links */}
                    <div className="flex flex-col justify-between h-[calc(100vh-72px)] overflow-y-auto">
                        <SheetClose asChild>
                            <section className="flex flex-col h-full gap-6 pt-16 text-white">
                                {
                                    sidebarLinks.map((link) => {
                                        const isActive = pathname === link.route;
                                        return (
                                            <SheetClose key={link.route} asChild>
                                                <Link href={link.route} key={link.label} className={cn('flex items-center gap-4 p-4 rounded-lg w-full max-w-60', {
                                                    'bg-primary': isActive
                                                })}>
                                                    <Image src={link.icon} alt={link.label} width={24} height={24} className="invert" />
                                                    <p className='font-semibold'>{link.label}</p>
                                                </Link>
                                            </SheetClose>
                                        )
                                    })
                                }
                            </section>
                        </SheetClose>
                    </div>
                </SheetContent>
            </Sheet>
        </section>
    );
}
