"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-all duration-200 ${
        scrolled ? "shadow-sm border-b border-gray-200" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4 sm:px-6 lg:px-8">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-tomazela.png"
            alt="Tomazela"
            width={140}
            height={45}
            priority
            className="h-[40px] sm:h-[48px] w-auto transition-all duration-200"
          />
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-orange-600 transition-colors">
            Início
          </Link>
          <Link href="/lab" className="hover:text-orange-600 transition-colors">
            LAB
          </Link>
          <Link
            href="/manifesto"
            className="hover:text-orange-600 transition-colors"
          >
            Manifesto
          </Link>
          <Link
            href="/#contato"
            className="bg-[#FF4D00] text-white rounded-2xl px-4 py-2 hover:opacity-90 transition"
          >
            Fale com a gente
          </Link>
        </nav>

        {/* MENU MOBILE */}
        <button
          className="md:hidden flex flex-col gap-[6px] p-2 rounded-lg border border-gray-200"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          <span className="w-5 h-[2px] bg-gray-800" />
          <span className="w-5 h-[2px] bg-gray-800" />
          <span className="w-5 h-[2px] bg-gray-800" />
        </button>
      </div>

      {/* MOBILE NAV */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-inner">
          <nav className="flex flex-col px-6 py-4 space-y-4 text-gray-700 text-sm">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Início
            </Link>
            <Link href="/lab" onClick={() => setMenuOpen(false)}>
              LAB
            </Link>
            <Link href="/manifesto" onClick={() => setMenuOpen(false)}>
              Manifesto
            </Link>
            <Link
              href="/#contato"
              onClick={() => setMenuOpen(false)}
              className="bg-[#FF4D00] text-white rounded-2xl px-4 py-2 inline-block text-center hover:opacity-90 transition"
            >
              Fale com a gente
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
