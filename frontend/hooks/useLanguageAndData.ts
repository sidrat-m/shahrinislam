"use client"

import { useLanguage } from "./useLanguage"
import { candidateData } from "@/data/candidateData"
import { enTranslations } from "@/data/translations/en"
import { bnTranslations } from "@/data/translations/bn"

export function useLanguageAndData() {
  const { language } = useLanguage()

  const t = language === "en" ? enTranslations : bnTranslations
  const data = language === "en" ? candidateData.en : candidateData.bn

  return {
    language,
    t,        // UI translations
    data,     // Candidate data
  }
}
