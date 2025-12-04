"use client"

import { createContext, useState, ReactNode, useEffect } from "react"

type LanguageType = "en" | "bn"

interface LanguageContextType {
  language: LanguageType
  setLanguage: (lang: LanguageType) => void
  isLoading: boolean
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  isLoading: true,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<LanguageType>("en")
  const [isLoading, setIsLoading] = useState(true)

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as LanguageType | null
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "bn")) {
      setLanguageState(savedLanguage)
    }
    setIsLoading(false)
  }, [])

  // Save language to localStorage whenever it changes
  const handleSetLanguage = (lang: LanguageType) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  // Show loading state until language is loaded
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full border-4 border-green-200 border-t-green-800 animate-spin" />
          <p className="text-stone-600 font-medium">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, isLoading }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageContext
