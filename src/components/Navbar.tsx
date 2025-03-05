"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons for open/close menu

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#f9b9d5] shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="#hero" className="text-3xl font-bold font-greatVibes text-[#045005]">
          Julia & Guilherme
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/#rsvp_main" className="text-gray-700 hover:text-gray-900">
            RSVP
          </Link>
          <Link href="/under_construction" className="text-gray-700 hover:text-gray-900">
            Como Chegar
          </Link>
          <Link href="/under_construction" className="text-gray-700 hover:text-gray-900">
            Programação
          </Link>
          <Link href="/#hoteis" className="text-gray-700 hover:text-gray-900">
            Hotel
          </Link>
          <Link href="/under_construction" className="text-gray-700 hover:text-gray-900">
            Transporte
          </Link>
          <Link href="/#hair-makeup" className="text-gray-700 hover:text-gray-900">
            Cabelo e Make
          </Link>
          <Link href="/under_construction" className="text-gray-700 hover:text-gray-900">
            Lista de Presentes
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Full-Screen Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#bcd7b4] flex flex-col justify-center items-center z-50">
          <button className="absolute top-6 right-6 text-gray-700" onClick={() => setIsOpen(false)}>
            <X size={32} />
          </button>

          <div className="flex flex-col space-y-6 text-xl">
            <Link href="#hero" className="text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>
              Início
            </Link>
            <Link href="/#rsvp_main" className="text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>
              RSVP
            </Link>
            <Link href="/under_construction" className="text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>
              Como Chegar
            </Link>
            <Link href="/under_construction" className="text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>
              Programação
            </Link>
            <Link href="/#hoteis" className="text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>
              Hotel
            </Link>
            <Link href="/under_construction" className="text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>
              Transporte
            </Link>
            <Link href="/#hair-makeup" className="text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>
              Cabelo e Make
            </Link>
            <Link href="/under_construction" className="text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>
              Lista de Presentes
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
