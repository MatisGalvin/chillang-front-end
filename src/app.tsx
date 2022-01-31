import { Sidebar } from "./containers/Sidebar/Sidebar";
import axios from "axios";
import { SERVER_URL } from "./config";
import { IUser } from "./interfaces/models/user.typing";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Workspace } from "./containers/Workspace/Workspace";
import { Grid, GridItem } from "@chakra-ui/react";
import { IProject } from "./interfaces/models/project.typing";
import { customTheme } from "./styles/theme";

export function App() {
  const { t } = useTranslation();

  const [user, setUser] = useState<IUser>();
  const [project, setProject] = useState<IProject | undefined>();

  useEffect(() => {
    axios
      .get<IUser>(`${SERVER_URL}/user/61e80f089810ec398b36e8f2`)
      .then((response) => {
        setUser(response.data);
        // @todo Project fix but need to be THE project target by the user on his interface
        setProject(response.data.projects[0]);
      });
  }, []);
  return (
    <>
      {user ? (
        <Grid
          p={customTheme.paddingAround.large}
          templateRows="1fr"
          templateColumns="200px 1fr"
        >
          <GridItem p={customTheme.paddingAround.normal} w="100%">
            <Sidebar user={user} />
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
