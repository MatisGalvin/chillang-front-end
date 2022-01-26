const SERVER_URL = "http://localhost:3090";
const SUPPORTED_LANGUAGES: {
  code: string;
  name: string;
  country_code: string;
}[] = [
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
