import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { customTheme } from "../../styles/theme";
import { PageLinkList } from "../page-link-list/page-link-list.container";
import { SidebarProps } from "./sidebar.container.typing";
import { FaProjectDiagram } from "react-icons/fa";
import { IProject } from "../../typings/models/project-model.typing";
import { BoxLink } from "../../components/box-link/box-link.component";

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
          mr="3"
          ml="4"
          src="../../assets/img/logoChill.svg"
          boxSize="30px"
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
      h="2px"
      bgGradient="linear(to-r, #E0E1E200, #E0E1E2, #E0E1E228)"
    />
  );

  const renderProjectSection = (
    <BoxLink
      icone={<FaProjectDiagram color="white" />}
      link="/projects"
      title="Projects"
    />
  );

  const pageLabel = (
    <Text
      mb="5"
      mt="5"
      fontWeight={customTheme.font_weight.normal}
      fontSize="large"
    >
      {t("sidebarContainer:pages")}
    </Text>
  );

  const renderPageSection = (project: IProject) => {
    return (
      <>
        {pageLabel}
        <PageLinkList key={project.name} pageList={project.pages} />
      </>
    );
  };

  return (
    <>
      {headerLogo}
      {divider}
      {renderProjectSection}
      {p.project && renderPageSection(p.project)}
    </>
  );
}

export { Sidebar };
