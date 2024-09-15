"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

type Props= {
    label: string,
    iconSrc: string,
    href: string,
}


export const SidebarItem = ({
    label,
    iconSrc,
    href
}: Props)=>{

    const pathname = usePathname();
    const active = pathname === href;


    return (
        <Button size="lg" variant={active ? "sidebarOutline" : "sidebar"} className="justify-start h-[52px]" asChild>
            <Link href={href}>
            <Image src={iconSrc} height={32}
            width={32} alt="icon" className="mr-5"/>
            {label}
            </Link>
        </Button>
    )
}