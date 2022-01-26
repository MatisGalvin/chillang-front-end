import { useTranslation } from "react-i18next";
import { Page } from "../../components/Page/Page";
import { SwitchLanguage } from "../../components/SwitchLanguage/SwitchLanguage";
import { IUser } from "../../interfaces/models/user.typing";

interface SidebarProps {
  user: IUser;
}

function Sidebar(props: SidebarProps) {
  const { t } = useTranslation();
  return (
    <>
      <h1>
        {props.user.username}, {t("Welcome")}
      </h1>
      <SwitchLanguage />
      {props.user && (
        <h2>
          {t("ProjectTarget")} : {props.user.projects[0].name}
        </h2>
      )}

      <Page pageList={props.user.projects[0].pages} />
    </>
  );
}

export { Sidebar };
