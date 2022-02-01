import { Sidebar } from "./containers/Sidebar/Sidebar";
import axios from "axios";
import { SERVER_URL } from "./config";
import { IUser } from "./interfaces/models/user.typing";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Workspace } from "./containers/Workspace/Workspace";
import { Grid, GridItem } from "@chakra-ui/react";
import { IProject } from "./interfaces/models/project.typing";
import { customTheme } from "./styles/theme";
import useAsyncEffect from "use-async-effect";

/**
 * Component that used axios to request data for a specific user.
 * If a user is set, it will display the sidebar (left part of the website) and
 * the workspace (right part of the website). It will send by props every informations needed by the
 * Sidebar component and the Workspace component.
 *
 * If there's no user set, it will display a loading page.
 */

export function App() {
  const { t } = useTranslation();
  const [project, setProject] = useState<IProject | undefined>();

  useAsyncEffect(async () => {
    const uniqUser = await axios.get<IUser>(
      `${SERVER_URL}/user/61e80f089810ec398b36e8f2`
    );
    setProject(uniqUser.data.projects[0]);
  }, []);

  return (
    <>
      {project ? (
        <Grid
          p={customTheme.paddingAround.large}
          templateRows="1fr"
          templateColumns="250px 1fr"
        >
          <GridItem p={customTheme.paddingAround.normal} w="100%">
            <Sidebar project={project} />
          </GridItem>
          <GridItem p={customTheme.paddingAround.normal} w="100%">
            <Workspace />
          </GridItem>
        </Grid>
      ) : (
        <h1>{t("loadMessage")}</h1>
      )}
    </>
  );
}
