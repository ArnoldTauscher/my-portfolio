import { IoMdClose } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import { useState } from "react";

import { useTextGradientUpdater } from "../hooks/useGradientUpdater";
import { ContactForm } from "../components/contactComponents/ContactForm";

import { COMMON_TEXT, HEADER_TEXT, NAV_TEXT } from "../constant";

const Header = () => {
  const gradientRef = useTextGradientUpdater();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const openContactForm = () => {
    setIsContactFormOpen(true);
    setIsSubmitted(false);
  };

  const closeContactForm = () => {
    setIsContactFormOpen(false);
  };

  const handleFormSubmit = () => {
    setIsSubmitted(true);
  };

  const renderNavItems = () =>
    NAV_TEXT.NAV_ITEMS.map((item) => (
      <li key={item.id} className="text-navbar">
        <a
          href={`#${item.id}`}
          className="p-1 rounded-md transition-all duration-200 focus:ring-2 focus:ring-vibrant-pink focus:outline-none"
        >
          {item.text}
        </a>
      </li>
    ));

  return (
    <header className="relative flex flex-col text-white after:absolute after:left-0 after:top-[90%] after:h-[200px] after:w-[200px] after:rounded-full after:bg-grad-theme-135 after:blur-[70px] after:content-[''] md:after:h-[300px] md:after:w-[300px] xl:after:h-[520px] xl:after:w-[520px] before:absolute before:right-0 before:top-[60%] before:h-[200px] before:w-[200px] before:rounded-full before:bg-grad-theme-135 before:blur-[70px] before:content-[''] md:before:h-[300px] md:before:w-[300px] xl:before:h-[520px] xl:before:w-[520px]">
      <div className="relative mx-auto flex w-full max-w-[1320px] items-center justify-between px-4 py-[30px]">
          {/* Menü-Taste für mobile Ansicht - AUSSERHALB des Nav-Containers */}
  <button
    type="button"
    onClick={toggleNavbar}
    title="Navigationsmenü öffnen"
    className={`
      lg:hidden 
      absolute top-[23px] right-5 z-[60]
      transition-all duration-300 ease-in-out 
      p-1 rounded-md 
      focus:ring-2 focus:ring-vibrant-pink focus:outline-none
      ${isNavbarOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}
    `}
  >
    <MdMenu size={32} />
  </button>

  <div className="flex items-center gap-x-9">
    <nav
      className={`
        fixed right-0 top-0 z-50 h-full w-full sm:w-[300px] 
        bg-errie-black p-5 
        transition-transform duration-300 ease-in-out 
        lg:relative lg:right-auto lg:top-auto lg:w-auto lg:bg-transparent lg:p-0 
        ${isNavbarOpen ? "translate-x-0 shadow-navbar" : "translate-x-full lg:translate-x-0"}
      `}
    >
            <div className="mb-10 flex justify-end transition-all duration-300 ease-in-out hover:opacity-80 lg:hidden">
              <button
                type="button"
                onClick={toggleNavbar}
                title="Navigationsmenü schließen"
                className="p-1 rounded-md focus:ring-2 focus:ring-vibrant-pink focus:outline-none"
              >
                <IoMdClose size={32} />
              </button>
            </div>
            <ul className="flex flex-col gap-y-5 text-center lg:flex-row lg:items-center lg:gap-x-10 xl:gap-x-12">
              {renderNavItems()}
            </ul>
            {/* Kontaktformular-Taste in der mobilen Ansicht */}
            <div className="mt-6 flex flex-col items-center gap-y-5 lg:hidden">
              <button
                title={COMMON_TEXT.CONTACT_FORM_BUTTON_TITLE}
                className="w-full open-contact-form-btn-base"
                onClick={openContactForm}
              >
                {COMMON_TEXT.CONTACT_FORM_BUTTON_TEXT}
              </button>
            </div>
          </nav>
        </div>

        {/* Kontaktformular-Taste in der Desktop-Version */}
        <div className="hidden items-center gap-x-5 lg:flex lg:gap-x-6 xl:gap-x-7">
          <button
            title={COMMON_TEXT.CONTACT_FORM_BUTTON_TITLE}
            className="open-contact-form-btn-base"
            onClick={openContactForm}
          >
            {COMMON_TEXT.CONTACT_FORM_BUTTON_TEXT}
          </button>
        </div>
      </div>
      
      {isContactFormOpen && (
        <ContactForm
          isContactFormOpen={isContactFormOpen}
          isSubmitted={isSubmitted}
          closeContactForm={closeContactForm}
          handleFormSubmit={handleFormSubmit}
        />
      )}
      <div className="relative z-10 mx-auto my-[60px] flex w-[90%] max-w-[1200px] flex-1 flex-col items-start justify-center px-4 font-montserrat">
        <h1
          className="mb-[40px] text-4xl font-bold leading-[1.25] gradi-theme-text lg:text-5xl xl:text-[64px]"
          ref={gradientRef}
        >
          {COMMON_TEXT.NAME}
        </h1>
        <p className="mb-[20px] text-base md:text-lg lg:text-xl">
          {HEADER_TEXT.DESCRIPTION_1}
        </p>
        <p className="mb-[20px] text-base md:text-lg lg:text-xl">
          {HEADER_TEXT.DESCRIPTION_2}.
        </p>
      </div>
    </header>
  );
};

export default Header;
