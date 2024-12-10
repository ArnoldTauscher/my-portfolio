import { IoMdClose } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import { useState } from "react";

import { useTextGradientUpdater } from "../hooks/useGradientUpdater";
import { ContactForm } from "../components/contactComponents/ContactForm";

import { NAV_TEXT } from "../constant/navbarData";
import { HEADER_TEXT } from "../constant/headerData";

const Header = () => {
  const gradientRef = useTextGradientUpdater();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false); // Zustand für das Kontaktformular
  const [isSubmitted, setIsSubmitted] = useState(false); // Zustand für das abgeschickte Formular

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

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

  const renderNavItems = () =>
    NAV_TEXT.NAV_ITEMS.map((item) => (
      <li
        key={item.id}
        className="text-white text-base font-source-sans hover:scale-105 transition-all ease-in-out duration-300 font-normal whitespace-nowrap"
      >
        <a href={`#${item.id}`}>{item.text}</a>
      </li>
    ));

  return (
    <header className="text-white flex flex-col relative after:content-[''] after:bg-grad-theme-135 after:absolute xl:after:w-[520px] xl:after:h-[520px] md:after:w-[300px] md:after:h-[300px] after:w-[200px] after:h-[200px] after:top-[90%] after:left-0 after:blur-[70px] after:rounded-full before:content-[''] before:bg-grad-theme-135 before:absolute xl:before:w-[520px] xl:before:h-[520px] md:before:w-[300px] md:before:h-[300px] before:w-[200px] before:h-[200px] before:top-[60%] before:right-0 before:blur-[70px] before:rounded-full">
      <div className="max-w-[1320px] px-4 flex items-center justify-between py-[30px] mx-auto w-full relative">
        <div className="flex items-center gap-x-9">
          <nav
            className={`lg:relative lg:right-auto lg:top-auto lg:bg-transparent lg:p-0 fixed right-0 top-0 bg-errie-black h-full z-50 p-5 sm:w-[300px] w-full translate-alls ease-in-out duration-300 shadow-navbar lg:shadow-none lg:translate-x-0 ${
              isNavbarOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-end mb-10 lg:hidden hover:opacity-80 transition-all duration-300 ease-in-out">
              <button type="button" onClick={toggleNavbar}>
                <IoMdClose size={32} />
              </button>
            </div>
            <ul className="flex lg:flex-row lg:items-center xl:gap-x-12 lg:gap-x-10 gap-x-8 flex-col gap-y-5 text-center">
              {renderNavItems()}
            </ul>
            {/* Kontaktformular-Taste in der mobilen Ansicht */}
            <div className="flex flex-col gap-y-5 items-center lg:hidden mt-6">
              <button
                title="Kontaktformular öffnen"
                className="capitalize text-base font-semibold text-white transition-all duration-300 ease-in-out px-[30px] min-h-[44px] border-[1px] border-white border-solid rounded-lg inline-flex items-center justify-center text-center hover:bg-grad-theme-135 whitespace-nowrap w-full"
                onClick={openContactForm}
              >
                {HEADER_TEXT.BUTTON_TEXT} 
              </button>
            </div>
          </nav>
        </div>

        {/* Kontaktformular-Taste in der Desktop-Version */}
        <div className="lg:flex items-center xl:gap-x-7 lg:gap-x-6 gap-x-5 hidden">
          <button
            title="Kontaktformular öffnen"
            className="capitalize text-base font-semibold text-white transition-all duration-300 ease-in-out px-[30px] min-h-[44px] border-[1px] border-white border-solid rounded-lg inline-flex items-center justify-center text-center hover:bg-grad-theme-135 whitespace-nowrap"
            onClick={openContactForm}
          >
            {HEADER_TEXT.BUTTON_TEXT}
          </button>
        </div>

        {/* Menü-Taste für mobile Ansicht */}
        <button
          type="button"
          className="lg:hidden hover:opacity-80 duration-300 ease-in-out translate-all"
          onClick={toggleNavbar}
        >
          <MdMenu size={32} />
        </button>
      </div>
        <ContactForm
          isContactFormOpen={isContactFormOpen}
          isSubmitted={isSubmitted}
          closeContactForm={closeContactForm}
          handleFormSubmit={handleFormSubmit}
        />
      <div className="flex flex-col items-start justify-center max-w-[1200px] w-[90%] mx-auto font-montserrat flex-1 relative z-10 my-[60px] px-4">
        <h1
          className="gradi-theme-text font-bold xl:text-[64px] lg:text-5xl text-4xl leading-[1.25] mb-[40px]"
          ref={gradientRef}
        >
          {HEADER_TEXT.NAME}
        </h1>
        <p className="lg:text-xl md:text-lg text-base mb-[20px]">
          {HEADER_TEXT.DESCRIPTION_1}
        </p>
        <p className="lg:text-xl md:text-lg text-base mb-[20px]">
          {HEADER_TEXT.DESCRIPTION_2}.
        </p>
      </div>
    </header>
  );
};

export default Header;
