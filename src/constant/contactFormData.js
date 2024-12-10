export const TITLE = "Kontaktieren Sie mich";

export const PROMO = {
  TEXT_ONE:
    "Profitieren Sie exklusiv von einem der besten Junior-Webentwickler",
  TEXT_TWO: "Deutschlands",
  TEXT_THREE: "des Universums.",
};

export const PLACEHOLDER = {
  NAME: "Name",
  EMAIL: "E-Mail",
  CONTACT_MESSAGE: "Ihre Nachricht",
};

export const BUTTON_TEXT = {
  FORM_LOADING: "Wird gesendet...",
  FORM_SEND: "Absenden",
  SECTION_CLOSE: "Schließen",
  SECTION_CANCEL: "Abbrechen",
};

export const BUTTON_BASE_CLASSES = `
min-h-[50px]
font-sans
font-semibold 
text-[20px] 
leading-[28px]  
border-2
rounded-lg
cursor-pointer
px-5
transition-all 
duration-300
hover:scale-105
focus:outline-none
text-nowrap
md:text-base
ease-in-out
w-[200px]
`;

export const SUBMITTED = "Vielen Dank für Ihre Nachricht.";

export const ERROR_MESSAGE = {
  NAME_REQUIRED: "Name ist erforderlich",
  NAME: "Der Name sollte 2-50 Zeichen lang sein und nur Buchstaben, Leerzeichen, Bindestriche und Apostrophe enthalten",
  EMAIL_REQUIRED: "E-Mail ist erforderlich",
  EMAIL: "Ungültiges E-Mail-Format",
  MESSAGE_REQUIRED: "Nachricht ist erforderlich",
  MESSAGE_SHORT: "Die Nachricht ist zu kurz",
  MESSAGE_LONG: "Die Nachricht sollte 1000 Zeichen nicht überschreiten",
  SUBMIT:
    "Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
  BOT: "Bitte bestätigen Sie, dass Sie kein Bot sind.",
  SERVER: "Keine Antwort vom Server erhalten. Bitte versuchen Sie es erneut.",
  UNEXPECTED:
    "Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es erneut.",
};
