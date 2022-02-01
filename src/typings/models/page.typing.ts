import { ITranslationFile } from "./translationFile.typing";

export interface IPage {
  name: string;
  translationFiles: ITranslationFile[];
  _id: string;
}
