import { IPage } from "./page.typing";

export interface IProject {
  name: string;
  apiKey: string;
  pages: IPage[];
}
