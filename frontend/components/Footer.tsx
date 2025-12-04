"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react"
import { useLanguageAndData } from "@/hooks/useLanguageAndData";
import { sharedImages } from "@/data/candidateData";


export default function Footer() {

  const {t,data} = useLanguageAndData();

  const socialIcons = [
    { Icon: Facebook, url: data.socialMedia.facebook },
    { Icon: Twitter, url: data.socialMedia.twitter },
    { Icon: Instagram, url: data.socialMedia.instagram },
    { Icon: Youtube, url: data.socialMedia.youtube }
  ]

  return (
    <section className=" pt-16 pb-6 bg-stone-900 text-stone-400 border-t border-stone-800">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-12">
          <div className="space-y-6 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0 overflow-hidden rounded-full ring-2 ring-teal-700/30 group-hover:ring-teal-700/50 transition-all shadow-sm">
                <Image
                  src={sharedImages.logo}
                  alt={data.firstName}
                  fill
                  sizes="(max-width: 640px) 56px, 64px"
                  className="object-cover object-center"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-2xl font-serif font-bold text-white leading-tight">
                  {data.firstName.toUpperCase()} {data.lastName.toUpperCase()}<span className="text-red-600">.</span>
                </span>
                <span className="text-xs text-stone-400 font-medium uppercase tracking-wider">
                  {data.footer.officeLabel}
                </span>
              </div>
            </Link>
            <p className="max-w-md text-stone-400 leading-relaxed">
              {data.party.description}
            </p>
            <div className="flex gap-4">
              {socialIcons.map(({ Icon, url }, i) => (
                <a
                  key={i}
                  href={url}
                  className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:bg-teal-800 hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-bold tracking-wider uppercase text-sm">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-700 shrink-0" />
                <span>
                  {data.contact.address.line1},
                  <br />
                  {data.contact.address.line2}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal-700 shrink-0" />
                <span>{data.contact.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-700 shrink-0" />
                <span>{data.contact.email}</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-bold tracking-wider uppercase text-sm">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-teal-500 transition-colors">
                  {t.navbar.about}
                </Link>
              </li>
              <li>
                <Link href="/manifesto" className="hover:text-teal-500 transition-colors">
                  {t.navbar.manifesto}
                </Link>
              </li>
              <li>
                <Link href="#volunteer" className="hover:text-teal-500 transition-colors">
                  {t.navbar.volunteer}
                </Link>
              </li>
              <li>
                <Link href="" className="hover:text-teal-500 transition-colors">
                  {t.navbar.donate}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>{data.footer.copyright}</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

