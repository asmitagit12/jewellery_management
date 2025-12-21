"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Camera,
    Heart,
    Menu,
    Mic,
    Search,
    ShoppingBag,
    User, Gem,
    Crown,
    Diamond,
    Sparkles,
    Circle,
    Sun,
    Layers,
    HeartHandshake,
    Gift,
} from "lucide-react"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import MainNav from "./MainNav"

export const navItems = [
    {
        label: "All Jewellery",
        href: "/products",
        icon: Gem,
    },
    {
        label: "Gold",
        href: "/products?cat=gold",
        icon: Crown,
    },
    {
        label: "Diamond",
        href: "/products?cat=diamond",
        icon: Diamond,
    },
    {
        label: "Earrings",
        href: "/products?cat=earrings",
        icon: Sparkles,
    },
    {
        label: "Rings",
        href: "/products?cat=rings",
        icon: Circle,
    },
    {
        label: "Daily Wear",
        href: "/products?cat=daily-wear",
        icon: Sun,
    },
    {
        label: "Collections",
        href: "/products?cat=collections",
        icon: Layers,
    },
    {
        label: "Wedding",
        href: "/products?cat=wedding",
        icon: HeartHandshake,
    },
    {
        label: "Gifting",
        href: "/products?cat=gifting",
        icon: Gift,
    },
]

export default function Header() {
    return (
        <header className="w-full bg-white shadow-sm">
            <div className="container mx-auto flex items-center justify-between px-4 py-4">
                <div className="lg:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size="icon" variant="ghost" aria-label="Open menu">
                                <Menu />
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="left" className="w-[85%] p-0">
                            <SheetHeader>
                                <VisuallyHidden>
                                    <SheetTitle>Mobile Navigation</SheetTitle>
                                </VisuallyHidden>
                            </SheetHeader>

                            <div className="flex items-center justify-between border-b px-4 py-4">
                                <span className="text-xl font-serif">SwarNika</span>
                            </div>

                            <nav className="flex flex-col divide-y">
                                {navItems.map(({ label, href, icon: Icon }) => (
                                    <Link
                                        key={label}
                                        href={href}
                                        className="
        group relative flex items-center justify-between
        px-4 py-4 text-sm font-medium
        transition-all duration-300
        hover:bg-[#3b0a0a]/10
        hover:text-[#3b0a0a]
      "
                                    >
                                        <div className="flex items-center gap-3">
                                            <Icon
                                                size={18}
                                                className="text-muted-foreground transition-colors duration-300 group-hover:text-[#3b0a0a]"
                                            />
                                            <span
                                                className="
            relative
            after:absolute after:left-0 after:-bottom-1
            after:h-[2px] after:w-0
            after:bg-[#3b0a0a]
            after:transition-all after:duration-300
            group-hover:after:w-full
          "
                                            >
                                                {label}
                                            </span>
                                        </div>

                                        <span className="text-lg text-muted-foreground transition-colors duration-300 group-hover:text-[#3b0a0a]">
                                            ›
                                        </span>
                                    </Link>
                                ))}
                            </nav>



                            <div className="flex gap-3 p-4">
                                <Button className="w-full" variant="secondary">
                                    INR (₹)
                                </Button>
                                <Button className="w-full" variant="outline">
                                    USD ($)
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

                <Link
                    href="/"
                    className="text-3xl font-serif tracking-wide text-primary"
                >
                    SwarNika
                </Link>

                <div className="relative hidden w-full max-w-xl lg:block">
                    <Search
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                    />
                    <Input
                        placeholder="Search for gold necklace"
                        className="h-12 rounded-full pl-12 pr-20"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-4">
                        <Camera size={18} className="cursor-pointer" />
                        <Mic size={18} className="cursor-pointer" />
                    </div>
                </div>

                <div className="flex items-center gap-5">
                    <Heart className="cursor-pointer" />
                    <ShoppingBag className="cursor-pointer" />
                    <User className="cursor-pointer" />
                </div>
            </div>
        </header>
    )
}
