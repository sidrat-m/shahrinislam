"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguageAndData } from "@/hooks/useLanguageAndData"

export default function VolunteerFormPage() {
  const { t, data } = useLanguageAndData()
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    district: "",
    age: "",
    occupation: "",
    role: "",
    availability: "",
    reference: "",
    skills: "",
    motivation: "",
    previousExperience: ""
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
      type: "volunteer",
      email: formData.email,
      name: formData.fullName
    })
    router.push(`/form/success?${params.toString()}`)
  }


  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-6 md:mb-8">
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
              <Users className="w-4 md:w-5 h-4 md:h-5" />
              <span className="text-sm md:text-base font-semibold">{t.forms.volunteer.header}</span>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-stone-900 mb-3 md:mb-4">
              {t.forms.volunteer.header}
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-stone-600 max-w-2xl mx-auto px-2">
              {t.forms.volunteer.description} {data.firstName}'s campaign.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-xl md:rounded-2xl shadow-lg p-5 md:p-8 lg:p-12 space-y-5 md:space-y-6">
            {/* Personal Information */}
            <div className="border-b border-stone-200 pb-6">
              <h2 className="text-lg md:text-2xl font-serif font-bold text-stone-900 mb-4 md:mb-6">{t.forms.volunteer.personalInfo}</h2>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-xs md:text-sm font-semibold text-stone-700 mb-1 md:mb-2">
                    Full Name <span className="text-red-600">*</span>
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
                    Email Address <span className="text-red-600">*</span>
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
                <div>
                  <label htmlFor="phone" className="block text-xs md:text-sm font-semibold text-stone-700 mb-1 md:mb-2">
                    Phone Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 md:px-4 md:py-3 text-sm md:text-base border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-800 focus:border-transparent outline-none transition-all"
                    placeholder="+880 1XXX XXXXXX"
                  />
                </div>
                <div>
                  <label htmlFor="age" className="block text-xs md:text-sm font-semibold text-stone-700 mb-1 md:mb-2">
                    Age <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    required
                    min="18"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full px-3 py-2 md:px-4 md:py-3 text-sm md:text-base border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-800 focus:border-transparent outline-none transition-all"
                    placeholder="Your age"
                  />
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div className="border-b border-stone-200 pb-6">
              <h2 className="text-lg md:text-2xl font-serif font-bold text-stone-900 mb-4 md:mb-6">{t.forms.volunteer.addressInfo}</h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="address" className="block text-xs md:text-sm font-semibold text-stone-700 mb-1 md:mb-2">
                    Street Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-3 py-2 md:px-4 md:py-3 text-sm md:text-base border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-800 focus:border-transparent outline-none transition-all"
                    placeholder="House/Street address"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="city" className="block text-xs md:text-sm font-semibold text-stone-700 mb-1 md:mb-2">
                      City <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-3 py-2 md:px-4 md:py-3 text-sm md:text-base border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-800 focus:border-transparent outline-none transition-all"
                      placeholder="City name"
                    />
                  </div>
                  <div>
                    <label htmlFor="district" className="block text-xs md:text-sm font-semibold text-stone-700 mb-1 md:mb-2">
                      District <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="district"
                      name="district"
                      required
                      value={formData.district}
                      onChange={handleChange}
                      className="w-full px-3 py-2 md:px-4 md:py-3 text-sm md:text-base border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-800 focus:border-transparent outline-none transition-all"
                      placeholder="District name"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Information */}
            <div className="border-b border-stone-200 pb-6">
              <h2 className="text-lg md:text-2xl font-serif font-bold text-stone-900 mb-4 md:mb-6">{t.forms.volunteer.professionalInfo}</h2>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="occupation" className="block text-xs md:text-sm font-semibold text-stone-700 mb-1 md:mb-2">
                    Occupation
                  </label>
                  <input
                    type="text"
                    id="occupation"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                    className="w-full px-3 py-2 md:px-4 md:py-3 text-sm md:text-base border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-800 focus:border-transparent outline-none transition-all"
                    placeholder="Your profession"
                  />
                </div>
                <div>
                  <label htmlFor="role" className="block text-xs md:text-sm font-semibold text-stone-700 mb-1 md:mb-2">
                    Preferred Role <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="role"
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-3 py-2 md:px-4 md:py-3 text-sm md:text-base border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-800 focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select a role</option>
                    <option value="campaign-manager">Campaign Manager</option>
                    <option value="field-organizer">Field Organizer</option>
                    <option value="social-media">Social Media Coordinator</option>
                    <option value="event-planning">Event Planning</option>
                    <option value="community-outreach">Community Outreach</option>
                    <option value="fundraising">Fundraising</option>
                    <option value="data-analysis">Data Analysis</option>
                    <option value="volunteer-support">Volunteer Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="availability" className="block text-xs md:text-sm font-semibold text-stone-700 mb-1 md:mb-2">
                    Availability <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="availability"
                    name="availability"
                    required
                    value={formData.availability}
                    onChange={handleChange}
                    className="w-full px-3 py-2 md:px-4 md:py-3 text-sm md:text-base border border-stone-300 rounded-lg focus:ring-2 focus:ring-gretealen-800 focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select availability</option>
                    <option value="full-time">Full Time</option>
                    <option value="part-time">Part Time</option>
                    <option value="weekends">Weekends Only</option>
                    <option value="evenings">Evenings Only</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Volunteer Details */}
            <div>
              <h2 className="text-lg md:text-2xl font-serif font-bold text-stone-900 mb-4 md:mb-6">{t.forms.volunteer.volunteerDetails}</h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="reference" className="block text-xs md:text-sm font-semibold text-stone-700 mb-1 md:mb-2">
                    Reference
                  </label>
                  <input
                    type="text"
                    id="reference"
                    name="reference"
                    value={formData.reference}
                    onChange={handleChange}
                    className="w-full px-3 py-2 md:px-4 md:py-3 text-sm md:text-base border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-800 focus:border-transparent outline-none transition-all"
                    placeholder="Enter reference name or contact person"
                  />
                </div>
                <div>
                  <label htmlFor="skills" className="block text-xs md:text-sm font-semibold text-stone-700 mb-1 md:mb-2">
                    Skills & Expertise
                  </label>
                  <textarea
                    id="skills"
                    name="skills"
                    rows={3}
                    value={formData.skills}
                    onChange={handleChange}
                    className="w-full px-3 py-2 md:px-4 md:py-3 text-sm md:text-base border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-800 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="List any relevant skills (e.g., event management, social media, public speaking)"
                  />
                </div>
                <div>
                  <label htmlFor="previousExperience" className="block text-xs md:text-sm font-semibold text-stone-700 mb-1 md:mb-2">
                    Previous Volunteer Experience
                  </label>
                  <textarea
                    id="previousExperience"
                    name="previousExperience"
                    rows={3}
                    value={formData.previousExperience}
                    onChange={handleChange}
                    className="w-full px-3 py-2 md:px-4 md:py-3 text-sm md:text-base border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-800 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Describe any previous volunteer or campaign experience"
                  />
                </div>
                <div>
                  <label htmlFor="motivation" className="block text-xs md:text-sm font-semibold text-stone-700 mb-1 md:mb-2">
                    Why do you want to volunteer? <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    required
                    rows={4}
                    value={formData.motivation}
                    onChange={handleChange}
                    className="w-full px-3 py-2 md:px-4 md:py-3 text-sm md:text-base border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-800 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us what motivates you to join our campaign..."
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-teal-800 hover:bg-sky-900 text-white h-12 md:h-14 text-base md:text-lg rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t.forms.volunteer.submitting : t.forms.volunteer.submit}
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
  )
}

