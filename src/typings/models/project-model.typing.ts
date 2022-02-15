import { IPage } from "./page-model.typing";

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
