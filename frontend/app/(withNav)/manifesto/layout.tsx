import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Manifesto | Hummam Quader Chowdhury",
  description: "Learn about Hummam Quader Chowdhury, his background, and his vision for Rangunia.",
}

export default function ManifestoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
