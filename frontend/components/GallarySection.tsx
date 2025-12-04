"use client"

import { Button } from "@/components/ui/button"
import { useLanguageAndData } from "@/hooks/useLanguageAndData";
import { ArrowRight, Images } from "lucide-react"
import Link from "next/link"
import Image from "next/image"  // Import the Image component for optimized images

export default function GallerySection() {
  const { t, data } = useLanguageAndData();
  const candidateData = data;
  return (
    <div className="mt-12 pt-8 sm:mt-16 sm:pt-12 lg:mt-10 lg:pt-16 bg-gradient-to-b from-white-900 to-stone-200/80 ">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
        <div className="flex items-start sm:items-center gap-3 sm:gap-4 w-full lg:w-auto">
          <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 bg-stone-100 rounded-xl flex items-center justify-center shrink-0">
            <Images className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-sky-900" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl text-teal-900 sm:text-2xl lg:text-3xl font-serif font-bold mb-1 sm:mb-2">{candidateData.gallerysec.heading}</h3>
            <p className="text-sm sm:text-base text-teal-900">
              {candidateData.gallerysec.text}
            </p>
          </div>
        </div>
        <Button
          asChild
          className="bg-white text-teal-900 hover:bg-stone-50 h-14 sm:h-16 px-8 sm:px-10 text-lg sm:text-xl rounded-full font-semibold w-full sm:w-auto shadow-md transition-transform"
        >
          <Link href="/gallery" className="flex items-center justify-center">
            {candidateData.gallerysec.view}
            <ArrowRight className="ml-3 w-5 h-5 sm:w-6 sm:h-6" />
          </Link>
        </Button>
      </div>

      {/* Displaying Gallery Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 pb-15">
        {candidateData.gallery.images.slice(0, 4).map((image) => (
          <div key={image.id} className="relative w-full h-64 sm:h-72 lg:h-96 rounded-xl overflow-hidden shadow-lg">
            <Image 
              src={image.src} 
              alt={image.alt} 
              layout="fill" 
              objectFit="cover" 
              className="rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
