import Navbar from "../components/Navbar";
import Link from "next/link"; // ✅ Make sure this is at the top
import Image from "next/image";
export default function Home() {
return (
<div className="bg-custom-green min-h-screen">
   {/* Set the custom background color here */}
   <Navbar />
   <section 
     id="hero"
     className="h-screen flex items-center justify-center flex-col text-white bg-cover bg-center 
     sm:bg-[url('/images/hero_desktop_background.gif')] bg-[url('/images/hero_mobile_background.gif')]"
      >
<h1 className="text-[80px] font-bold text-center px-4 text-[#045005]">Julia & Guilherme</h1>
     <p className="text-[1.75rem] mt-2">21 de Junho de 2025</p>
   </section>
   {/* Details Section */}
   <section 
      id="details" 
      className="h-screen flex items-center justify-center text-white bg-cover bg-center 
      sm:bg-[url('/images/details_desktop_background.png')] bg-[url('/images/details_mobile_background.png')]"
      >
      <div className="max-w-2xl text-center">
         <p className="text-lg text-black">
  Já estamos contando os minutos para esse dia tão especial! Contamos com a presença de vocês em Itaipava para tornar esse momento ainda mais inesquecível. Role a página e confirme sua presença no RSVP. Esperamos por vocês!<br/>Julia e Guilherme
</p>
      </div>
   </section>
   {/* RSVP Section */}
   <section id="rsvp" className="h-screen flex items-center justify-center text-white bg-cover bg-center 
      sm:bg-[url('/images/rsvp_desktop_background.png')] bg-[url('/images/rsvp_mobile_background.png')]">
    <div className="relative -mt-[500px]"> {/* Moves the image up */}
  <Link href="/rsvp" passHref>
    <Image 
      src="/images/rsvp_button.gif" // ✅ Update with your actual image path
      alt="RSVP Now"
      width={350}  // Increased width
      height={100} // Increased height
      className="cursor-pointer transition-transform transform hover:scale-110"
    />
  </Link>
</div>
   </section>
</div>
);
}