import { ISupportedLanguages } from "./SupportedLanguages.typing";
const SERVER_URL = "http://localhost:3090";

const SUPPORTED_LANGUAGES: ISupportedLanguages[] = [
  {
    code: "fr",
    name: "Français",
    country_code: "FR",
  },
  {
    code: "en",
    name: "English",
    country_code: "GB",
  },
  {
    code: "it",
    name: "Italian",
    country_code: "IT",
  },
];

export { SERVER_URL, SUPPORTED_LANGUAGES };
