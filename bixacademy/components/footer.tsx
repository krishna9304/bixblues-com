"use client";

import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Footer() {
  const { theme } = useTheme();
  return (
    <footer className="bg-muted py-12 border-t">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/bix-academy-logo.svg"
                className={`${theme === "light" ? "invert" : ""}`}
                alt="BixAcademy Logo"
                width={40}
                height={30}
              />
              <span className="text-xl font-extralight ml-1">BixAcademy</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Empowering computer science undergraduates to excel in campus
              placements through comprehensive training and mentorship.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#about"
                  className="text-muted-foreground hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#programs"
                  className="text-muted-foreground hover:text-primary"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="#educators"
                  className="text-muted-foreground hover:text-primary"
                >
                  Educators
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-muted-foreground hover:text-primary"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-muted-foreground hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Programs</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#programs"
                  className="text-muted-foreground hover:text-primary"
                >
                  Fast Track (3 months)
                </Link>
              </li>
              <li>
                <Link
                  href="#programs"
                  className="text-muted-foreground hover:text-primary"
                >
                  Complete Program (6 months)
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Curriculum
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Schedule
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start space-x-2">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">
                  info@bixacademy.com
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">+91 98765 43210</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">
                  Tech Hub, Sector 62, Noida, Uttar Pradesh, India
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} BixAcademy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
