import { Sidebar } from "./containers/Sidebar/Sidebar";
import axios from "axios";
import { SERVER_URL } from "./config";
import { IUser } from "./interfaces/models/user.typing";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Workspace } from "./containers/Workspace/Workspace";
import { Grid, GridItem } from "@chakra-ui/react";

export function App() {
  const { t } = useTranslation();

  const [user, setUser] = useState<IUser>();
  useEffect(() => {
    axios
      .get<IUser>(`${SERVER_URL}/user/61e80f089810ec398b36e8f2`)
      .then((response) => {
        setUser(response.data);
      });
  }, []);

  return (
    <>
      {user ? (
        <>
          <Grid templateColumns="400px 1fr">
            <GridItem w="100%">
              <Sidebar user={user} />
            </GridItem>
            <GridItem w="100%">
              <Workspace />
            </GridItem>
          </Grid>
        </>
      ) : (
        <h1>{t("loadMessage")}</h1>
      )}
    </>
  );
}
