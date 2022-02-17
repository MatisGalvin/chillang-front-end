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
import { BigButton } from "components";
import {
  selectProjectList,
  useAppSelector,
  setCurrentProjectIndex,
  useAppDispatch,
} from "models";

function ProjectPage() {
  const dispatch = useAppDispatch();
  const { t } = useTranslation("workspaceContainer");

  const userProjectList = useAppSelector(selectProjectList);

  if (!userProjectList) {
    return <h1>Loading...</h1>;
  }

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
          color={
            userProjectList.length > 0
              ? customTheme.colors.blue_chillang
              : customTheme.colors.gray_project
          }
          fontSize="2xl"
          fontWeight="bold"
          my="20"
        >
          {userProjectList.length > 0
            ? t("selectProject")
            : t("selectProjectIfNone")}
        </Text>
        <BigButton
          border="2px dotted"
          icone={<FiPlus size="42" color={customTheme.colors.blue_chillang} />}
          label={t("createNewProjectButton")}
        />
        <Box mt="14">
          {userProjectList.map((project, projectIndex) => {
            return (
              <BigButton
                key={project.name}
                border="4px solid"
                label={project.name}
                onClick={() => {
                  dispatch(setCurrentProjectIndex(projectIndex));
                }}
              />
            );
          })}
        </Box>
      </Box>
    </>
  );
}

export { ProjectPage };
