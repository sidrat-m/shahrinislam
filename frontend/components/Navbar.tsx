"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe } from "lucide-react"
import { useLanguage } from "@/hooks/useLanguage"
import { useLanguageAndData } from "@/hooks/useLanguageAndData"
import { sharedImages } from "@/data/candidateData"

export default function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const { t ,data } = useLanguageAndData()


  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const isActive = (href: string) => {
    if (href.startsWith("/")) {
      return pathname === href
    }
    return false
  }

  const navLinks = [
    { href: "/", mbHref:"/", label: t.navbar.home },
    { href: "/about", mbHref:"/about", label: t.navbar.about },
    { href: "/manifesto", mbHref:"/manifesto", label: t.navbar.manifesto },
    { href: "/gallery", mbHref:"/gallery", label: t.navbar.gallery },
    { href: "/#contact", mbHref:"/#contactmb", label: t.navbar.contact }
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200/50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0 overflow-hidden rounded-full ring-2 ring-teal-800/20 group-hover:ring-teal-800/40 transition-all group-hover:scale-105 shadow-sm">
            <Image
              src={sharedImages.logo}
              alt={data.firstName}
              fill
              sizes="(max-width: 640px) 56px, 64px"
              className="object-cover object-center"
              priority
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-serif text-sm lg:text-xl sm:text-lg font-bold tracking-tight text-sky-900 leading-tight truncate">
              {data.navName.toUpperCase()}<span className="text-red-600">.</span>
            </span>
            <span className="text-[10px] sm:text-xs text-stone-500 font-medium uppercase tracking-wider">
              {data.tagline}
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const active = isActive(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative transition-colors ${ 
                  active
                    ? "text-sky-900 font-semibold"
                    : "text-stone-600 hover:text-teal-800"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal-800 rounded-full" />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-4">
          {/* Language Selector Dropdown */}
          <div className="relative group">
            <button
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              className="flex items-center gap-2 px-3 py-2 rounded-full border border-stone-200 bg-white hover:bg-stone-50 hover:border-teal-400 transition-all duration-200 group"
            >
              <Globe className="w-4 h-4 text-stone-600 group-hover:text-teal-700" />
              <span className="text-sm font-semibold text-stone-700 group-hover:text-teal-800">
                {language === "en" ? "EN" : "BN"}
              </span>
            </button>

            {/* Language Dropdown Menu */}
            {isLanguageDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-30"
                  onClick={() => setIsLanguageDropdownOpen(false)}
                />
                <div className="absolute top-full right-0 mt-2 bg-white border border-stone-200 rounded-xl shadow-lg z-40 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  <button
                    onClick={() => {
                      setLanguage("en")
                      setIsLanguageDropdownOpen(false)
                    }}
                    className={`w-full px-4 py-3 text-left text-sm font-medium transition-all duration-150 flex items-center gap-3 ${
                      language === "en"
                        ? "bg-teal-50 text-teal-800"
                        : "text-stone-700 hover:bg-stone-50"
                    }`}
                  >
                    <span className="text-lg">🇬🇧</span>
                    <div className="flex flex-col">
                      <span>English</span>
                    </div>
                    {language === "en" && (
                      <span className="ml-auto text-teal-600">✓</span>
                    )}
                  </button>
                  <div className="border-t border-stone-100" />
                  <button
                    onClick={() => {
                      setLanguage("bn")
                      setIsLanguageDropdownOpen(false)
                    }}
                    className={`w-full px-4 py-3 text-left text-sm font-medium transition-all duration-150 flex items-center gap-3 ${
                      language === "bn"
                        ? "bg-teal-50 text-teal-800"
                        : "text-stone-700 hover:bg-stone-50"
                    }`}
                  >
                    <span className="text-lg">🇧🇩</span>
                    <div className="flex flex-col">
                      <span>বাংলা</span>
                    </div>
                    {language === "bn" && (
                      <span className="ml-auto text-teal-600">✓</span>
                    )}
                  </button>
                </div>
              </>
            )}
          </div>

          <Button
            asChild
            variant="outline"
            className="hidden lg:flex border-teal-700 text-teal-800 hover:bg-teal-50 rounded-full bg-transparent"
          >
            <Link href="/form/volunteer">{t.navbar.volunteer}</Link>
          </Button>
          <Button
            asChild
            className="hidden lg:flex bg-teal-800 hover:bg-teal-900 text-white rounded-full px-6 shadow-lg shadow-teal-900/20"
          >
            <Link href="#donate">{t.navbar.donate}</Link>
          </Button>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors relative z-50 ${
              isMobileMenuOpen
                ? "text-white bg-teal-900/70"
                : "text-stone-700 hover:text-teal-800 hover:bg-teal-50"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 h-screen bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={closeMobileMenu}
          />

          {/* Mobile Menu */}
          <div className="fixed top-20 left-0 right-0 bg-white border-b border-stone-200 shadow-xl z-50 lg:hidden animate-in slide-in-from-top duration-300">
            <nav className="container mx-auto px-4 py-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => { 
                  const active = isActive(link.href)
                  return (
                    <Link
                      key={link.mbHref}
                      href={link.mbHref}
                      onClick={closeMobileMenu}
                      className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                        active
                          ? "text-teal-900 bg-teal-50 font-semibold"
                          : "text-stone-700 hover:text-teal-800 hover:bg-teal-50/50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                })}

                {/* Mobile Menu Buttons */}
                <div className="flex flex-col gap-3 pt-4 border-t border-stone-200">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-teal-700 text-teal-800 hover:bg-teal-50 rounded-full bg-transparent"
                    onClick={closeMobileMenu}
                  >
                    <Link href="/form/volunteer">{t.navbar.volunteer}</Link>
                  </Button>
                  <Button
                    asChild
                    className="w-full bg-teal-800 hover:bg-teal-900 text-white rounded-full shadow-lg shadow-teal-900/20"
                    onClick={closeMobileMenu}
                  >
                    <Link href="#donate">{t.navbar.donate}</Link>
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  )
}

