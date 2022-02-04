interface ICountry {
  name: string;
  code: string;
}

export interface IPageProps {
  supportedLanguages: ICountry[];
}
