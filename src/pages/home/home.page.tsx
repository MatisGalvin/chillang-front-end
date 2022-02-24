import { Flex, Text } from "@chakra-ui/react";
import { getCurrentProject, useAppSelector } from "models";
import { useTranslation } from "react-i18next";
function Home() {
  const { t } = useTranslation("homePage");

  const currentProject = useAppSelector(getCurrentProject);
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <h1>{t("homePage:pickAPage")}</h1>
      <Text>
        {t("homePage:myCurrentProject")} : {currentProject?.name}
      </Text>
    </Flex>
  );
}

export { Home };
