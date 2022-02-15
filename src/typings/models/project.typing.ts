import { IPage } from "./page.typing";

interface ICountry {
  name: string;
  code: string;
}

export interface IProject {
  name: string;
  apiKey: string;
  pages: IPage[];
  supportedLanguages: ICountry[];
}
