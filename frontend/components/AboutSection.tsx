"use client";

import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { useLanguageAndData } from "@/hooks/useLanguageAndData";
import { Button } from "@/components/ui/button";
import { sharedImages } from "@/data/candidateData";

export default function AboutSection() {
  const { t, data, language } = useLanguageAndData();

  // Take only the first sentence of the biography for the homepage snippet
  const bioFirstSentence =
    language === "en"
      ? typeof data.bio.biography?.body === "string"
        ? data.bio.biography.body.split(".")[0] + "."
        : ""
      : typeof data.bio.biography?.body === "string"
      ? data.bio.biography.body.split("।")[0] + "।"
      : "";

  return (
    <section id="about" className="py-20 sm:py-24 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left: Compact intro + bio + CTA */}
          <div className="lg:col-span-7 order-2 lg:order-1 space-y-8">
            {/* Section heading */}
            <div className="space-y-3">
              <p
                className={`text-sm font-semibold uppercase ${
                  language === "en" ? "tracking-[0.3em]" : ""
                } text-teal-700`}
              >
                {t.about.title}
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-sky-900 leading-tight">
                {data.bio.aboutTitle.split(", ").map((part, idx) => (
                  <span key={idx} className="block">
                    {part}
                  </span>
                ))}
              </h2>
            </div>

            {/* Two-paragraph overview */}
            <div className="space-y-4 text-base sm:text-lg text-stone-600 leading-relaxed">
              <p>{data.bio.introduction.body}</p>
              <p>{bioFirstSentence}</p>
            </div>

            {/* CTA row: skills summary + Read more button */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 pt-4 border-t border-stone-200">
              {/* A few key skills inline for quick scan */}
              <div className="flex-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {data.skills.left.slice(0, 2).map((skill: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-3 text-stone-700">
                      <span className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 shrink-0">
                        <Check className="w-3 h-3" />
                      </span>
                      <span className="font-medium text-sm sm:text-base">
                        {skill}
                      </span>
                    </div>
                  ))}
                  
                </div>
              </div>

              {/* Read more button */}
              <div className="sm:w-auto">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto rounded-full px-7 h-12 bg-teal-800 hover:bg-sky-900 text-white"
                >
                  <Link href="/about">
                    {language === "en" ? "Read full biography" : "সম্পূর্ণ জীবনী পড়ুন"}
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Right: Portrait & experience badge */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-3/4 relative">
                <Image
                  src={sharedImages.about}
                  alt={data.firstName}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
