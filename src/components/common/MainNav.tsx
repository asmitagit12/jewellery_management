"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuContent,
} from "@/components/ui/navigation-menu"

import { Separator } from "@/components/ui/separator"

import {
    Gem,
    Crown,
    Diamond,
    Sparkles,
    Circle,
    Sun,
    Layers,
    HeartHandshake,
    Gift,
} from "lucide-react"

export const navItems = [
    {
        label: "All Jewellery",
        href: "/shop/jewellery",
        icon: Gem,
        subItems: {
            'Category': {
                isGridView: false,
                items: [
                    { label: "All Jewellery", href: "/shop/jewellery", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw576bc3f9/header-mega-menu/thumbnail-icons/all-jewellery-l3.png" },
                    { label: "Earrings", href: "/shop/jewellery?cat=earrings", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dwe68efad0/header-mega-menu/thumbnail-icons/earrings.png" },
                    { label: "Pendants", href: "/shop/jewellery?cat=pendants", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dwc79b9417/header-mega-menu/thumbnail-icons/pendants.png" },
                    { label: "Finger Rings", href: "/shop/jewellery?cat=finger-rings", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dwbcf9062f/header-mega-menu/thumbnail-icons/finger-rings.png" },
                    { label: "Mangalsutra", href: "/shop/jewellery?cat=mangalsutra", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw98f79ed1/header-mega-menu/thumbnail-icons/mangalsutra.png" },
                    { label: "Chains", href: "/shop/jewellery?cat=chains", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw7856550b/header-mega-menu/thumbnail-icons/chains.png" },
                    { label: "Necklaces", href: "/shop/jewellery?cat=necklaces", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw3a28df88/header-mega-menu/thumbnail-icons/necklaces.png" },
                    { label: "Nose Pin", href: "/shop/jewellery?cat=nose-pin", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dwde146ca9/header-mega-menu/thumbnail-icons/nosepin.png" },
                    { label: "Necklace Set", href: "/shop/jewellery?cat=necklace-set", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw3bfde98b/header-mega-menu/thumbnail-icons/necklace-set.png" },
                    { label: "Bangles", href: "/shop/jewellery?cat=bangles", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dwb27d2fef/header-mega-menu/thumbnail-icons/bangles.png" },
                    { label: "Bracelets", href: "/shop/jewellery?cat=bracelets", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw93502493/header-mega-menu/thumbnail-icons/bracelets.png" },
                    { label: "Pendant & Earring Set", href: "/shop/jewellery?cat=sets", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw4d4e462e/header-mega-menu/thumbnail-icons/pendant-earring-set.png" },
                ]
            },
            'Price': {
                isGridView: true,
                items: [
                    { label: "< 25K", href: "/shop/jewellery?price=below-25k", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw20b368e1/header-mega-menu/banner-images/all-jew-below-25k-hr.jpg" },
                    { label: "25K - 50K", href: "/shop/jewellery?price=25k-50k", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw2b3de72f/header-mega-menu/banner-images/all-jew-25k-50k-hr.jpg" },
                    { label: "50K - 1L", href: "/shop/jewellery?price=50k-1l", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw78ff9455/header-mega-menu/banner-images/all-jew-50k-1l-hr.jpg" },
                    { label: "1L & Above", href: "/shop/jewellery?price=1l-above", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dwcae5cbad/header-mega-menu/banner-images/all-jew-1l-above-hr.jpg" },
                ]
            },
            'Occasion': {
                isGridView: true,
                items: [
                    { label: "Daily Wear", href: "/shop/jewellery?occasion=daily-wear", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dwebf3e1cb/header-mega-menu/banner-images/office-wear.jpg" },
                    { label: "Office Wear", href: "/shop/jewellery?occasion=office-wear", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw14bd6553/header-mega-menu/banner-images/modern-wear.jpg" },
                    { label: "Festive", href: "/shop/jewellery?occasion=festive", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw3f2a4d2c/header-mega-menu/banner-images/casual-wear.jpg" },
                    { label: "Wedding", href: "/shop/jewellery?occasion=wedding", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw9a08e4ad/header-mega-menu/banner-images/traditional-wear.jpg" },
                ]
            },
            'Gender': {
                isGridView: true,
                items: [
                    { label: "Women", href: "/shop/jewellery?occasion=daily-wear", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw7887f04d/header-mega-menu/banner-images/her-hr.jpg" },
                    { label: "Men", href: "/shop/jewellery?occasion=office-wear", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw6d01d63e/header-mega-menu/banner-images/him.jpg" },
                    { label: "Kids & Teens", href: "/shop/jewellery?occasion=festive", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw6b05e529/header-mega-menu/banner-images/kids.jpg" },
                ]
            },
        },
    },
    {
        label: "Gold", href: "/products?cat=gold", icon: Crown,
        subItems: {
            'Category': {
                isGridView: false,
                items: [
                    { label: "All Gold", href: "/shop/jewellery", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dwbca73ce8/header-mega-menu/thumbnail-icons/all-gold.jpg" },
                    { label: "Gold Bangles", href: "/shop/jewellery?cat=bangles", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dwa6e81649/header-mega-menu/thumbnail-icons/gold-bangles.jpg" },
                    { label: "Gold Bracelets", href: "/shop/jewellery?cat=bracelets", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dwdd264c92/header-mega-menu/thumbnail-icons/gold-bracelet.jpg" },
                    { label: "Gold Earrings", href: "/shop/jewellery?cat=earrings", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw79ad5235/header-mega-menu/thumbnail-icons/gold-earrings.jpg" },
                    { label: "Gold Chains", href: "/shop/jewellery?cat=chains", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw71936e8b/header-mega-menu/thumbnail-icons/gold-chains.jpg" },
                    { label: "Gold Pendants", href: "/shop/jewellery?cat=pendants", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dwc79b9417/header-mega-menu/thumbnail-icons/pendants.png" },
                    { label: "Gold Rings", href: "/shop/jewellery?cat=finger-rings", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw8705b104/header-mega-menu/thumbnail-icons/gold-rings.jpg" },
                    { label: "Gold Engagement Rings", href: "/shop/jewellery?cat=mangalsutra", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw1b0d5acd/header-mega-menu/thumbnail-icons/gold-engagement-rings.jpg" },
                    { label: "Gold Necklaces", href: "/shop/jewellery?cat=necklaces", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw16398b60/header-mega-menu/thumbnail-icons/gold-necklaces.jpg" },
                    { label: "Gold Nose Pin", href: "/shop/jewellery?cat=nose-pin", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw6fa81390/header-mega-menu/thumbnail-icons/gold-nosepins.jpg" },
                    { label: "Gold Kadas", href: "/shop/jewellery?cat=necklace-set", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw3bfde98b/header-mega-menu/thumbnail-icons/necklace-set.png" },
                    { label: "Gold Mangalsutras", href: "/shop/jewellery?cat=sets", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw37e9c9c9/header-mega-menu/thumbnail-icons/gold-mangalsutra.jpg" },
                ]
            },
            'Price': {
                isGridView: true,
                items: [
                    { label: "< 25K", href: "/shop/jewellery?price=below-25k", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw0e9896f2/header-mega-menu/banner-images/gold-below-25k-hr.jpg" },
                    { label: "25K - 50K", href: "/shop/jewellery?price=25k-50k", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw572383b6/header-mega-menu/banner-images/gold-25k-50k-hr.jpg" },
                    { label: "50K - 1L", href: "/shop/jewellery?price=50k-1l", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dwaad13880/header-mega-menu/banner-images/gold-50k-1l-hr.jpg" },
                    { label: "1L & Above", href: "/shop/jewellery?price=1l-above", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dwa4220fbc/header-mega-menu/banner-images/gold-1l-above-hr.jpg" },
                ]
            },
            'Occasion': {
                isGridView: true,
                items: [
                    { label: "Daily Wear", href: "/shop/jewellery?occasion=daily-wear", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dwebf3e1cb/header-mega-menu/banner-images/office-wear.jpg" },
                    { label: "Office Wear", href: "/shop/jewellery?occasion=office-wear", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw14bd6553/header-mega-menu/banner-images/modern-wear.jpg" },
                    { label: "Festive", href: "/shop/jewellery?occasion=festive", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw3f2a4d2c/header-mega-menu/banner-images/casual-wear.jpg" },
                    { label: "Wedding", href: "/shop/jewellery?occasion=wedding", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw9a08e4ad/header-mega-menu/banner-images/traditional-wear.jpg" },
                ]
            },
            'Gender': {
                isGridView: true,
                items: [
                    { label: "Women", href: "/shop/jewellery?occasion=daily-wear", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw7887f04d/header-mega-menu/banner-images/her-hr.jpg" },
                    { label: "Men", href: "/shop/jewellery?occasion=office-wear", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw6d01d63e/header-mega-menu/banner-images/him.jpg" },
                    { label: "Kids & Teens", href: "/shop/jewellery?occasion=festive", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw6b05e529/header-mega-menu/banner-images/kids.jpg" },
                ]
            },
            'Gold Coin': {
                isGridView: false,
                items: [
                    { label: "Special Coins", href: "/shop/jewellery?occasion=daily-wear", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw2aa4f94f/header-mega-menu/thumbnail-icons/special-coins.jpg" },
                    { label: "1 Gram", href: "/shop/jewellery?occasion=office-wear", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw361fbdc6/header-mega-menu/thumbnail-icons/1-gram.jpg" },
                    { label: "2 Gram", href: "/shop/jewellery?occasion=festive", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dwe975a49b/header-mega-menu/thumbnail-icons/2-gram.jpg" },
                ]
            },
        },
    },
    {
        label: "Diamond", href: "/products?cat=diamond", icon: Diamond,
        subItems: {
            'Category': {
                isGridView: false,
                items: [
                    { label: "All Diamond", href: "/shop/jewellery", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw6a433dbb/header-mega-menu/thumbnail-icons/all-diamonds.jpg" },
                    { label: "Diamond Bangles", href: "/shop/jewellery?cat=bangles", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw0bd84d91/header-mega-menu/thumbnail-icons/diamond-bangles.jpg" },
                    { label: "Diamond Bracelets", href: "/shop/jewellery?cat=bracelets", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw35a1200b/header-mega-menu/thumbnail-icons/diamond-bracelets.jpg" },
                    { label: "Diamond Earrings", href: "/shop/jewellery?cat=earrings", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw1a8566c0/header-mega-menu/thumbnail-icons/diamond-earrings.jpg" },
                    { label: "Diamond Rings", href: "/shop/jewellery?cat=finger-rings", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dwa5ca77ba/header-mega-menu/thumbnail-icons/diamond-engagement-rings-rings.jpg" },
                    { label: "Diamond Mangalsutras", href: "/shop/jewellery?cat=sets", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw88211aeb/header-mega-menu/thumbnail-icons/diamond-mangalsutra.jpg" },
                    { label: "Diamond Necklace Set", href: "/shop/jewellery?cat=necklaces", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dwaf0c4385/header-mega-menu/thumbnail-icons/diamond-necklace-set.jpg" },
                    { label: "Diamond Necklaces", href: "/shop/jewellery?cat=necklaces", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dwf0b36a02/header-mega-menu/thumbnail-icons/diamond-necklaces.jpg" },
                    { label: "Diamond Nose Pins", href: "/shop/jewellery?cat=necklaces", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dwf4665314/header-mega-menu/thumbnail-icons/diamond-nosepins.jpg" },
                    { label: "Diamond Pendants", href: "/shop/jewellery?cat=pendants", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw8c5227e9/header-mega-menu/thumbnail-icons/diamond-pendant.jpg" },
                ]
            },
            'Price': {
                isGridView: true,
                items: [
                    { label: "< 25K", href: "/shop/jewellery?price=below-25k", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw2d61daa1/header-mega-menu/banner-images/diamond-below-25k-hr.jpg" },
                    { label: "25K - 50K", href: "/shop/jewellery?price=25k-50k", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dwee0b0867/header-mega-menu/banner-images/diamond-25k-50k-hr.jpg" },
                    { label: "50K - 1L", href: "/shop/jewellery?price=50k-1l", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw6494b58d/header-mega-menu/banner-images/diamond-50k-1l-hr.jpg" },
                    { label: "1L & Above", href: "/shop/jewellery?price=1l-above", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw2ca55223/header-mega-menu/banner-images/diamond-1l-hr.jpg" },
                ]
            },
            'Occasion': {
                isGridView: true,
                items: [
                    { label: "Daily Wear", href: "/shop/jewellery?occasion=daily-wear", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dwebf3e1cb/header-mega-menu/banner-images/office-wear.jpg" },
                    { label: "Office Wear", href: "/shop/jewellery?occasion=office-wear", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw14bd6553/header-mega-menu/banner-images/modern-wear.jpg" },
                    { label: "Festive", href: "/shop/jewellery?occasion=festive", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw3f2a4d2c/header-mega-menu/banner-images/casual-wear.jpg" },
                    { label: "Wedding", href: "/shop/jewellery?occasion=wedding", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw9a08e4ad/header-mega-menu/banner-images/traditional-wear.jpg" },
                ]
            },
            'Gender': {
                isGridView: true,
                items: [
                    { label: "Women", href: "/shop/jewellery?occasion=daily-wear", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw7887f04d/header-mega-menu/banner-images/her-hr.jpg" },
                    { label: "Men", href: "/shop/jewellery?occasion=office-wear", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw6d01d63e/header-mega-menu/banner-images/him.jpg" },
                    { label: "Kids & Teens", href: "/shop/jewellery?occasion=festive", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw6b05e529/header-mega-menu/banner-images/kids.jpg" },
                ]
            },
        },
    },
    {
        label: "Earrings", href: "/products?cat=earrings", icon: Sparkles,
        subItems: {
            'Category': {
                isGridView: false,
                items: [
                    { label: "All Earrings", href: "/shop/jewellery", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw7773c9b5/All%20Earrings%2040.png" },
                    { label: "Drop & Danglers", href: "/shop/jewellery?cat=bangles", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw5f2c52fa/Drop%20&%20Danglers%2040.png" },
                    { label: "Hoop & Huggies", href: "/shop/jewellery?cat=bracelets", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw3b5ca4b4/Group%2010(1).png" },
                    { label: "Jhumkas", href: "/shop/jewellery?cat=earrings", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dwd9f6109b/Jhumkas.png" },
                    { label: "Studs & Tops", href: "/shop/jewellery?cat=finger-rings", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dwd0add32c/Studs%20&%20Tops.png" },
                ]
            },
            'Price': {
                isGridView: true,
                items: [
                    { label: "< 25K", href: "/shop/jewellery?price=below-25k", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw2672b3bd/header-mega-menu/banner-images/earrings-below-25k-hr.jpg" },
                    { label: "25K - 50K", href: "/shop/jewellery?price=25k-50k", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw4a4d7081/header-mega-menu/banner-images/earrings-25k-50k-hr.jpg" },
                    { label: "50K - 1L", href: "/shop/jewellery?price=50k-1l", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw29f03fab/header-mega-menu/banner-images/earrings-50k-1l-hr.jpg" },
                    { label: "1L & Above", href: "/shop/jewellery?price=1l-above", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw078d9d74/header-mega-menu/banner-images/earrings-1l-above-hr.jpg" },
                ]
            },
            'Occasion': {
                isGridView: true,
                items: [
                    { label: "Daily Wear", href: "/shop/jewellery?occasion=daily-wear", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dwebf3e1cb/header-mega-menu/banner-images/office-wear.jpg" },
                    { label: "Office Wear", href: "/shop/jewellery?occasion=office-wear", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw14bd6553/header-mega-menu/banner-images/modern-wear.jpg" },
                    { label: "Festive", href: "/shop/jewellery?occasion=festive", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw3f2a4d2c/header-mega-menu/banner-images/casual-wear.jpg" },
                    { label: "Wedding", href: "/shop/jewellery?occasion=wedding", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw9a08e4ad/header-mega-menu/banner-images/traditional-wear.jpg" },
                ]
            },
            'Gender': {
                isGridView: true,
                items: [
                    { label: "Women", href: "/shop/jewellery?occasion=daily-wear", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw7887f04d/header-mega-menu/banner-images/her-hr.jpg" },
                    { label: "Kids & Teens", href: "/shop/jewellery?occasion=festive", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw6b05e529/header-mega-menu/banner-images/kids.jpg" },
                ]
            },
        },
    },
    {
        label: "Rings", href: "/products?cat=rings", icon: Circle,
        subItems: {
            'Category': {
                isGridView: false,
                items: [
                    { label: "All Rings", href: "/shop/jewellery", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dwbcf9062f/header-mega-menu/thumbnail-icons/finger-rings.png" },
                    { label: "Casual Rings", href: "/shop/jewellery?cat=bangles", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw915113c6/header-mega-menu/thumbnail-icons/casual-rings.jpg" },
                    { label: "Couple Rings", href: "/shop/jewellery?cat=bracelets", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw50481f66/header-mega-menu/thumbnail-icons/couple-rings.jpg" },
                    { label: "Diamond Engagement Rings", href: "/shop/jewellery?cat=earrings", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dwa5ca77ba/header-mega-menu/thumbnail-icons/diamond-engagement-rings-rings.jpg" },
                    { label: "Engagement Rings", href: "/shop/jewellery?cat=finger-rings", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw04230587/header-mega-menu/thumbnail-icons/engagement-rings.jpg" },
                    { label: "Gold Engagement Rings", href: "/shop/jewellery?cat=finger-rings", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw884caa9e/header-mega-menu/thumbnail-icons/gold-engagement-rings-rings.jpg" },
                    { label: "Men's Rings", href: "/shop/jewellery?cat=finger-rings", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dwa2767cdf/header-mega-menu/thumbnail-icons/mens-rings.jpg" },
                    { label: "Platinum Engagement Rings", href: "/shop/jewellery?cat=finger-rings", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw5deb4582/header-mega-menu/thumbnail-icons/platinum-engagement-rings.jpg" },
                ]
            },
            'Price': {
                isGridView: true,
                items: [
                    { label: "< 25K", href: "/shop/jewellery?price=below-25k", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dwec212c3f/header-mega-menu/banner-images/rings-below-25k-hr.jpg" },
                    { label: "25K - 50K", href: "/shop/jewellery?price=25k-50k", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw011fa916/header-mega-menu/banner-images/rings-25k-50k-hr.jpg" },
                    { label: "50K - 1L", href: "/shop/jewellery?price=50k-1l", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw29b6f569/header-mega-menu/banner-images/rings-50k-1l-hr.jpg" },
                    { label: "1L & Above", href: "/shop/jewellery?price=1l-above", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw982479af/header-mega-menu/banner-images/rings-1l-above-hr.jpg" },
                ]
            },
            'Occasion': {
                isGridView: true,
                items: [
                    { label: "Daily Wear", href: "/shop/jewellery?occasion=daily-wear", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dwebf3e1cb/header-mega-menu/banner-images/office-wear.jpg" },
                    { label: "Office Wear", href: "/shop/jewellery?occasion=office-wear", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw14bd6553/header-mega-menu/banner-images/modern-wear.jpg" },
                    { label: "Festive", href: "/shop/jewellery?occasion=festive", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw3f2a4d2c/header-mega-menu/banner-images/casual-wear.jpg" },
                    { label: "Wedding", href: "/shop/jewellery?occasion=wedding", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw9a08e4ad/header-mega-menu/banner-images/traditional-wear.jpg" },
                ]
            },
            'Gender': {
                isGridView: true,
                items: [
                    { label: "Women", href: "/shop/jewellery?occasion=daily-wear", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw7887f04d/header-mega-menu/banner-images/her-hr.jpg" },
                    { label: "Men", href: "/shop/jewellery?occasion=office-wear", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw6d01d63e/header-mega-menu/banner-images/him.jpg" },
                    { label: "Kids & Teens", href: "/shop/jewellery?occasion=festive", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw6b05e529/header-mega-menu/banner-images/kids.jpg" },
                ]
            },
            'Metal & Stones': {
                isGridView: false,
                items: [
                    { label: "Diamond", href: "/shop/jewellery?occasion=daily-wear", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw9210c614/diamond%20resized.png" },
                    { label: "Gemstone", href: "/shop/jewellery?occasion=office-wear", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dwcfeb4ccd/gemstone%20resized.png" },
                    { label: "Gold", href: "/shop/jewellery?occasion=festive", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dwf38b3449/Group%2010.png" },
                    { label: "Rose Gold", href: "/shop/jewellery?occasion=festive", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw9ecea101/Group%208.png" },
                    { label: "Solitaire", href: "/shop/jewellery?occasion=festive", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dwc45fe833/header-mega-menu/thumbnail-icons/diamond-l1.svg" },
                    { label: "White Gold", href: "/shop/jewellery?occasion=festive", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dwb1fa4f17/Group%207.png" },
                ]
            },
        },
    },
    {
        label: "Daily Wear", href: "/products?cat=daily-wear", icon: Sun,
        subItems: {
            'Category': {
                isGridView: false,
                items: [
                    { label: "Dailywear Jewellery", href: "/shop/jewellery", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw502b458e/header-mega-menu/thumbnail-icons/dailywear-jewellery.png" },
                    { label: "Dailywear Chains", href: "/shop/jewellery?cat=bangles", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw2bbaa2a4/header-mega-menu/thumbnail-icons/dailywear-chains.png" },
                    { label: "Dailywear Earrings", href: "/shop/jewellery?cat=bracelets", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dwd3e2ca9c/header-mega-menu/thumbnail-icons/dailywear-earrings.png" },
                    { label: "Dailywear Rings", href: "/shop/jewellery?cat=earrings", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw19088b10/header-mega-menu/thumbnail-icons/dailywear-rings.png" },
                    { label: "Dailywear Mangalsutra", href: "/shop/jewellery?cat=finger-rings", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dwadbfe072/header-mega-menu/thumbnail-icons/dailywear-mangalsutra.png" },
                    { label: "Dailywear Pendents", href: "/shop/jewellery?cat=finger-rings", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw072e79a4/header-mega-menu/thumbnail-icons/dailywear-pendant.png" },
                ]
            },
            'Price': {
                isGridView: true,
                items: [
                    { label: "< 25K", href: "/shop/jewellery?price=below-25k", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw517b7808/header-mega-menu/banner-images/dailywear-below-25k.jpg" },
                    { label: "25K - 50K", href: "/shop/jewellery?price=25k-50k", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dwf1bda67f/header-mega-menu/banner-images/dailywear-25k-50k.jpg" },
                    { label: "50K - 1L", href: "/shop/jewellery?price=50k-1l", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw3f763f8c/header-mega-menu/banner-images/dailywear-50k-1l.jpg" },
                    { label: "1L & Above", href: "/shop/jewellery?price=1l-above", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw237484f5/header-mega-menu/banner-images/dailywear-1l-above.jpg" },
                ]
            },
            'Style': {
                isGridView: true,
                items: [
                    { label: "Office Wear", href: "/shop/jewellery?occasion=office-wear", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dwebf3e1cb/header-mega-menu/banner-images/office-wear.jpg" },
                    { label: "Modern Wear", href: "/shop/jewellery?occasion=daily-wear", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw14bd6553/header-mega-menu/banner-images/modern-wear.jpg" },
                    { label: "Casual Wear", href: "/shop/jewellery?occasion=festive", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw3f2a4d2c/header-mega-menu/banner-images/casual-wear.jpg" },
                    { label: "Traditional Wear", href: "/shop/jewellery?occasion=wedding", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw9a08e4ad/header-mega-menu/banner-images/traditional-wear.jpg" },
                ]
            },
        }
    },
    {
        label: "Collections", href: "/products?cat=collections", icon: Layers,
        subItems: {
            'View All': {
                isGridView: true,
                items: [
                    { label: "Elan", href: "/shop/jewellery", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw7de43417/header-mega-menu/banner-images/elan.jpg" },
                    { label: "Unbound", href: "/shop/jewellery?cat=bangles", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw55dc8470/header-mega-menu/banner-images/unbound-hr.jpg" },
                    { label: "Joy Of Dressings", href: "/shop/jewellery?cat=bracelets", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw405dd5f2/header-mega-menu/banner-images/joy-of-dressing-hr.jpg" },
                    { label: "Nav-raani", href: "/shop/jewellery?cat=earrings", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw7f90d661/header-mega-menu/banner-images/navraani-hr.jpg" },
                    { label: "Kundan Stories", href: "/shop/jewellery?cat=earrings", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw80f143e6/header-mega-menu/banner-images/kundan-stories.jpg" },
                ]
            },
        }
    },
    {
        label: "Wedding", href: "/products?cat=wedding", icon: HeartHandshake,
        subItems: {
            'Category': {
                isGridView: true,
                items: [
                    { label: "All Rivaah", href: "/shop/jewellery", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw45e8131a/header-mega-menu/banner-images/rivaah-jewellery.jpg" },
                    { label: "Wedding Choker", href: "/shop/jewellery?cat=bangles", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dwdedd5903/header-mega-menu/banner-images/rivaah-necklace-set.jpg" },
                    { label: "Wedding Haram", href: "/shop/jewellery?cat=bracelets", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dwbde278b2/header-mega-menu/banner-images/rivaah-haram.jpg" },
                    { label: "Wedding Bangles", href: "/shop/jewellery?cat=earrings", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw5758c9e8/header-mega-menu/banner-images/rivaah-bangles.jpg" },
                    { label: "Wedding Diamond", href: "/shop/jewellery?cat=finger-rings", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw0b2a76d2/header-mega-menu/banner-images/rivaah-diamond-jewellery.jpg" },
                    { label: "Wedding Mangalsutra", href: "/shop/jewellery?cat=finger-rings", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw47dfd9ec/header-mega-menu/banner-images/rivaah-mangalsutra.jpg" },
                    { label: "Accessories", href: "/shop/jewellery?cat=finger-rings", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw473ac013/header-mega-menu/banner-images/rivaah-accessories.jpg" },
                ]
            },
            'Community': {
                isGridView: true,
                items: [
                    { label: "Marathi Bride", href: "/shop/jewellery?price=below-25k", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw03f12062/header-mega-menu/banner-images/marathi-bride.jpg" },
                    { label: "Bengali Bride", href: "/shop/jewellery?price=below-25k", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw8ba69200/header-mega-menu/banner-images/bengali-bride.jpg" },
                    { label: "Kannada Bride", href: "/shop/jewellery?price=below-25k", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw6bd447b6/header-mega-menu/banner-images/kannada-bride.jpg" },
                ]
            },
            'Metal': {
                isGridView: true,
                items: [
                    { label: "Plain Gold", href: "/shop/jewellery?occasion=office-wear", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw23cf2af9/header-mega-menu/banner-images/rivaah-plain-gold.jpg" },
                    { label: "Plain Jewellery With Stones", href: "/shop/jewellery?occasion=daily-wear", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw6852e7b6/header-mega-menu/banner-images/rivaah-pjws.jpg" },
                    { label: "Glass Kundan", href: "/shop/jewellery?occasion=festive", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw4b83ae63/header-mega-menu/banner-images/rivaah-glass-kundan.jpg" },
                    { label: "Jewellery With Gemstones", href: "/shop/jewellery?occasion=wedding", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw0860697d/header-mega-menu/banner-images/rivaah-jwgs.jpg" },
                    { label: "Polki", href: "/shop/jewellery?occasion=wedding", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw548f101b/header-mega-menu/banner-images/rivaah-polki.jpg" },
                ]
            },
        }
    },
    {
        label: "Gifting", href: "/products?cat=gifting", icon: Gift,
        subItems: {
            'Gifts For': {
                isGridView: true,
                items: [
                    { label: "Her", href: "/shop/jewellery", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw7887f04d/header-mega-menu/banner-images/her-hr.jpg" },
                    { label: "Him", href: "/shop/jewellery?cat=bangles", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw6d01d63e/header-mega-menu/banner-images/him.jpg" },
                    { label: "Kids", href: "/shop/jewellery?cat=bracelets", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw6b05e529/header-mega-menu/banner-images/kids.jpg" },
                ]
            },
            'Price': {
                isGridView: true,
                items: [
                    { label: "< 25K", href: "/shop/jewellery?price=below-25k", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dwa4bfbb39/header-mega-menu/banner-images/gifting-below-25k.jpg" },
                    { label: "25K - 50K", href: "/shop/jewellery?price=25k-50k", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw10219b1e/header-mega-menu/banner-images/gifting-25k-50k.jpg" },
                    { label: "50K - 1L", href: "/shop/jewellery?price=50k-1l", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw627ec5ec/header-mega-menu/banner-images/gifting-50k-1l.jpg" },
                    { label: "1L & Above", href: "/shop/jewellery?price=1l-above", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dwc03d049a/header-mega-menu/banner-images/gifting-1l-above.jpg" },
                ]
            },
            'Occasion': {
                isGridView: true,
                items: [
                    { label: "Wedding", href: "/shop/jewellery?price=below-25k", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw2f28be90/header-mega-menu/banner-images/gifting-wedding.jpg" },
                    { label: "Birthday", href: "/shop/jewellery?price=below-25k", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dwc1d5ab36/header-mega-menu/banner-images/gifting-birthday.jpg" },
                    { label: "Anniversary", href: "/shop/jewellery?price=below-25k", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw710dc820/header-mega-menu/banner-images/gifting-anniversary.jpg" },
                    { label: "Auspicious", href: "/shop/jewellery?price=below-25k", image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw290497c4/header-mega-menu/banner-images/gifting-auspicious.jpg" },
                ]
            },

        }
    },
]

type MainNavProps = {
    hide: boolean
}

type SubItemsMap = NonNullable<(typeof navItems)[number]["subItems"]>
type SubItemKey = keyof SubItemsMap

export default function MainNav({ hide }: MainNavProps) {
    const [activeFilter, setActiveFilter] = useState<SubItemKey>(
        Object.keys(navItems[0].subItems ?? {})[0] as SubItemKey
    );


    return (
        <div
            className={`hidden font-serif lg:block border-b bg-white transition-all duration-300 ease-in-out
    ${hide ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"}
    `}
        >

            <NavigationMenu className="mx-auto max-w-7xl px-4">
                <NavigationMenuList className="flex justify-between">
                    {navItems.map((item) => (
                        <NavigationMenuItem key={item.label}>
                            {item.subItems ? (
                                <>
                                    <NavigationMenuTrigger onMouseEnter={() => {
                                        const firstKey = Object.keys(item.subItems)[0] as SubItemKey;
                                        setActiveFilter(firstKey);
                                    }} className="flex gap-2 text-gray-600 hover:text-[#3b0a0a]">
                                        <item.icon size={18} />
                                        {item.label}
                                    </NavigationMenuTrigger>

                                    <NavigationMenuContent>
                                        <div className="flex w-[900px] p-8 gap-8">
                                            <div className="w-1/4">
                                                {Object.keys(item?.subItems)?.map((filter) => (
                                                    <button
                                                        key={filter}
                                                        onMouseEnter={() =>
                                                            setActiveFilter(filter as keyof typeof item.subItems)
                                                        }
                                                        className={`w-full text-left px-4 py-2 text-md rounded-md mb-4 transition
                              ${activeFilter === filter
                                                                ? "bg-[#3b0a0a] text-white"
                                                                : "text-gray-600 hover:bg-gray-100"
                                                            }`}
                                                    >
                                                        {filter}
                                                    </button>
                                                ))}
                                            </div>

                                            <Separator orientation="vertical" />
                                            <div className="w-3/4">
                                                {item?.subItems[activeFilter]?.isGridView ? (
                                                    <div className="grid grid-cols-4 gap-6">
                                                        {item?.subItems[activeFilter]?.items?.map((sub: any) => (
                                                            <Link
                                                                key={sub.label}
                                                                href={sub.href}
                                                                className="group text-center"
                                                            >
                                                                <div className="relative h-32 w-full rounded-xl overflow-hidden bg-gray-100">
                                                                    <Image
                                                                        src={sub.image}
                                                                        alt={sub.label}
                                                                        fill
                                                                        className="object-cover group-hover:scale-105 transition"
                                                                    />
                                                                </div>
                                                                <p className="mt-2 text-sm font-medium text-gray-700 group-hover:text-[#3b0a0a]">
                                                                    {sub.label}
                                                                </p>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <div className="relative">
                                                        <div className="grid grid-flow-col grid-rows-4 auto-cols-fr gap-x-6">
                                                            {item?.subItems[activeFilter]?.items?.map((sub) => (
                                                                <Link
                                                                    key={sub.label}
                                                                    href={sub.href}
                                                                    className="flex items-center gap-3 p-2 text-sm text-gray-600 hover:text-[#3b0a0a] hover:bg-gray-50 rounded-md"
                                                                >
                                                                    {sub.image && (
                                                                        <div className="w-10 h-10 relative rounded-full overflow-hidden">
                                                                            <Image
                                                                                src={sub.image}
                                                                                alt={sub.label}
                                                                                fill
                                                                                className="object-cover"
                                                                            />
                                                                        </div>
                                                                    )}
                                                                    {sub.label}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                        {activeFilter && item.subItems[activeFilter]?.items?.length ? (
                                                            Array.from({ length: Math.ceil(item.subItems[activeFilter]!.items!.length / 4) - 1 }).map((_, i) => (
                                                                <Separator
                                                                    key={i}
                                                                    orientation="vertical"
                                                                    className="absolute top-0 bottom-0"
                                                                    style={{
                                                                        left: `${(i + 1) * (100 / Math.ceil(item.subItems[activeFilter]!.items!.length / 4))}%`,
                                                                    }}
                                                                />
                                                            ))
                                                        ) : null}



                                                    </div>
                                                )}
                                            </div>



                                        </div>
                                    </NavigationMenuContent>
                                </>
                            ) : (
                                <Link
                                    href={item.href}
                                    className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-[#3b0a0a]"
                                >
                                    <item.icon size={18} />
                                    {item.label}
                                </Link>
                            )}
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}
