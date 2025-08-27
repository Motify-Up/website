"use client";

import Image from "next/image";
import { useState } from "react";

type NavbarProps = {
  featuresLabel: string;
  galleryLabel: string;
  downloadLabel: string;
  currentLocale: string;
};

export default function Navbar({
  featuresLabel,
  galleryLabel,
  downloadLabel,
  currentLocale
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "zh", name: "中文", flag: "🇨🇳" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" }
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-green-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden">
              <Image
                src="/app-icon.svg"
                alt="MotifyUp App Icon"
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </div>
            <span className="text-2xl font-bold text-gray-900">MotifyUp</span>
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-green-600 transition-colors">
              {featuresLabel}
            </a>
            <a href="#screenshots" className="text-gray-700 hover:text-green-600 transition-colors">
              {galleryLabel}
            </a>
            <a href="#download" className="text-gray-700 hover:text-green-600 transition-colors">
              {downloadLabel}
            </a>
            <div className="relative group">
              <button className="flex items-center space-x-2 text-gray-700 hover:text-green-600 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50">
                <span className="text-lg">
                  {languages.find((l) => l.code === currentLocale)?.flag || "🌐"}
                </span>
                <span className="hidden sm:inline">
                  {languages.find((l) => l.code === currentLocale)?.code.toUpperCase() || "EN"}
                </span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {languages.map((language) => (
                  <a
                    key={language.code}
                    href={`/${language.code}`}
                    className={`flex items-center space-x-3 px-4 py-3 text-sm hover:bg-gray-50 transition-colors ${
                      currentLocale === language.code ? "text-green-600 bg-green-50" : "text-gray-700"
                    }`}
                  >
                    <span className="text-lg">{language.flag}</span>
                    <span>{language.name}</span>
                    {currentLocale === language.code && (
                      <svg className="w-4 h-4 ml-auto text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-green-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
            aria-label="Open menu"
            onClick={() => setIsOpen((v) => !v)}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              {isOpen ? (
                <path fillRule="evenodd" d="M6.225 4.811a1 1 0 011.414 0L12 9.172l4.361-4.361a1 1 0 111.414 1.414L13.414 10.586l4.361 4.361a1 1 0 01-1.414 1.414L12 12l-4.361 4.361a1 1 0 01-1.414-1.414L10.586 10.586 6.225 6.225a1 1 0 010-1.414z" clipRule="evenodd" />
              ) : (
                <path fillRule="evenodd" d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-green-100 bg-white">
          <div className="px-4 py-3 space-y-2">
            <a href="#features" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50">
              {featuresLabel}
            </a>
            <a href="#screenshots" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50">
              {galleryLabel}
            </a>
            <a href="#download" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50">
              {downloadLabel}
            </a>
            <div className="pt-2 border-t border-gray-100">
              <div className="grid grid-cols-2 gap-2">
                {languages.map((language) => (
                  <a
                    key={language.code}
                    href={`/${language.code}`}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm hover:bg-gray-50 ${
                      currentLocale === language.code ? "text-green-600 bg-green-50" : "text-gray-700"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{language.flag}</span>
                    <span>{language.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

