"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
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
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#about"
            className="text-sm font-medium hover:text-primary"
          >
            About
          </Link>
          <Link
            href="#programs"
            className="text-sm font-medium hover:text-primary"
          >
            Programs
          </Link>
          <Link
            href="#educators"
            className="text-sm font-medium hover:text-primary"
          >
            Educators
          </Link>
          <Link href="#faq" className="text-sm font-medium hover:text-primary">
            FAQ
          </Link>
          <Link href="#contact">
            <Button>Contact Us</Button>
          </Link>
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="container md:hidden py-4 bg-background">
          <nav className="flex flex-col space-y-4">
            <Link
              href="#about"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#programs"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Programs
            </Link>
            <Link
              href="#educators"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Educators
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full">Contact Us</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
