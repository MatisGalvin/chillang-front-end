import { useTranslation } from "react-i18next";
import { SwitchLanguage } from "../../components/SwitchLanguage/SwitchLanguage";
import { PageLinks } from "../PageLinks/PageLinks";
import { SidebarProps } from "./Sidebar.typing";

function Sidebar(p: SidebarProps) {
  const { t } = useTranslation();
  return (
    <>
      <h1>
        {p.user.username}, {t("welcome")}
      </h1>
      <SwitchLanguage />
      {p.user && (
        <h2>
          {t("projectTarget")} : {p.user.projects[0].name}
        </h2>
      )}

      {p.user.projects.map((project) => {
        return <PageLinks key={project.name} pageList={project.pages} />;
      })}
    </>
  );
}

export { Sidebar };
