"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, MessageSquare, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguageAndData } from "@/hooks/useLanguageAndData"

export default function ContactFormPage() {
  const { t, data } = useLanguageAndData()
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })

  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission - in production, this would send to your backend
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    
    // Redirect to success page with query parameters
    const params = new URLSearchParams({
      type: "contact",
      email: formData.email,
      subject: formData.subject || "general",
      name: formData.fullName
    })
    router.push(`/form/success?${params.toString()}`)
  }

  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-6 md:mb-8">
          <Button
            asChild
            variant="ghost"
            className="mb-4 md:mb-6 text-sm md:text-base text-stone-600 hover:text-stone-900"
          >
            <Link href="/" className="flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 rounded-full bg-teal-100 text-sky-900 mb-4 md:mb-6">
              <MessageSquare className="w-4 md:w-5 h-4 md:h-5" />
              <span className="text-sm md:text-base font-semibold">{t.forms.contact.header}</span>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-stone-900 mb-3 md:mb-4">
              {t.forms.contact.header} {data.firstName} {data.lastName}
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-stone-600 max-w-2xl mx-auto px-2">
              {t.forms.contact.description}
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-6 md:gap-8">
          {/* Contact Information Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-5 md:p-6 sticky top-24">
              <h2 className="text-lg md:text-xl font-serif font-bold text-stone-900 mb-4 md:mb-6">{t.contact.title}</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-teal-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1 text-sm md:text-base">{t.contact.email}</h3>
                    <a
                      href={`mailto:${data.contact.email}`}
                      className="text-stone-600 hover:text-teal-800 transition-colors text-xs md:text-sm break-all"
                    >
                      {data.contact.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-teal-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1 text-sm md:text-base">{t.contact.phone}</h3>
                    <a
                      href={`tel:${data.contact.phone}`}
                      className="text-stone-600 hover:text-teal-800 transition-colors text-xs md:text-sm"
                    >
                      {data.contact.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-teal-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1 text-sm md:text-base">{t.contact.office}</h3>
                    <p className="text-stone-600 text-xs md:text-sm">
                      {data.contact.address.line1}<br />
                      {data.contact.address.line2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl md:rounded-2xl shadow-lg p-5 md:p-8 lg:p-12 space-y-5 md:space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-xs md:text-sm font-semibold text-stone-700 mb-1 md:mb-2">
                    {t.forms.contact.fullName} <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 md:px-4 md:py-3 text-sm md:text-base border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-800 focus:border-transparent outline-none transition-all"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs md:text-sm font-semibold text-stone-700 mb-1 md:mb-2">
                    {t.forms.contact.email} <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 md:px-4 md:py-3 text-sm md:text-base border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-800 focus:border-transparent outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs md:text-sm font-semibold text-stone-700 mb-1 md:mb-2">
                  {t.forms.contact.phone}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 md:px-4 md:py-3 text-sm md:text-base border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-800 focus:border-transparent outline-none transition-all"
                  placeholder="+880 1XXX XXXXXX"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs md:text-sm font-semibold text-stone-700 mb-1 md:mb-2">
                  {t.forms.contact.subject} <span className="text-red-600">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 md:px-4 md:py-3 text-sm md:text-base border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-800 focus:border-transparent outline-none transition-all"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Campaign Support</option>
                  <option value="event">Event Information</option>
                  <option value="policy">Policy Question</option>
                  <option value="media">Media Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs md:text-sm font-semibold text-stone-700 mb-1 md:mb-2">
                  {t.forms.contact.message} <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={8}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 md:px-4 md:py-3 text-sm md:text-base border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-800 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Please share your thoughts, questions, or concerns..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-teal-800 hover:bg-sky-900 text-white h-12 md:h-14 text-base md:text-lg rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? t.forms.contact.sending : t.forms.contact.send}
                </Button>
                <Button
                  type="button"
                  asChild
                  variant="outline"
                  className="flex-1 border-stone-300 text-stone-700 hover:bg-stone-50 h-12 md:h-14 text-base md:text-lg rounded-full"
                >
                  <Link href="/">Cancel</Link>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

