import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Manifesto | Shahrin Islam Tuhin",
  description: "Learn about Shahrin Islam Tuhin, his background, and his vision for Nilphamari.",
}

export default function ManifestoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
