"use client"; // Ensure it's a client component

import FormFacadeEmbed from "@formfacade/embed-react";

export default function RSVPPage() {
  return (
    <section 
      className="h-screen flex items-center justify-center bg-[#f06faa] px-4
      sm:bg-[#f7f7f7] bg-[url('/images/rsvp_form_desktop_background.png')] bg-cover bg-center"
    >
      <div className="p-6 w-full max-w-3xl flex justify-center">
        <div className="w-full">
          <FormFacadeEmbed
            formFacadeURL="https://formfacade.com/include/113988526065686580976/form/1FAIpQLSdjLk0rYy106K7PqcVb6IHwx_MFfIhd0qh9PHdLMAd5Y7n66w/classic.js/?div=ff-compose"
            onSubmitForm={() => console.log("Form submitted")}
          />
        </div>
      </div>
    </section>
  );
}
