import { ICountry } from "../../constants/countryList";
import { IPage } from "../../typings/models/page.typing";

export interface ITranslationTabListProps {
  supportedLanguages: ICountry[];
  page: IPage | undefined;
}
