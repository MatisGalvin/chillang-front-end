import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { customTheme } from "../../styles/theme";
import { PageLinkList } from "../PageLinkList/PageLinkList";
import { SidebarProps } from "./Sidebar.typing";

/**
 * Component that contains the header logo, a divider, the name of the actual project and the pages
 * associated to it.
 */

function Sidebar(p: SidebarProps) {
  const { t } = useTranslation("sidebarContainer");

  const headerLogo = (
    <header>
      <Flex alignItems="center">
        <Image
          marginRight="3"
          src="../../assets/img/logoChill.svg"
          boxSize="23px"
        />
        <Text fontWeight={customTheme.font_weight.normal}>
          {t("sidebarContainer:mainTitle")}
        </Text>
      </Flex>
    </header>
  );

  const divider = (
    <Box
      mt="5"
      mb="5"
      h="2px"
      bgGradient="linear(to-r, #E0E1E200, #E0E1E2, #E0E1E228)"
    />
  );

  const pages = (
    <Text fontWeight={customTheme.font_weight.normal} fontSize="large">
      {t("sidebarContainer:pages")}
    </Text>
  );

  return (
    <>
      {headerLogo}
      {divider}
      {p.project && pages}
      {p.project && (
        <PageLinkList key={p.project.name} pageList={p.project.pages} />
      )}
    </>
  );
}

export { Sidebar };
