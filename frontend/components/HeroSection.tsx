"use client"

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguageAndData } from "@/hooks/useLanguageAndData";
import { sharedImages } from "@/data/candidateData";

export default function HeroSection() {
  const { language, t, data } = useLanguageAndData()
  return (
    <section className="relative min-h-[75vh] md:min-h-[85vh] flex items-center bg-linear-to-br from-stone-50 via-white to-teal-50/30 overflow-hidden py-8 md:py-10">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-15%] left-[-10%] w-[45%] h-[45%] bg-teal-200/25 rounded-full blur-3xl" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[45%] h-[45%] bg-red-200/15 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-2 md:px-4 relative z-10">
        <div className="flex flex-col-reverse sm:flex-row gap-10 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="flex-1 space-y-6">
            <div className="relative -mb-2 w-full h-fit max-w-[190px] sm:max-w-[230px] ">
              <Image
                src={sharedImages.bnpPoster}
                alt="BNP Campaign Poster"
                width={230}
                height={230}
                className="object-contain w-full h-auto"
                priority
              />
            </div>

            <div className="flex items-center gap-3 mb-0">
              <h1 className={`${language === "en" ? "text-xl md:text-2xl lg:text-2xl xl:text-3xl" : "text-4xl md:text-2xl lg:text-3xl xl:text-4xl"} font-serif font-bold leading-tight tracking-tight text-stone-900`}>
                {data.firstName} {data.lastName}
                <span className="text-red-600">.</span>
              </h1>
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 shrink-0">
                <Image
                  src={sharedImages.electoralSymbol}
                  alt="Electoral Symbol"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            {data.heroSlogan && (
              <p className="text-sm sm:text-base text-teal-600/90 font-medium leading-relaxed">
                {data.heroSlogan}
              </p>
            )}

            <p className="text-lg md:text-xl md:mb-12 text-stone-600 max-w-2xl leading-relaxed">
              {data.bio.shortSegments?.length
                ? data.bio.shortSegments.map((segment: any, index: number) => (
                    <span
                      key={`bio-segment-${index}`}
                      className={segment.className || undefined}
                    >
                      {segment.text}
                    </span>
                  ))
                : data.bio.short}
            </p>

            <div className="flex flex-col md:flex-row gap-4 w-full">
              <Button
                asChild
                size="lg"
                className="bg-linear-to-r from-teal-800 to-teal-900 hover:from-sky-900 hover:to-sky-950 text-white h-14 px-8 text-lg rounded-full shadow-xl shadow-sky-900/20 hover:shadow-green-sky/30 transition-all transform hover:scale-105 w-full sm:flex-1"
              >
                <Link
                  href="/#volunteer"
                  className="flex items-center justify-center"
                >
                  {t.hero.joinButton}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-green-800/30 text-sky-900 hover:bg-sky-50 hover:border-teal-800/50 h-14 px-8 text-lg bg-white/50 backdrop-blur-sm rounded-full font-semibold w-full sm:flex-1"
              >
                <Link
                  href="/manifesto"
                  className="flex items-center justify-center"
                >
                  {t.hero.manifestoButton}
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 w-full">
            <div className="relative w-full max-w-md mx-auto select-none">
              <div className="absolute -top-8 -right-10 w-28 h-28 bg-teal-800/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-red-600/10 rounded-full blur-2xl" />
              {sharedImages?.fatherImage && (
                <div className="absolute top-0 right-0 sm:-right-8 md:-top-5 md:-right-12 z-20">
                  <div className="relative w-20 h-20 sm:w-22 sm:h-22 md:w-25 md:h-25 overflow-hidden rounded-2xl">
                  
                  </div>
                </div>
              )}

              <div className="relative z-10 flex items-center justify-center">
                <Image
                  src={sharedImages.hero}
                  alt={data.firstName}
                  width={520}
                  height={780}
                  className="object-contain w-full h-auto drop-shadow-2xl"
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 520px"
                />
              </div>
            </div>

            <div className="mt-8 flex w-full items-center justify-center">
              <div className="flex items-center w-fit gap-3 bg-white/95 backdrop-blur-sm px-4 sm:px-10 py-3 rounded-full shadow-lg border border-teal-200 sm:w-auto max-w-md">
                <div className="w-2 h-2 rounded-full bg-teal-600 animate-pulse shrink-0" />
                <span className="text-sm sm:text-base font-semibold text-sky-900 uppercase tracking-wider text-center">
                  {data.partySlogan}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
