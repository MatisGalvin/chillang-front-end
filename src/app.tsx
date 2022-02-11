import { Sidebar } from "./containers/Sidebar/Sidebar";
import axios from "axios";
import { SERVER_URL } from "./config";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Workspace } from "./containers/Workspace/Workspace";
import { Grid, GridItem } from "@chakra-ui/react";
import { IProject } from "./typings/models/project.typing";
import useAsyncEffect from "use-async-effect";
import { customTheme } from "./styles/theme";

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
  const [user, setUser] = useState();

  useAsyncEffect(async () => {
    const uniqUser = await axios.get(
      `${SERVER_URL}/users/61e80f089810ec398b36e8f2
      `
    );
    setUser(uniqUser.data._id);
    if (uniqUser.data.projects.length === 0) {
      setProject(undefined);
    } else {
      setProject(uniqUser.data.projects[0]);
    }
  }, []);

  return (
    <Grid
      backgroundColor={customTheme.colors.bg_default}
      p="5"
      templateRows="1fr"
      templateColumns="250px 1fr"
      height="100vh"
    >
      <GridItem p="2" w="100%">
        <Sidebar project={project} />
      </GridItem>
      <GridItem p="2" w="100%">
        <Workspace project={project} />
      </GridItem>
    </Grid>
  );
}
