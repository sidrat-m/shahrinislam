"use client"

import { useState, useEffect } from "react"
import { Images, X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useLanguageAndData } from "@/hooks/useLanguageAndData"

export default function GalleryPage() {
  const { t, data } = useLanguageAndData()
  const galleryImages = data.gallery.images
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  // Map the selected category key (all, events, rallies, etc.)
  // to the actual category label used in the image data,
  // using the current language translations.
  const getCategoryLabelForKey = (key: string) =>
    (t.gallery.categories as Record<string, string>)[key]

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter(
          (img) => img.category === getCategoryLabelForKey(selectedCategory)
        )

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "unset"
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return

    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage)
    let newIndex: number

    if (direction === "next") {
      newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1
    } else {
      newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1
    }

    setSelectedImage(filteredImages[newIndex].id)
  }

  // Handle keyboard navigation
  useEffect(() => {
    if (selectedImage === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox()
      } else if (e.key === "ArrowLeft") {
        const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage)
        const newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1
        setSelectedImage(filteredImages[newIndex].id)
      } else if (e.key === "ArrowRight") {
        const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage)
        const newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1
        setSelectedImage(filteredImages[newIndex].id)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImage, filteredImages])

  const selectedImageData = selectedImage
    ? filteredImages.find((img) => img.id === selectedImage)
    : null

  return (
    <>
      {/* Gallery Header */}
        <section className="py-12 md:py-20 bg-linear-to-br from-sky-900/80 via-teal-800/70 to-sky-900/80 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-48 md:w-96 h-48 md:h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-white rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 rounded-full bg-white/10 backdrop-blur-sm mb-4 md:mb-6 border border-white/20">
                <Images className="w-5 md:w-6 h-5 md:h-6" />
                <span className="text-base md:text-lg font-semibold">{t.gallery.title}</span>
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold mb-3 md:mb-4">
                {t.gallery.subtitle}
              </h1>
              <p className="text-sm md:text-base lg:text-lg text-teal-100/80 max-w-2xl mx-auto px-2">
                {t.gallery.description}
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-6 md:py-8 bg-white border-b border-stone-200 sticky top-20 z-40 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
              {Object.entries(t.gallery.categories).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => {
                    setSelectedCategory(key)
                    setIsLoading(true)
                    setTimeout(() => setIsLoading(false), 300)
                  }}
                  className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                    selectedCategory === key
                      ? "bg-teal-800 text-white shadow-lg shadow-sky-900/20 scale-105"
                      : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                  }`}
                >
                  {label}
                  {selectedCategory === key && (
                    <span className="ml-1 md:ml-2 text-xs">({filteredImages.length})</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12 md:py-16 bg-stone-50 min-h-screen">
          <div className="container mx-auto px-4">
            {isLoading ? (
              <div className="flex items-center justify-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-800"></div>
              </div>
            ) : filteredImages.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-stone-500 text-base md:text-lg">{t.gallery.noImages}</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
                {filteredImages.map((image, index) => (
                  <div
                    key={image.id}
                    onClick={() => openLightbox(image.id)}
                    className="group relative aspect-square rounded-lg md:rounded-xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02]"
                    style={{
                      animationDelay: `${index * 50}ms`,
                    }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="inline-block text-xs font-semibold text-white uppercase tracking-wider bg-teal-800/90 px-2 md:px-3 py-1 md:py-1.5 rounded-full backdrop-blur-sm">
                          {image.category}
                        </span>
                        <p className="text-white text-xs md:text-sm mt-1 md:mt-2 font-medium line-clamp-2">{image.alt}</p>
                      </div>
                    </div>
                    <div className="absolute top-2 md:top-4 right-2 md:right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-1.5 md:p-2 shadow-lg">
                        <Images className="w-3 md:w-4 h-3 md:h-4 text-teal-800" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Image Count */}
            <div className="text-center mt-8 md:mt-12">
              <p className="text-sm md:text-base text-stone-600">
                {t.gallery.showing}{" "}
                <span className="font-semibold text-teal-800">
                  {filteredImages.length}
                </span>{" "}
                {filteredImages.length === 1 ? "image" : "images"}
                {selectedCategory !== "all" &&
                  ` in ${getCategoryLabelForKey(selectedCategory)}`}
              </p>
            </div>
          </div>
        </section>

      {/* Lightbox Modal */}
      {selectedImageData && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-3 md:p-4 animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-3 md:top-4 right-3 md:right-4 z-50 text-white hover:text-teal-400 transition-colors bg-black/50 rounded-full p-2 backdrop-blur-sm"
            aria-label="Close"
          >
            <X className="w-5 md:w-6 h-5 md:h-6" />
          </button>

          <div
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImageData.src}
              alt={selectedImageData.alt}
              width={1200}
              height={800}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              priority
            />

            {/* Navigation Buttons */}
            {filteredImages.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    navigateImage("prev")
                  }}
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 md:p-3 backdrop-blur-sm transition-all z-50"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 md:w-6 h-5 md:h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    navigateImage("next")
                  }}
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 md:p-3 backdrop-blur-sm transition-all z-50"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 md:w-6 h-5 md:h-6" />
                </button>
              </>
            )}

            {/* Image Info */}
            <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm rounded-full px-3 md:px-6 py-2 md:py-3 text-white text-xs md:text-sm">
              <span className="font-semibold">{selectedImageData.alt}</span>
              <span className="mx-1 md:mx-2">•</span>
              <span className="text-teal-400">{selectedImageData.category}</span>
              <span className="mx-1 md:mx-2">•</span>
              <span>
                {filteredImages.findIndex((img) => img.id === selectedImage) + 1} / {filteredImages.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
