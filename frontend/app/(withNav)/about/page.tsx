"use client"

import { useLanguageAndData } from "@/hooks/useLanguageAndData"
import Image from "next/image"
import { Check } from "lucide-react"
import { sharedImages } from "@/data/candidateData"

export default function AboutPage() {
  const { data, t, language } = useLanguageAndData()

  return (
    <>
      {/* Hero / header */}
      <section className="py-16 md:py-24 bg-linear-to-br from-sky-900/80 via-teal-800/70 to-sky-900/80 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-10 -left-10 w-64 h-64 md:w-96 md:h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-16 -right-16 w-72 h-72 md:w-[26rem] md:h-[26rem] bg-white/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <p
                className={`text-sm font-semibold uppercase ${
                  language === "en" ? "tracking-[0.3em]" : ""
                } text-teal-100`}
              >
                {t.about.title}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
                {data.firstName} {data.lastName}
              </h1>
              <p className="text-lg md:text-xl text-green-50/90 max-w-2xl">
                {data.bio.introduction.body}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {[...data.skills.left, ...data.skills.right].slice(0, 3).map((skill: string, idx: number) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs sm:text-sm"
                  >
                    <Check className="w-3 h-3" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative max-w-sm mx-auto">
                <div className="absolute -top-6 -left-4 w-24 h-24 bg-teal-600/40 rounded-full blur-2xl" />
                <div className="absolute -bottom-8 -right-6 w-32 h-32 bg-emerald-500/40 rounded-full blur-2xl" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                  <div className="aspect-[3/4] relative">
                    <Image
                      src={sharedImages.about}
                      alt={data.firstName}
                      fill
                      sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 360px"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 md:py-20 bg-stone-50">
        <div className="container mx-auto px-4 max-w-5xl space-y-12">
          {/* Biography */}
          <div className="bg-white rounded-3xl shadow-sm border border-stone-200/70 p-6 sm:p-8 md:p-10 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              {data.bio.biography.title}
            </h2>
            <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
              {data.bio.biography.body}
            </p>
          </div>

          {/* Family legacy */}
          <div className="rounded-3xl bg-linear-to-br from-teal-50 to-emerald-50 border border-green-100 p-6 sm:p-8 md:p-10 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-sky-900">
              {data.bio.familyLegacy.title}
            </h2>
            <ul className="space-y-3 text-base sm:text-lg text-stone-800">
              {data.bio.familyLegacy.items?.map((item: string, idx: number) => (
                <li key={idx} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-teal-700 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-base sm:text-lg text-stone-800 leading-relaxed border-t border-teal-200 pt-4 mt-2">
              {data.bio.familyLegacy.summary}
            </p>
          </div>

          {/* Experience & skills */}
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1 bg-stone-900 text-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-stone-300">
                  {language === "en" ? "Experience" : "অভিজ্ঞতা"}
                </p>
                <p className="mt-4 text-4xl sm:text-5xl font-serif font-bold">
                  {data.experience.years}
                </p>
                <p className="mt-2 text-sm sm:text-base text-stone-200">
                  {data.experience.label}
                </p>
              </div>
              <p className="mt-6 text-xs sm:text-sm text-stone-300">
                {language === "en"
                  ? "Decades of family leadership combined with modern, community-focused action."
                  : "দীর্ঘ পারিবারিক নেতৃত্বের অভিজ্ঞতা এবং আধুনিক, জনগণ-কেন্দ্রিক কর্মযজ্ঞের সমন্বয়।"}
              </p>
            </div>

            <div className="md:col-span-2 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/70">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 mb-4">
                {language === "en" ? "Core strengths & priorities" : "মূল শক্তি ও অগ্রাধিকার"}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <ul className="space-y-3">
                  {data.skills.left.map((skill: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-3 text-stone-700">
                      <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-teal-700 shrink-0">
                        <Check className="w-3 h-3" />
                      </span>
                      <span className="font-medium text-sm sm:text-base">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-3">
                  {data.skills.right.map((skill: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-3 text-stone-700">
                      <span className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 shrink-0">
                        <Check className="w-3 h-3" />
                      </span>
                      <span className="font-medium text-sm sm:text-base">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


