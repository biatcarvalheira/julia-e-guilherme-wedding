"use client"; // Ensure it's a client-side component

export default function UnderConstruction() {
  return (
    <section
      className="h-screen flex items-center justify-center text-white bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/construction-background.jpg')" }} // Update with your image path
    >
      {/* Background Color Overlay */}
      <div className="absolute inset-0 bg-[#bcd7b4]"></div>

      {/* Content */}
      <div className="relative text-center">
        <h1 className="text-5xl font-bold text-[#f06faa]">Em Construção</h1>
      </div>
    </section>
  );
}
