"use client"

import type { ComponentType } from "react"
import { useLanguageAndData } from "@/hooks/useLanguageAndData"
import {
  CheckCircle2,
  BookOpen,
  HeartPulse,
  Users,
  Leaf,
  Route,
  BriefcaseBusiness,
  Scale,
} from "lucide-react"

const sectionIconMap: Record<string, ComponentType<any>> = {
  education: BookOpen,
  health: HeartPulse,
  women: Users,
  agriculture: Leaf,
  infrastructure: Route,
  employment: BriefcaseBusiness,
  justice: Scale,
}

export default function ManifestoPage() {
  const { data, language } = useLanguageAndData()
  const manifesto = data.manifesto

  return (
    <>
      {/* Hero */}
      <section className="py-12 sm:py-16 md:py-24 bg-linear-to-br from-sky-900/80 via-teal-800/70 to-sky-900/80 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-10 -left-10 w-64 h-64 md:w-96 md:h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-16 -right-16 w-72 h-72 md:w-[26rem] md:h-[26rem] bg-white/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl space-y-4 sm:space-y-6">
            <p
              className={`text-sm font-semibold uppercase ${
                language === "en" ? "tracking-[0.3em]" : "tracking-[0.2em]"
              } text-teal-100`}
            >
              {manifesto.constituency}
            </p>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
              {manifesto.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-teal-50/90 max-w-2xl">
              {manifesto.tagline}
            </p>
            <p className="text-xs sm:text-sm md:text-base text-teal-100/90 max-w-3xl">
              {manifesto.description}
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-10 sm:py-12 md:py-16 bg-stone-50 border-b border-stone-200/70 bg-gradient-to-r from-stone-200 to-stone-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="bg-white rounded-3xl shadow-sm border border-stone-200/80 p-5 sm:p-7 md:p-10">
            <h2 className="text-xl sm:text-3xl font-serif font-bold text-stone-900 mb-3 sm:mb-4">
              {manifesto.vision.title}
            </h2>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-lg text-stone-700">
              {manifesto.vision.points.map((point: string, idx: number) => (
                <li key={idx} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-teal-700 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-stone-200 to-stone-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl space-y-8 sm:space-y-10">
          {manifesto.sections.map(
            (
              section: {
                id: string;
                title: string;
                items: string[];
              },
              idx: number
            ) => {
              const Icon = sectionIconMap[section.id] ?? CheckCircle2;

              return (
                <div
                  key={section.id}
                  className="bg-white rounded-3xl shadow-lg border border-stone-200/80 p-6 sm:p-8 md:p-10 space-y-6 sm:space-y-7 transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105"
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-teal-600 to-teal-500 text-white">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-serif font-semibold text-teal-800 hover:text-teal-600 transition-colors">
                        {section.title}
                      </h3>
                      
                    </div>
                  </div>
                  <ul className="mt-4 sm:mt-5 space-y-3 sm:space-y-4 text-sm sm:text-lg text-teal-700">
                    {section.items.map((item: string, itemIdx: number) => (
                      <li key={itemIdx} className="flex gap-3 items-start">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-600 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }
          )}
        </div>
      </section>


      {/* Commitment */}
      <section className="pb-16 sm:pb-20 bg-stone-50 bg-gradient-to-r from-stone-200 to-stone-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="rounded-3xl bg-linear-to-r from-sky-900 to-emerald-800 text-white p-5 sm:p-8 md:p-10 shadow-xl">
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
              <div className="mt-1 flex h-10 w-10 aspect-square items-center justify-center rounded-full bg-white/10 border border-white/20 shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold">
                  {language === "en" ? "Our Commitment" : "আমাদের প্রতিশ্রুতি"}
                </h2>
                <p className="text-base sm:text-lg text-teal-50/95 leading-relaxed">
                  {manifesto.commitment}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

