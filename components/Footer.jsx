"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-gray-700">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Esquerda */}
          <div className="text-center md:text-left">
            <p className="font-semibold text-gray-900">
              TOMAZELA | Estratégia & Comunicação
            </p>
            <p className="text-gray-600 mt-1">
              Santa Cecília • São Paulo/SP
            </p>
            <p className="text-gray-600">
              <a
                href="mailto:andre@andretomazela.com.br"
                className="underline hover:text-orange-600 transition"
              >
                andre@andretomazela.com.br
              </a>
            </p>
          </div>

          {/* Direita */}
          <div className="flex flex-col md:items-end text-center md:text-right space-y-1">
            <div className="flex justify-center md:justify-end gap-4 text-gray-600">
              <Link
                href="https://wa.me/message/TUNCL3KFQIECM1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-600 transition"
              >
                WhatsApp
              </Link>
              <span>•</span>
              <Link
                href="https://www.linkedin.com/in/tomazela/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-600 transition"
              >
                LinkedIn
              </Link>
              <span>•</span>
              <Link
                href="https://www.instagram.com/tomazela.comunica/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-600 transition"
              >
                Instagram
              </Link>
            </div>
            <p className="text-gray-500 mt-2">
              © 2025 Tomazela | Estratégia & Comunicação
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
