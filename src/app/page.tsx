"use client"; // Ensure it's a client component
export default function RSVPPage() {
  return (
    <section 
      className="h-screen flex items-center justify-center px-4 bg-cover bg-center
      bg-[#f06faa] sm:bg-[#f7f7f7] 
      bg-[url('/images/rsvp_form_mobile_background.svg')] sm:bg-[url('/images/rsvp_form_desktop_background.png')]"
    >
      <div className="p-6 w-full max-w-3xl flex justify-center">
        <div className="w-full">
          {/* Direct Google Forms Embed with Responsive iframe */}
          <div className="my-6 relative" style={{ paddingBottom: '120%' }}>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdjLk0rYy106K7PqcVb6IHwx_MFfIhd0qh9PHdLMAd5Y7n66w/viewform?embedded=true"
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="RSVP Google Form"
            >
              Carregando…
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
