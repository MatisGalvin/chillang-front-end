import { ISwitchLanguageProps } from "../components/SwitchLanguage/SwitchLanguage.typing";

const SERVER_URL = "http://localhost:3090";
const SUPPORTED_LANGUAGES: ISwitchLanguageProps[] = [
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
