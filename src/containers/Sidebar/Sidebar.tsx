import { Page } from "../../components/Page/Page";
import { IUser } from "../../interfaces/models/user.typing";

interface SidebarProps {
  user: IUser;
}

function Sidebar(props: SidebarProps) {
  return (
    <>
      <h1>{props.user.username}, bien le bonjour.</h1>
      {props.user && (
        <h2>
          Vous êtes en train de modifier le projet :{" "}
          {props.user.projects[0].name}
        </h2>
      )}

      <Page pageList={props.user.projects[0].pages} />
    </>
  );
}

export { Sidebar };
