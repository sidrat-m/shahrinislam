"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { ArrowLeft, MessageSquare, CheckCircle2, Mail, Phone, MapPin, Sparkles, Clock, Heart, HandHeart, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguageAndData } from "@/hooks/useLanguageAndData"
import { useEffect, useState, Suspense } from "react"

type FormType = "contact" | "volunteer"

function SuccessContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const { data } = useLanguageAndData()

  const formType = (searchParams.get("type") || "contact") as FormType
  const email = searchParams.get("email") || ""
  const subject = searchParams.get("subject") || ""
  const name = searchParams.get("name") || ""

  useEffect(() => {
    setMounted(true)
    // If no type is provided, redirect to home
    if (!searchParams.get("type")) {
      router.push("/")
    }
  }, [searchParams, router])

  if (!mounted) {
    return null
  }

  const isContact = formType === "contact"
  const formPath = isContact ? "/form/contact" : "/form/volunteer"

  return (
    <div className="min-h-screen bg-linear-to-br from-teal-50 via-stone-50 to-teal-50/30 py-20 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-100/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-50/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Success Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-teal-100">
            {/* Header Section with Gradient */}
            <div className="bg-linear-to-r from-teal-800 to-sky-900 px-8 py-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
              </div>
              <div className="relative z-10">
                {/* Animated Success Icon */}
                <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full mb-6 border-4 border-white/30 animate-in zoom-in duration-500">
                  {isContact ? (
                    <CheckCircle2 className="w-12 h-12 text-white" />
                  ) : (
                    <HandHeart className="w-12 h-12 text-white" />
                  )}
                </div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-3 animate-in fade-in slide-in-from-bottom-4 duration-700">
                  {isContact ? "Message Sent Successfully!" : "Application Submitted!"}
                </h1>
                <p className="text-teal-100 text-lg animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
                  {isContact
                    ? `Thank you for reaching out to ${data.firstName} ${data.lastName}`
                    : "Thank you for your interest in volunteering"}
                </p>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 md:p-12">
              {/* Thank You Message */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-sky-900 text-sm font-semibold mb-6">
                  <Heart className="w-4 h-4" />
                  <span>
                    {isContact ? "We appreciate your message" : "We're excited to have you on board"}
                  </span>
                </div>
                <p className="text-lg text-stone-700 leading-relaxed mb-6">
                  {isContact ? (
                    <>
                      We've received your message and our team will review it carefully. We typically respond within{" "}
                      <span className="font-semibold text-teal-800">24-48 hours</span>.
                    </>
                  ) : (
                    <>
                      Your volunteer application for{" "}
                      <span className="font-semibold text-teal-800">{data.firstName}'s campaign</span> has
                      been received successfully. Our team will review your application and get back to you within{" "}
                      <span className="font-semibold text-teal-800">3-5 business days</span>.
                    </>
                  )}
                </p>
              </div>

              {/* Information Cards */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {isContact ? (
                  <>
                    <div className="bg-stone-50 rounded-xl p-6 text-center border border-stone-200">
                      <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Mail className="w-5 h-5 text-teal-800" />
                      </div>
                      <h3 className="font-semibold text-stone-900 mb-1 text-sm">Check Your Email</h3>
                      <p className="text-xs text-stone-600 break-all">
                        {email || "Confirmation sent"}
                      </p>
                    </div>
                    <div className="bg-stone-50 rounded-xl p-6 text-center border border-stone-200">
                      <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Clock className="w-5 h-5 text-teal-800" />
                      </div>
                      <h3 className="font-semibold text-stone-900 mb-1 text-sm">Response Time</h3>
                      <p className="text-xs text-stone-600">24-48 hours</p>
                    </div>
                    <div className="bg-stone-50 rounded-xl p-6 text-center border border-stone-200">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <MessageSquare className="w-5 h-5 text-teal-800" />
                      </div>
                      <h3 className="font-semibold text-stone-900 mb-1 text-sm">Subject</h3>
                      <p className="text-xs text-stone-600 capitalize">{subject || "General"}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-stone-50 rounded-xl p-6 text-center border border-stone-200">
                      <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Users className="w-5 h-5 text-teal-800" />
                      </div>
                      <h3 className="font-semibold text-stone-900 mb-1 text-sm">Application Status</h3>
                      <p className="text-xs text-stone-600">Under Review</p>
                    </div>
                    <div className="bg-stone-50 rounded-xl p-6 text-center border border-stone-200">
                      <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Clock className="w-5 h-5 text-teal-800" />
                      </div>
                      <h3 className="font-semibold text-stone-900 mb-1 text-sm">Review Time</h3>
                      <p className="text-xs text-stone-600">3-5 business days</p>
                    </div>
                    <div className="bg-stone-50 rounded-xl p-6 text-center border border-stone-200">
                      <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Mail className="w-5 h-5 text-teal-800" />
                      </div>
                      <h3 className="font-semibold text-stone-900 mb-1 text-sm">Confirmation</h3>
                      <p className="text-xs text-stone-600 break-all">{email || "Sent to your email"}</p>
                    </div>
                  </>
                )}
              </div>

              {/* Next Steps */}
              <div className="bg-teal-50 rounded-xl p-6 border border-teal-200 mb-8">
                <h3 className="font-semibold text-sky-900 mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  {isContact ? "What's Next?" : "What Happens Next?"}
                </h3>
                <ul className="space-y-2 text-stone-700 text-sm">
                  {isContact ? (
                    <>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-800 mt-1">•</span>
                        <span>Our team will review your message and categorize it appropriately</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-800 mt-1">•</span>
                        <span>You'll receive a confirmation email shortly</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-800 mt-1">•</span>
                        <span>We'll respond to your inquiry as soon as possible</span>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-800 mt-1">•</span>
                        <span>Our team will review your application and qualifications</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-800 mt-1">•</span>
                        <span>You'll receive a confirmation email with your application details</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-800 mt-1">•</span>
                        <span>We'll contact you via email or phone to discuss next steps</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-800 mt-1">•</span>
                        <span>If selected, you'll receive information about orientation and training</span>
                      </li>
                    </>
                  )}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="flex-1 bg-teal-800 hover:bg-sky-900 text-white h-14 text-lg rounded-full shadow-lg shadow-sky-900/20"
                >
                  <Link href="/" className="flex items-center justify-center">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="flex-1 border-teal-800 text-green-900 hover:bg-teal-50 h-14 text-lg rounded-full"
                >
                  <Link href={formPath}>
                    {isContact ? "Send Another Message" : "Submit Another Application"}
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-stone-600 text-sm">
              {isContact ? (
                <>
                  Need immediate assistance?{" "}
                  <a
                    href={`tel:${data.contact.phone}`}
                    className="text-teal-800 hover:underline font-semibold"
                  >
                    Call us at {data.contact.phone}
                  </a>
                </>
              ) : (
                <>
                  Questions about your application?{" "}
                  <a
                    href={`mailto:${data.contact.email}`}
                    className="text-teal-800 hover:underline font-semibold"
                  >
                    Contact us at {data.contact.email}
                  </a>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-linear-to-br from-teal-50 via-stone-50 to-teal-50/30 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-teal-800 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-stone-600">Loading...</p>
        </div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  )
}

