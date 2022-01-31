import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { customTheme } from "../../styles/theme";
import { PageLinkList } from "../PageLinkList/PageLinkList";
import { SidebarProps } from "./Sidebar.typing";

function Sidebar(p: SidebarProps) {
  const { t } = useTranslation();

  const headerLogo = (
    <header>
      <Flex alignItems="center">
        <Image
          marginRight="3"
          src="../../assets/img/logoChill.svg"
          boxSize="23px"
        />
        <Text
          fontSize={customTheme.font_size.normal}
          fontWeight={customTheme.font_weight.normal}
        >
          {t("mainTitle")}
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
    ></Box>
  );

  const title = (
    <Text
      fontWeight={customTheme.font_weight.normal}
      fontSize={customTheme.font_size.medium}
    >
      {t("pages")}
    </Text>
  );

  return (
    <>
      {headerLogo}
      {divider}
      {p.user && title}
      {p.user?.projects.map((project) => {
        return <PageLinkList key={project.name} pageList={project.pages} />;
      })}
    </>
  );
}

export { Sidebar };
