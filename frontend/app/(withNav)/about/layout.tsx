import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Hummam Quader Chowdhury",
  description: "Learn about Hummam Quader Chowdhury, his background, and his vision for Rangunia.",
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
