import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { SITE_OFFICE_ADDRESS_LINES, siteSeo } from "@/lib/seo/config";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#1e3a5f] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <Image
              src="/images/Mindfulcrum_Banner.png"
              alt="Mindfulcrum — Workplace Psychology"
              width={400}
              height={100}
              className="h-auto max-h-16 w-full max-w-full object-contain object-left brightness-0 invert sm:max-h-20 sm:w-auto sm:max-w-[min(100%,360px)]"
              sizes="(max-width: 640px) 100vw, 360px"
            />
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-gray-400">
              Signifying a pivotal point for mental balance
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-400/90">
              Where Psychology Powers High-Performing Workplaces
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">Programs</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link
                  href="/corporate-programs"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Corporate Programs
                </Link>
              </li>
              <li>
                <Link href="/corporate-audit" className="text-gray-300 transition-colors hover:text-white">
                  Leadership Audit
                </Link>
              </li>
              <li>
                <Link href="/school-programs" className="text-gray-300 transition-colors hover:text-white">
                  School Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/individual-programs"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Individual Therapy
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">Get in Touch</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-[#c92a2a]" strokeWidth={1.75} />
                <a
                  href={`mailto:${siteSeo.email}`}
                  className="min-w-0 break-words leading-snug transition-colors hover:text-white"
                >
                  {siteSeo.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-[#c92a2a]" strokeWidth={1.75} />
                <a href={`tel:${siteSeo.phone.replace(/\s/g, "")}`} className="leading-snug hover:text-white transition-colors">
                  +91 12345 67890
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-[#c92a2a]" strokeWidth={1.75} />
                <address className="not-italic leading-snug">
                  {SITE_OFFICE_ADDRESS_LINES.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </li>
              <li className="flex gap-3">
                <Linkedin size={18} className="mt-0.5 shrink-0 text-[#c92a2a]" strokeWidth={1.75} />
                <a
                  href={siteSeo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-snug transition-colors hover:text-white"
                >
                  Mind Fulcrum Healthcare on LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Mindfulcrum. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6 md:justify-end">
            <Link href="/resources" className="transition-colors hover:text-white">
              Resources
            </Link>
            <Link href="/about" className="transition-colors hover:text-white">
              About
            </Link>
            <Link href="/contact" className="transition-colors hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
