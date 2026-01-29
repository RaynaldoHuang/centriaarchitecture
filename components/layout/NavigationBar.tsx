"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import logoWhite from "@/public/images/whitelogo.webp";
import logoBlack from "@/public/images/blacklogo.webp";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const container = document.getElementById("scroll-container");
    if (!container) return;

    const handleScroll = () => {
      setScrolled(container.scrollTop > 50);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#aboutus" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed z-50 top-0 left-0 right-0 transition-all duration-300 ${
          menuOpen
            ? "bg-transparent border-none"
            : scrolled
              ? "bg-white/90 backdrop-blur-md border-b border-black/10"
              : "bg-transparent border-b border-white/30"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 lg:px-0">
          {/* Logo - selalu ada supaya layout stabil */}
          <div className="flex items-center">
            {/* Logo */}
            {!menuOpen && (
              <div className="flex items-center">
                <Image
                  src={scrolled ? logoBlack : logoWhite}
                  alt="Logo"
                  className="w-32"
                />
              </div>
            )}
          </div>

          {/* Desktop */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`transition-colors duration-300 text-sm font-medium tracking-wide ${
                  scrolled
                    ? "text-black hover:text-gray-600"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger / X */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden fixed top-5 right-6 z-50"
          >
            {menuOpen ? (
              <X size={28} className="text-black" />
            ) : (
              <Menu
                size={28}
                className={scrolled ? "text-black" : "text-white"}
              />
            )}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-xl transform transition-all duration-500 ${
          menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } md:hidden z-40`}
      >
        <div className="flex flex-col h-full space-y-6 text-2xl font-medium px-12 mt-24">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-black hover:opacity-60 transition font-semibold"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
