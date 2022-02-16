import { ITranslationFile } from "typings";

export interface IPage {
  name: string;
  translationFiles: ITranslationFile[];
  _id: string;
}
