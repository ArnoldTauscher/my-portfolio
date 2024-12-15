import React, { useReducer, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import "altcha";

import { Input, Textarea, Button } from "./ContactFormComponents";
import { handleSubmit } from "./contactFormSubmit";
import { validateForm } from "./validation";
import {
  TITLE,
  PROMO,
  BUTTON_TEXT,
  SUBMITTED,
  PLACEHOLDER,
  ERROR_MESSAGE,
} from "../../constant/contactFormData";

const ALTCHA_CHALLENGEURL = import.meta.env.VITE_ALTCHA_CHALLENGEURL;

// Reducer für den Formularstatus
// Dieser Reducer verwaltet die Aktualisierung, Fehlerbehandlung und Zurücksetzung des Formulars
const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    case "SET_ERRORS":
      return { ...state, errors: action.errors };
    case "RESET_FORM":
      return { name: "", email: "", message: "", errors: {} };
    default:
      return state;
  }
};

export const ContactForm = ({ isContactFormOpen, closeContactForm }) => {
  // Verwendung von useReducer für komplexe Statusverwaltung
  const [formState, dispatch] = useReducer(formReducer, {
    name: "",
    email: "",
    message: "",
    errors: {},
  });

  // Zustände für Ladezustand, Fehler und Absendestatus
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  // Callback zur Formularvalidierung
  const validateFormCallback = useCallback(() => {
    const errors = validateForm(formState);
    // console.log('Formularfehler:', errors); // debugging
    dispatch({ type: "SET_ERRORS", errors });
    return Object.values(errors).every((error) => error === "");
  }, [formState]);

  // Callback für das Absenden des Formulars
  const onSubmit = useCallback(
    async (e) => {
      //console.log("onSubmit aufgerufen"); // debugging
      e.preventDefault();
      if (validateFormCallback()) {
        //console.log("Formular ist gültig, versuche zu senden"); // debugging
        // Überprüfen Sie hier die altcha-Validierung
        const altchaElement = document.querySelector("altcha-widget");
        if (altchaElement && altchaElement.verify()) {
          try {
            //console.log("Rufe handleSubmit auf"); // debugging
            await handleSubmit(
              formState.name,
              formState.email,
              formState.message,
              setLoading,
              setError,
              () => dispatch({ type: "RESET_FORM" }),
              setIsSubmitted
            );
            //console.log("handleSubmit erfolgreich abgeschlossen"); // debugging
          } catch (error) {
            //console.error("Fehler in handleSubmit:", error);
            setError(`${ERROR_MESSAGE.SUBMIT}`);
          }
        } else {
          setError(`${ERROR_MESSAGE.BOT}`);
        }
      } else {
        console.log("Formularvalidierung fehlgeschlagen", formState);
      }
    },
    [formState, validateFormCallback, setLoading, setError, setIsSubmitted]
  );

  // Callback für Änderungen in den Eingabefeldern
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({ type: "UPDATE_FIELD", field: name, value });
  }, []);

  // Memoisierter Formularinhalt für bessere Leistung
  const formContent = useMemo(
    () => (
      <form noValidate className="flex flex-col space-y-4" onSubmit={onSubmit}>
        <Input
          id="contact-name"
          name="name"
          type="text"
          value={formState.name}
          onChange={handleInputChange}
          placeholder={PLACEHOLDER.NAME}
          error={formState.errors.name}
        />
        <Input
          id="contact-email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleInputChange}
          placeholder={PLACEHOLDER.EMAIL}
          error={formState.errors.email}
        />
        <Textarea
          id="contact-message"
          name="message"
          value={formState.message}
          onChange={handleInputChange}
          placeholder={PLACEHOLDER.CONTACT_MESSAGE}
          error={formState.errors.message}
        />
        <div className="flex space-x-4">
          <altcha-widget challengeurl={`${ALTCHA_CHALLENGEURL}`}></altcha-widget>
          <Button type="submit" disabled={loading}>
            {loading ? BUTTON_TEXT.FORM_LOADING : BUTTON_TEXT.FORM_SEND}
          </Button>
          <Button onClick={closeContactForm} variant="secondary">
            {BUTTON_TEXT.SECTION_CANCEL}
          </Button>
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    ),
    [formState, loading, error, handleInputChange, closeContactForm, onSubmit]
  );

  // Wenn das Formular nicht geöffnet ist, wird nichts gerendert
  if (!isContactFormOpen) return null;

  // Hauptrender-Funktion
  return (
    <div className="overlay">
      <div className="bg-gray-800 m-6 p-8 rounded-2xl shadow-lg max-w-[1000px] w-[90%] max-h-[100vh] overflow-y-auto box-border">
        <h1 className="text-start text-2xl text-white">{TITLE}</h1>
        <p className="mb-4">
          {PROMO.TEXT_ONE}{" "}
          <span className="line-through">{PROMO.TEXT_TWO}</span>{" "}
          {PROMO.TEXT_THREE}
        </p>
        {isSubmitted ? (
          <>
            <p>{SUBMITTED}</p>
            <Button onClick={closeContactForm} variant="secondary">
              {BUTTON_TEXT.SECTION_CLOSE}
            </Button>
          </>
        ) : (
          formContent
        )}
      </div>
    </div>
  );
};

ContactForm.propTypes = {
  isContactFormOpen: PropTypes.bool.isRequired,
  closeContactForm: PropTypes.func.isRequired,
};
