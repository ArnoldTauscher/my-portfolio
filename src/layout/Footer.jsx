import { useState } from "react";

import { ContactForm } from "../components/contactComponents/ContactForm";

import { FOOTER_TEXT } from "../constant/footerData";

const Footer = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false); // Zustand für das Kontaktformular
  const [isSubmitted, setIsSubmitted] = useState(false); // Zustand für das abgeschickte Formular

  const openContactForm = () => {
    setIsContactFormOpen(true);
    setIsSubmitted(false); // Zurücksetzen des abgeschickten Zustands
  };

  const closeContactForm = () => {
    setIsContactFormOpen(false);
  };

  const handleFormSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <footer className="flex items-center bg-errie-black relative border-t-[1px] border-t-white border-solid">
      <div className="px-4 max-w-[1320px] mx-auto lg:py-8 md:py-6 py-4 flex flex-col sm:flex-row gap-y-6 items-center justify-between w-full">
        <h2 className="gradi-theme-text lg:text-3xl md:text-2xl text-xl font-montserrat font-semibold text-center">
          {FOOTER_TEXT.NAME}
        </h2>
        <button
            title="Kontaktformular öffnen"
            className="capitalize text-base font-semibold text-white transition-all duration-300 ease-in-out px-[30px] min-h-[44px] border-[1px] border-white border-solid rounded-lg inline-flex items-center justify-center text-center hover:bg-grad-theme-135 whitespace-nowrap"
            onClick={openContactForm}
          >
            {FOOTER_TEXT.BUTTON_TEXT}
          </button>
          <ContactForm
          isContactFormOpen={isContactFormOpen}
          isSubmitted={isSubmitted}
          closeContactForm={closeContactForm}
          handleFormSubmit={handleFormSubmit}
        />
      </div>
    </footer>
  );
};

export default Footer;
