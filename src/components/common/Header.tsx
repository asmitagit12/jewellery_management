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
import { navItems } from "./MainNav"
import ImageSearchSheet from "./ImageSearchSheet"
import { useState } from "react"
import VoiceSearch from "./VoiceSearch"
import { useRouter } from "next/navigation";


export default function Header() {
    const [searchValue, setSearchValue] = useState("")
    const router = useRouter();

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
                                {navItems?.map(({ label, href, icon: Icon, subItems }) => (
                                    <div key={label}>
                                        {!subItems ? (
                                            <Link
                                                href={href}
                                                className="flex items-center justify-between px-4 py-4 hover:bg-[#3b0a0a]/10"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <Icon size={18} />
                                                    {label}
                                                </div>
                                                <span>›</span>
                                            </Link>
                                        ) : (
                                            <Sheet>
                                                <SheetHeader>
                                                    <VisuallyHidden>
                                                        <SheetTitle>Category Menu</SheetTitle>
                                                    </VisuallyHidden>
                                                </SheetHeader>
                                                <SheetTrigger asChild>
                                                    <button className="w-full flex items-center justify-between px-4 py-4 hover:bg-[#3b0a0a]/10">
                                                        <div className="flex items-center gap-3">
                                                            <Icon size={18} />
                                                            {label}
                                                        </div>
                                                        <span>›</span>
                                                    </button>
                                                </SheetTrigger>

                                                <SheetContent side="left" className="w-[85%] p-0 overflow-y-auto">
                                                    <div className="border-b px-4 py-4 text-lg font-semibold">
                                                        {label}
                                                    </div>

                                                    {Object.entries(subItems)?.map(([section, data]) => (
                                                        <div key={section} className="px-4 py-4">
                                                            <h4 className="text-sm font-bold mb-3">{section}</h4>

                                                            <div className="grid grid-cols-2 gap-2">
                                                                {data?.items?.map((item: any) => (
                                                                    <Link
                                                                        key={item.label}
                                                                        href={item.href}
                                                                        className="flex items-center gap-3 rounded-lg border p-3 hover:bg-[#f7f4f4]"
                                                                    >
                                                                        <img
                                                                            src={item.image}
                                                                            alt={item.label}
                                                                            className="h-10 w-10 rounded object-cover"
                                                                        />
                                                                        <span className="text-sm">{item.label}</span>
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </SheetContent>

                                            </Sheet>
                                        )}
                                    </div>
                                ))}

                            </nav>
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
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-4">
                        <ImageSearchSheet />
                        <VoiceSearch onResult={(text) => setSearchValue(text)} />
                    </div>
                </div>

                <div className="flex items-center gap-5">
                    <Heart className="cursor-pointer" onClick={() => router.push("/login")} />
                    <ShoppingBag className="cursor-pointer" onClick={() => router.push("/login")} />
                    <User
                        className="cursor-pointer"
                        onClick={() => router.push("/login")}
                    />
                </div>
            </div>
        </header>
    )
}
