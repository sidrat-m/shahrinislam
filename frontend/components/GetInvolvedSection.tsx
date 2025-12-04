"use client"

import { Button } from "@/components/ui/button"
import { useLanguageAndData } from "@/hooks/useLanguageAndData";
import { Users, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function GetInvolvedSection() {
  const {t,data} = useLanguageAndData();
  const candidateData = data;

  return (
    <section id="contact" className="py-24 bg-white">
      <div id="volunteer" className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl font-serif font-bold text-sky-900">{t.getInvolved.title}</h2>
          <p className="text-stone-600 text-lg">
            {t.getInvolved.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto ">
          <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300 group ">
            <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mb-6 text-teal-800 group-hover:scale-110 transition-transform">
              <Users className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold font-serif text-stone-900 mb-3">{t.getInvolved.volunteer.title}</h3>
            <p className="text-stone-600 mb-8 grow leading-relaxed">
              {t.getInvolved.volunteer.description}
            </p>
            <Button
              asChild
              size="lg"
              className="w-full bg-teal-800 hover:bg-sky-900 text-white h-12 rounded-full"
            >
              <Link href="/form/volunteer">{t.getInvolved.volunteer.button}</Link>
            </Button>
          </div>

          <div
            id="contactmb"
            className="bg-stone-50 rounded-2xl p-8 border border-stone-200 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300 group"
          >
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 text-red-800 group-hover:scale-110 transition-transform">
              <MessageSquare className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold font-serif text-stone-900 mb-3">{t.getInvolved.contact.title.replace('{{name}}', candidateData.firstName)}</h3>
            <p className="text-stone-600 mb-8 grow leading-relaxed">
              {t.getInvolved.contact.description.replace('{{name}}', candidateData.firstName)}
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full border-stone-300 hover:bg-white h-12 rounded-full text-stone-700 bg-transparent"
            >
              <Link href="/form/contact">{t.getInvolved.contact.button}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

