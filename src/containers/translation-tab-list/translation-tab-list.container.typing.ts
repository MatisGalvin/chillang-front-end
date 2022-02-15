import { ICountry } from "../../constants/country-list";
import { IPage } from "../../typings/models/page-model.typing";

export interface ITranslationTabListProps {
  supportedLanguages: ICountry[];
  page: IPage | undefined;
}
