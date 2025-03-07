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
         <p className="text-xl mb-4 text-black">
            Já estamos contando os minutos para esse dia tão especial! Contamos com a presença de vocês em Itaipava para tornar esse momento ainda mais inesquecível. Role a página e confirme sua presença no RSVP. Esperamos por vocês!<br/>Julia e Guilherme
         </p>
      </div>
   </section>
   {/* Wedding Program Section */}
   <section
      id="wedding-program"
      className="h-screen flex flex-col items-center justify-center text-white bg-cover bg-center 
      sm:bg-[url('/images/wedding_program_desktop_background.svg')] bg-[url('/images/wedding_program_desktop_background.svg')] px-6"
      >
      {/* Smaller Content Box (No Background) */}
      <div  className="relative z-10 w-full max-w-lg text-center p-6 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hoteis_overlay.png')" }}>
      {/* Heading */}
      <h2 className="text-5xl font-bold mb-3 text-[#045005]">Programação</h2>
      {/* Description */}
      <p className="text-xl mb-4 text-black">
         A cerimônia e a festa ocorrerão no mesmo local, as 15:00 horas.
      </p>
      <p className="text-xl mb-4 text-black">
         Traje: Esporte fino. Recomendamos salto grosso ou sapato anabela para as mulheres. O terreno da cerimônia é irregular. O uso de gravata não é obrigatório para os homens.
      </p>
   </div>
   </section>

   {/* Hotel Section */}
   <section
  id="hoteis"
  className="relative h-screen flex flex-col items-center justify-center text-white bg-cover bg-center px-6"
>
  {/* Video Background for Mobile */}
  <video
    className="absolute inset-0 w-full h-full object-cover sm:hidden"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="/videos/hotel_mobile_background.mp4" type="video/mp4" />
  </video>

  {/* Desktop Background (GIF) */}
  <div
    className="absolute inset-0 hidden sm:block bg-cover bg-center"
    style={{ backgroundImage: "url('/images/hotel_desktop_background.gif')" }}
  ></div>

  {/* Content Box (Foreground) */}
  <div
    className="relative z-10 w-full max-w-lg text-center p-6 bg-cover bg-center"
    style={{ backgroundImage: "url('/images/hoteis_overlay.png')" }}
  >
    {/* Heading */}
    <h2 className="text-5xl font-bold mb-3 text-[#045005]">Hotel</h2>

    {/* Description */}
    <p className="text-base mb-4 text-black">
      Selecionamos algumas opções de hotéis próximos ao local do casamento para a sua comodidade.
    </p>

    {/* Hotel List */}
    <ul className="space-y-2 text-base">
      <li>
        <a
          href="https://www.labelleprovence.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#045005] hover:text-yellow-500 transition"
        >
          Pousada La Belle Provence
        </a>
      </li>
      <li>
        <a
          href="https://www.pousadaboutiqueitaipava.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#045005] hover:text-yellow-500 transition"
        >
          Pousada Boutique Itaipava
        </a>
      </li>
      <li>
        <a
          href="https://www.saison.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#045005] hover:text-yellow-500 transition"
        >
          Saison Resort & Spa
        </a>
      </li>
      <li>
        <a
          href="https://www.kastelitaipava.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#045005] hover:text-yellow-500 transition"
        >
          Kastell Itaipava
        </a>
      </li>
      <li>
        <a
          href="http://www.granjabrasil.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#045005] hover:text-yellow-500 transition"
        >
          Hotel Granja Brasil Resort
        </a>
      </li>
      <li>
        <a
          href="https://msha.ke/capimlimaoitaipava"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#045005] hover:text-yellow-500 transition"
        >
          Hotel Capim Limão
        </a>
      </li>
    </ul>
  </div>
</section>

<section
  id="how-to-get-there"
  className="relative h-screen flex flex-col items-center justify-center text-white bg-cover bg-center px-6"
>
  {/* Video Background for Mobile */}
  <video
    className="absolute inset-0 w-full h-full object-cover sm:hidden"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="/videos/how_to_get_there_mobile.mp4" type="video/mp4" />
  </video>

  {/* Desktop Background */}
  <div
    className="absolute inset-0 hidden sm:block bg-cover bg-center"
    style={{ backgroundImage: "url('/images/how_to_get_there_desktop_background.gif')" }}
  ></div>

  {/* Content Box (Foreground) */}
  <div
    className="relative z-10 w-full max-w-lg text-center p-6 bg-cover bg-center"
    style={{ backgroundImage: "url('/images/hoteis_overlay.png')" }}
  >
    <h2 className="text-5xl font-bold mb-3 text-[#f06faa]">Como Chegar</h2>
    <h4 className="text-2xl text-black">
      Rua Joaquim Agante Moço, 157 Itaipava-Petrópolis
    </h4>
  </div>
</section>

