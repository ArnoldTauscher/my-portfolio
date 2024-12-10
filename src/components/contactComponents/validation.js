import { ERROR_MESSAGE } from "../../constant/contactFormData";

// Regulärer Ausdruck für E-Mail-Validierung
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Regulärer Ausdruck für Namensvalidierung
const NAME_REGEX = /^[a-zA-Z\s'-]{2,50}$/;

/**
 * Validiert eine E-Mail-Adresse
 * @param {string} email - Die zu validierende E-Mail-Adresse
 * @returns {string} Fehlermeldung oder leerer String bei gültiger E-Mail
 */
export const validateEmail = (email) => {
  if (!email) return `${ERROR_MESSAGE.EMAIL_REQUIRED}`;
  if (!EMAIL_REGEX.test(email)) return `${ERROR_MESSAGE.EMAIL}`;
  return '';
};

/**
 * Validiert einen Namen
 * @param {string} name - Der zu validierende Name
 * @returns {string} Fehlermeldung oder leerer String bei gültigem Namen
 */
export const validateName = (name) => {
  if (!name) return `${ERROR_MESSAGE.NAME_REQUIRED}`;
  if (!NAME_REGEX.test(name)) return `${ERROR_MESSAGE.NAME}`;
  return '';
};

/**
 * Validiert eine Nachricht
 * @param {string} message - Die zu validierende Nachricht
 * @returns {string} Fehlermeldung oder leerer String bei gültiger Nachricht
 */
export const validateMessage = (message) => {
  if (!message) return `${ERROR_MESSAGE.MESSAGE_REQUIRED}`;
  if (message.trim().length < 10) return `${ERROR_MESSAGE.MESSAGE_SHORT}`;
  if (message.length > 1000) return `${ERROR_MESSAGE.MESSAGE_LONG}`;
  return '';
};

/**
 * Validiert das gesamte Formular
 * @param {Object} formData - Die zu validierenden Formulardaten
 * @param {string} formData.name - Der Name
 * @param {string} formData.email - Die E-Mail-Adresse
 * @param {string} formData.message - Die Nachricht
 * @returns {Object} Ein Objekt mit Fehlermeldungen für jedes Feld
 */
export const validateForm = ({ name, email, message }) => {
  //console.log('Validiere Formulardaten', { name, email, message }); // debugging

  return {
    name: validateName(name),
    email: validateEmail(email),
    message: validateMessage(message)
  };
};

