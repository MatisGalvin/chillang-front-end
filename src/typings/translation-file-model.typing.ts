export interface ITranslationFile {
  _id: string;
  lang: string;
  data: [
    {
      id: string;
      value: string;
      description: string;
    }
  ];
}
