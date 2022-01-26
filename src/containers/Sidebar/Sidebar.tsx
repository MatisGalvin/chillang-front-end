import { useTranslation } from "react-i18next";
import { Page } from "../../components/Page/Page";
import { SwitchLanguage } from "../../components/SwitchLanguage/SwitchLanguage";
import { IUser } from "../../interfaces/models/user.typing";
import { SidebarProps } from "./Sidebar.typing";

function Sidebar(p: SidebarProps) {
  const { t } = useTranslation();
  console.log(p);
  return (
    <>
      <h1>
        {p.user.username}, {t("Welcome")}
      </h1>
      <SwitchLanguage />
      {p.user && (
        <h2>
          {t("ProjectTarget")} : {p.user.projects[0].name}
        </h2>
      )}

      {p.user.projects.map((project) => {
        console.log("here", project.name);
        return <Page key={project.name} pageList={project.pages} />;
      })}
    </>
  );
}

export { Sidebar };
