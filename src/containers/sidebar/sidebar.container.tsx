import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { customTheme } from "styles";
import { PageLinkList } from "containers";
import { FaProjectDiagram } from "react-icons/fa";
import { IProject } from "typings";
import { BoxLink } from "components";
import { getCurrentProject, useAppSelector } from "models";

/**
 * Component that contains the header logo, a divider, the name of the current project and the pages
 * associated to it.
 * The current project is set in the project-list-page by clicking on the button associeted to it.
 */

function Sidebar(p: { project: IProject | undefined }) {
  const { t } = useTranslation("sidebarContainer");

  const currentProject = useAppSelector(getCurrentProject);

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
      icon={<FaProjectDiagram color="white" />}
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
      {currentProject && renderPageSection(currentProject)}
    </>
  );
}

export { Sidebar };
