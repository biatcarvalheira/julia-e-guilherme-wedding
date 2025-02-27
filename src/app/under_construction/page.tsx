"use client"; // Ensure it's a client-side component
import Navbar from "@/components/Navbar"; // ✅ Import your Navbar

export default function UnderConstruction() {
  return (
    <section
      className="h-screen flex flex-col items-center justify-center text-white bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/construction-background.jpg')" }} // ✅ Update with your image path
    >
      {/* Background Color Overlay */}
      <div className="absolute inset-0 bg-[#bcd7b4]"></div>

      {/* Navbar - Positioned at the top */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar /> {/* ✅ Add Navbar */}
      </div>

      {/* Content */}
      <div className="relative text-center z-10">
        <h1 className="text-5xl font-bold text-[#f06faa]">Em Construção</h1>
      </div>
    </section>
  );
}
