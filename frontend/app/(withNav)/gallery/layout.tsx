import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gallery | Shahrin Islam Tuhin",
  description: "Learn about Shahrin Islam Tuhin, his background, and his vision for Nilphamari.",
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
