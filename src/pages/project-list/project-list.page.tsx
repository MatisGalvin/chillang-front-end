import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
} from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";
import { customTheme } from "styles";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IProject } from "typings";
import { ButtonProjectList } from "components";

function ProjectList(p: { projectList: IProject | undefined }) {
  const { t } = useTranslation("workspaceContainer");

  const breadcrumb = (
    <Breadcrumb p="5" separator="/">
      <BreadcrumbItem>
        <BreadcrumbLink
          fontWeight={customTheme.font_weight.light}
          color={customTheme.colors.gray}
          as={Link}
          to="/"
        >
          {t("home")}
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink>{t("projects")}</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );

  return (
    <>
      {breadcrumb}
      <Box
        width="100%"
        p="5"
        backgroundColor="white"
        borderRadius="xl"
        boxShadow="lg"
      >
        <Text
          textAlign="center"
          color={customTheme.colors.blue_chillang}
          fontSize="2xl"
          fontWeight="bold"
          my="20"
        >
          {p.projectList ? t("selectProject") : t("selectProjectIfNone")}
        </Text>
        <ButtonProjectList
          border="2px dotted"
          icone={<FiPlus size="42" color={customTheme.colors.blue_chillang} />}
          label={t("createNewProjectButton")}
        />
        <Box
          mt="4"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <ButtonProjectList border="4px solid" label={p.projectList?.name} />
        </Box>
      </Box>
    </>
  );
}

export { ProjectList };
