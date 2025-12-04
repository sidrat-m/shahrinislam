import type { Metadata } from "next";
import "../globals.css";
import { LanguageProvider } from "@/store/LanguageContext";

export const metadata: Metadata = {
  title: "Form | Shahrin Islam Tuhin",
  description: "Fill the form to register for the IEB Election.",
};

export default function WithoutNavLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans text-stone-900 selection:bg-green-100 selection:text-green-900">
        <LanguageProvider>
          <div className="min-h-screen flex flex-col">
            <main className="flex-1">
              {children}
            </main>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}

