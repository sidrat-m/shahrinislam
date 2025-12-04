"use client"

import { Calendar, MapPin, Clock } from "lucide-react"
import { useLanguageAndData } from "@/hooks/useLanguageAndData"
import { sharedCalendar } from "@/data/candidateData"

export default function CalendarSection() {
  const { t, data } = useLanguageAndData()
  return (
    <section id="calendar" className="py-24 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-sky-900 text-sm font-semibold mb-4">
              <Calendar className="w-4 h-4" />
              {t.calendar.title}
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-sky-900 mb-4">
              {t.calendar.title}
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              {t.calendar.description}
            </p>
          </div>

          {/* Upcoming Events Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {data.upcomingEvents?.map((event) => (
              <div
                key={event.id}
                className="pb-20 bg-white rounded-xl shadow-md border border-stone-200 hover:shadow-lg transition-all duration-300 ease-in-out p-6 relative group"
              >
                <h3 className="text-xl font-serif font-bold text-stone-900 mb-3">{event.title}</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-stone-600">
                    <Calendar className="w-5 h-5 text-teal-800 shrink-0" />
                    <span className="text-sm md:text-base">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-stone-600">
                    <Clock className="w-5 h-5 text-teal-800 shrink-0" />
                    <span className="text-sm md:text-base">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-stone-600">
                    <MapPin className="w-5 h-5 text-teal-800 shrink-0" />
                    <span className="text-sm md:text-base">{event.location}</span>
                  </div>

                  {/* Hover effect - Description */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-stone-800 text-sm border-t border-stone-200 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out bg-stone-200/80">
                    <p>{event.description}</p>
                  </div>

                  {/* Indication (Arrow) */}
                
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-50 group-hover:opacity-0 transition-opacity duration-300">
                    <span className="text-teal-800 hover:">↑</span> {/* Arrow indicating to hover */}
                  </div>
                </div>
              </div>
            ))}
          </div>


          {/* Google Calendar Embed */}
          <div className="bg-white rounded-xl shadow-md border border-stone-200 overflow-hidden">
            <div className="p-6">
              <div className="relative w-full" style={{ paddingBottom: "75%" }}>
                <iframe
                  src={sharedCalendar.embedUrl}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "none"
                  }}
                  width="100%"
                  height="600"
                  frameBorder="0"
                  scrolling="no"
                  title="Campaign Calendar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

