import { useTranslation } from "react-i18next";
function Home() {
  const { t } = useTranslation("homePage");
  return <h1>{t("homePage:pickAPage")}</h1>;
}

export { Home };
