"use client"; // Ensure it's a client component
import FormFacadeEmbed from "@formfacade/embed-react";

export default function RSVPPage() {
  return (
    <section 
      className="h-screen flex items-center justify-center px-4 bg-cover bg-center
      bg-[#f06faa] sm:bg-[#f7f7f7] 
      bg-[url('/images/rsvp_form_mobile_background.svg')] sm:bg-[url('/images/rsvp_form_desktop_background.png')]"
    >
      <div className="p-6 w-full max-w-3xl flex justify-center">
        <div className="w-full max-w-[640px]">
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSdjLk0rYy106K7PqcVb6IHwx_MFfIhd0qh9PHdLMAd5Y7n66w/viewform?embedded=true"
            className="w-full h-[80vh] sm:h-[821px]"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Carregando…
          </iframe>
        </div>
      </div>
    </section>
  );
}
