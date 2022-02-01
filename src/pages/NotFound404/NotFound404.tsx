import { useTranslation } from "react-i18next";

function NotFound404() {
  const { t } = useTranslation();

  return <h1>{t("error")}</h1>;
}

export { NotFound404 };
