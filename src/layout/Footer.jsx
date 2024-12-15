import { useState } from "react";

import { useTextGradientUpdater } from "../hooks/useGradientUpdater";
import { ContactForm } from "../components/contactComponents/ContactForm";

import { COMMON_TEXT } from "../constant";

const Footer = () => {
  const gradientRef = useTextGradientUpdater();
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
    <footer className="relative flex items-center border-t border-solid border-t-white bg-errie-black text-white">
      <div className="flex w-full flex-col items-center justify-between gap-y-6 px-4 py-4 sm:flex-row md:py-6 lg:py-8 mx-auto max-w-[1320px]">
        <h2
          className="text-center text-xl font-semibold font-montserrat gradi-theme-text md:text-2xl lg:text-3xl"
          ref={gradientRef}
        >
          {COMMON_TEXT.NAME}
        </h2>
        <button
          title={COMMON_TEXT.CONTACT_FORM_BUTTON_TITLE}
          className="open-contact-form-btn-base"
          onClick={openContactForm}
        >
          {COMMON_TEXT.CONTACT_FORM_BUTTON_TEXT}
        </button>
        {isContactFormOpen && (
          <ContactForm
            isContactFormOpen={isContactFormOpen}
            isSubmitted={isSubmitted}
            closeContactForm={closeContactForm}
            handleFormSubmit={handleFormSubmit}
          />
        )}
      </div>
    </footer>
  );
};

export default Footer;
