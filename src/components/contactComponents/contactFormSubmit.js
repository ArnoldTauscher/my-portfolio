import axios from "axios";
import { ERROR_MESSAGE } from "../../constant/contactFormData";

// Basis-URL für API-Anfragen aus den Umgebungsvariablen
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * Funktion zum Handhaben der Formular-Übermittlung
 * @param {string} name - Name des Benutzers
 * @param {string} email - E-Mail-Adresse des Benutzers
 * @param {string} message - Nachricht des Benutzers
 * @param {function} setLoading - Funktion zum Setzen des Ladezustands
 * @param {function} setError - Funktion zum Setzen des Fehlerzustands
 * @param {function} resetForm - Funktion zum Zurücksetzen des Formulars
 * @param {function} setIsSubmitted - Funktion zum Setzen des Übermittlungsstatus
 */
export const handleSubmit = async (
  name,
  email,
  message,
  setLoading,
  setError,
  resetForm,
  setIsSubmitted
) => {
  //console.log('handleSubmit aufgerufen mit:', { name, email, message }); // debugging
  setLoading(true);
  setError(null);

  try {
    //console.log('Versuche Anfrage zu senden an:', `${API_BASE_URL}/contact`); // debugging
    const response = await axios.post(`${API_BASE_URL}/contact`, {
      name,
      email,
      message,
    });

    //console.log('Antwort erhalten:', response); // debugging

    if (response.status === 200 || response.status === 201) {
      //console.log('Anfrage erfolgreich, setze Formular zurück'); // debugging
      resetForm();
      setIsSubmitted(true);
      setLoading(false);
      return;
    }
  } catch (error) {
    //console.error('Fehler beim API-Aufruf:', error); // debugging
    if (error.response) {
      // Fehler mit Serverantwort
      setError(
        `Fehler ${error.response.status}: ${
          error.response.data.message || ERROR_MESSAGE
        }`
      );
    } else if (error.request) {
      // Fehler ohne Serverantwort
      setError(`${ERROR_MESSAGE.SERVER}`);
    } else {
      // Unerwarteter Fehler
      setError(ERROR_MESSAGE.UNEXPECTED);
    }
  }

  setLoading(false);
};