<section
      id="transportation"
      className="h-screen flex flex-col items-center justify-center text-white bg-cover bg-center 
      sm:bg-[url('/images/transportation_desktop_background.svg')] bg-[url('/images/transportation_mobile_background.svg')] px-6"
      >
      {/* Smaller Content Box (No Background) */}
      <div  className="relative z-10 w-full max-w-lg text-center p-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hoteis_overlay.png')" }}>
      {/* Heading */}
      <h2 className="text-5xl font-bold mb-3 text-[#f06faa]">Transporte</h2>
       <ul className="space-y-2 text-black sm:text-lg">
      <li>
         Rafael - (24) 99233-0882
      </li>
      <li>
         Wallace - (24) 99247-4646
      </li>
      <li>
         Guttman Uber - (24) 97403-9261
      </li>
   </ul>

      {/* Description */}
    
</div>

</section>
{/* Hair & Makeup Section */}
<section
   id="hair-makeup"
   className="h-screen flex flex-col items-center justify-center text-white bg-cover bg-center 
   sm:bg-[url('/images/hair_makeup_desktop_background.png')] bg-[url('/images/hair_makeup_mobile_background.svg')] px-6"
   >
   {/* Section Title */}
   {/* Rectangular Content Box, Positioned Further Down */}
   <div  
   className="relative z-10 w-full max-w-lg text-center p-6 bg-cover bg-center"
   style={{ backgroundImage: "url('/images/hoteis_overlay.png')" }}
   >
   <h2
   className="text-5xl font-bold mb-3 text-[#f06faa]"
   style={{ marginBottom: '10px' }} // Change '10px' to your desired value
   >
   Cabelo e Make
   </h2>
   {/* Description */}
   <p className="text-sm sm:text-lg mb-4 text-black">
      Para facilitar o seu dia, recomendamos alguns profissionais de cabelo e maquiagem próximos ao evento.
   </p>
   {/* Stylist List */}
   <ul className="space-y-2 text-base sm:text-lg">
      <li>
         <a
            href="https://www.instagram.com/necessaire_fashion/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f06faa] hover:text-yellow-500 transition"
            >
         Necessaire Fashion - (24) 98821-0081
         </a>
      </li>
      <li>
         <a
            href="https://www.instagram.com/regianemoreiramakeup/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f06faa] hover:text-yellow-500 transition"
            >
         Regiane Moreira - (24) 99239-1234
         </a>
      </li>
      <li>
         <a
            href="https://www.instagram.com/thainaborgesr.makeup/#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f06faa] hover:text-yellow-500 transition"
            >
         Thaina Borges - (22) 98878-1043
         </a>
      </li>
      <li>
         <a
            href="https://www.instagram.com/sixelmakeup/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f06faa] hover:text-yellow-500 transition"
            >
         Natália Sixel - (21) 98217-3750
         </a>
      </li>
      <li>
         <a
            href="https://www.instagram.com/biancamarques.makeup/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f06faa] hover:text-yellow-500 transition"
            >
         Bianca Marques - (24) 98805-5689
         </a>
      </li>
      <li>
         <a
            href="https://www.instagram.com/beatrizbarrosomakeup/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f06faa] hover:text-yellow-500 transition"
            >
         Beatriz Barroso - (24) 98819-7449
         </a>
      </li>
      <li>
         <a
            href="https://www.instagram.com/lucianarodriguesmakeup/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f06faa] hover:text-yellow-500 transition"
            >
         Luciana Rodrigues - (24) 99265-8580
         </a>
      </li>
      <li>
         <a
            href="https://www.instagram.com/isabellaschimithmakeup/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f06faa] hover:text-yellow-500 transition"
            >
         Isabella Schimith - (22) 98800-8933
         </a>
      </li>
   </ul>
   </div>
</section>
{/* Gifts Section */}
<section
   id="gift-list"
   className="h-screen flex flex-col items-center justify-center text-white bg-cover bg-center 
   sm:bg-[url('/images/gift_shop_desktop_background.svg')] bg-[url('/images/gift_shop_mobile_background.svg')] px-6"
   >
   {/* Section Title */}
   {/* Rectangular Content Box, Positioned Further Down */}
   <div className="relative z-10 w-full max-w-lg text-center p-6 mt-[-250px]">
    <a href="https://www.listapresentesjuliaeguilherme.com/" target="_blank" rel="noopener noreferrer">
    <h2 className="text-5xl font-bold text-[#f06faa] cursor-pointer hover:text-yellow-500 transition">
      Nossa Lista de Presentes
    </h2>
  </a>
   </div>
</section>
{/* RSVP Section */}
<section id="rsvp_main" className="h-screen flex items-center justify-center text-white bg-cover bg-center 
   sm:bg-[url('/images/rsvp_desktop_background.png')] bg-[url('/images/rsvp_mobile_background.png')]">
   <div className="relative -mt-[500px]">
      {/* Moves the image up */}
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