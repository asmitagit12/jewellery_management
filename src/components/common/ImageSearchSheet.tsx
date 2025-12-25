"use client"

import { useState } from "react"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet"
import { Camera } from "lucide-react"
import Image from "next/image"

export default function ImageSearchSheet() {
    const [previewImg, setPreviewImg] = useState<string | null>(null)

    const handleImageUpload = (event: any) => {
        const file = event.target.files[0]
        if (!file) return
        if (file.size > 2 * 1024 * 1024) {
            alert("File size should not exceed 2MB")
            return
        }

        const imageUrl = URL.createObjectURL(file)
        setPreviewImg(imageUrl)
    }

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Camera
                    size={22}
                    className="cursor-pointer text-gray-700 hover:text-black"
                />
            </SheetTrigger>

            <SheetContent side="right" className="w-[90%] sm:w-[400px] p-4">
                <SheetHeader>
                    <SheetTitle className="text-center font-serif text-lg">
                        Search With A Pic
                    </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col items-center text-center">
                    {previewImg ? (
                        <img
                            src={previewImg}
                            alt="Uploaded"
                            className="w-[260px] h-[260px] rounded-lg object-cover"
                        />
                    ) : (
                        <Image
                            src="/images/search-image.jpg"
                            alt="Upload Demo"
                            width={260}
                            height={260}
                            className="rounded-lg object-cover"
                        />
                    )}

                    <h2 className="mt-4 text-[18px] font-semibold font-serif">
                        Find Same or Similar Jewellery
                    </h2>
                    <p className="text-sm text-gray-500 mb-6">
                        Upload a picture & discover matching designs
                    </p>

                    <label className="w-full cursor-pointer">
                        <input
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={handleImageUpload}
                        />
                        <div className="flex items-center justify-center gap-2 border border-primary rounded-full py-3 hover:bg-primary hover:text-white transition">
                            📷 Upload Picture
                        </div>
                    </label>

                    <p className="mt-3 text-xs text-gray-500">
                        File size limit: 2MB max
                    </p>
                </div>
            </SheetContent>
        </Sheet>
    )
}
