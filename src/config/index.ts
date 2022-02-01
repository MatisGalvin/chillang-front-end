import { ISupportedLanguages } from "./SupportedLanguages.typing";
const SERVER_URL = "http://localhost:3090";

const SUPPORTED_LANGUAGES: ISupportedLanguages[] = [
  {
    code: "fr",
    name: "Français",
    country_code: "fr",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
];

export { SERVER_URL, SUPPORTED_LANGUAGES };
