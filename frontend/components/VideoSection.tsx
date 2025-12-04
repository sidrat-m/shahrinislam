'use client'

import {useLanguageAndData} from "@/hooks/useLanguageAndData"

export default function VideoSection() {
  const { t, data } = useLanguageAndData();
  const candidateData = data;
  
  return (
    <section id="media" className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-sky-900">{t.video.title.replace('{{name}}', candidateData.firstName)}</h2>
            <p className="text-stone-500 text-lg max-w-2xl mx-auto">
              {t.video.description}
            </p>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-stone-200 bg-stone-900">
            <iframe
              width="100%"
              height="100%"
              src={`${candidateData.video.url}?modestbranding=1&rel=0`}
              title={`${candidateData.firstName} ${candidateData.lastName} Intro Video`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

