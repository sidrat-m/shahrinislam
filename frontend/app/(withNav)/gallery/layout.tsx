import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gallery | Hummam Quader Chowdhury",
  description: "Learn about Hummam Quader Chowdhury, his background, and his vision for Rangunia.",
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
