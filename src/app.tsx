import { useEffect } from "react";
import { Workspace, Sidebar } from "containers";
import { Grid, GridItem } from "@chakra-ui/react";
import { customTheme } from "styles";
import {
  fetchUser,
  selectCurrentUser,
  useAppSelector,
  useAppDispatch,
} from "models";
/**
 * Component that used axios to request data for a specific user and stock it into the store.
 * If a user is set, it will display the sidebar (left part of the website) and
 * the workspace (right part of the website). It will send by props every informations needed by the
 * Sidebar component and the Workspace component.
 *
 * If there's no user set, it will display a loading page.
 */

export function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUser("620bd8fd456c8acf6adb4752"));
  }, [dispatch]);

  const currentUser = useAppSelector(selectCurrentUser);

  return (
    <Grid
      backgroundColor={customTheme.colors.bg_default}
      p="5"
      templateRows="1fr"
      templateColumns="250px 1fr"
      height="100vh"
    >
      <GridItem p="2" w="100%">
        <Sidebar project={currentUser?.projects?.[0]} />
      </GridItem>
      <GridItem p="2" w="100%">
        <Workspace project={currentUser?.projects?.[0]} />
      </GridItem>
    </Grid>
  );
}
