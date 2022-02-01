import { useTranslation } from "react-i18next";

function NotFound404() {
  const { t } = useTranslation("notFound404Page");

  return <h1>{t("notFound404Page:notFound")}</h1>;
}

export { NotFound404 };
