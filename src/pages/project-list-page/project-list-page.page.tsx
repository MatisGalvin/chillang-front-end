import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
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
  getCurrentProject,
} from "models";

/**
 * Display the page where you can select a project if you have at least one.
 * If you don't, you can create a new one here.
 * By clicking on a button to select a project, it will put the index of this project into the store.
 * We use this index to avoid going into the entiere user's project list but select directly the
 * project associeted to this index and saving a lot's of time.
 */

function ProjectListPage() {
  const dispatch = useAppDispatch();
  const { t } = useTranslation("workspaceContainer");

  const userProjectList = useAppSelector(selectProjectList);
  const currentProject = useAppSelector(getCurrentProject);

  if (!userProjectList) {
    return <h1>{t("workspaceContainer:loading")}</h1>;
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
        <BreadcrumbLink>{t("workspaceContainer:projects")}</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );

  return (
    <>
      <Flex alignItems="center" justifyContent="space-between">
        {breadcrumb}
        <Text>
          {t("workspaceContainer:myCurrentProject")} : {currentProject?.name}
        </Text>
      </Flex>
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

export { ProjectListPage };
