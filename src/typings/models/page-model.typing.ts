import { ITranslationFile } from "./translation-file-model.typing";

export interface IPage {
  name: string;
  translationFiles: ITranslationFile[];
  _id: string;
}
