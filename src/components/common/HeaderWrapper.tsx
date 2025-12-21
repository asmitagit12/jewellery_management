"use client"

import { useEffect, useRef, useState } from "react"
import Header from "./Header"
import MainNav from "./MainNav"

export default function HeaderWrapper() {
    const [hideNav, setHideNav] = useState(false)
    const lastScrollY = useRef(0)

    useEffect(() => {
        const handleScroll = () => {
            const current = window.scrollY

            if (current > lastScrollY.current && current > 80) {
                setHideNav(true) // scrolling down
            } else {
                setHideNav(false) // scrolling up
            }

            lastScrollY.current = current
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-white">
            <Header />
            <MainNav hide={hideNav} />
        </div>
    )
}
