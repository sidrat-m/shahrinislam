import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Shahrin Islam Tuhin",
  description: "Learn about Shahrin Islam Tuhin, his background, and his vision for Nilphamari.",
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
