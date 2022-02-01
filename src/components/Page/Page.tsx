import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { SERVER_URL } from "../../config";
import { IPage } from "../../interfaces/models/page.typing";
import { customTheme } from "../../styles/theme";
import { VscFile } from "react-icons/vsc";
import useAsyncEffect from "use-async-effect";
import { useTranslation } from "react-i18next";

/**
 * Component that returns a breadcrumb based on the current location,
 * the banner for the progress, and the translation tab
 */

function Page() {
  const { t } = useTranslation();
  const params = useParams();
  const [page, setPage] = useState<IPage>();

  useAsyncEffect(async () => {
    const getOnePage = await axios.get<IPage>(
      `${SERVER_URL}/page/${params.id}`
    );
    setPage(getOnePage.data);
  }, [params.id]);

  const breadcrumb = (
    <Breadcrumb marginBottom={customTheme.margin.large}>
      <BreadcrumbItem>
        <BreadcrumbLink
          fontWeight={customTheme.font_weight.light}
          color={customTheme.colors.gray}
          as={Link}
          to="/"
        >
          {t("pages")}
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink fontWeight={customTheme.font_weight.normal}>
          {page?.name}
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );

  const banner = (
    <Box
      padding={customTheme.paddingAround.normal}
      backgroundImage="../../../assets/img/banner.png"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      borderRadius={customTheme.border_radius.medium}
    >
      <Flex>
        <Box
          background={customTheme.colors.white}
          color={customTheme.colors.blue_chillang}
          marginLeft={customTheme.margin.mediumL}
          display="flex"
          alignItems="center"
          justifyContent="center"
          padding="0 6px"
          borderRadius={customTheme.border_radius.medium}
          boxShadow="lg"
        >
          <VscFile size="22px" />
        </Box>
        <Text
          fontSize={customTheme.font_size.large}
          color={customTheme.colors.white}
          fontWeight={customTheme.font_weight.bold}
          marginLeft={customTheme.margin.large}
        >
          {page?.name}
        </Text>
      </Flex>
      <Box
        padding={customTheme.paddingAround.normal}
        borderRadius={customTheme.border_radius.medium}
        margin={customTheme.marginAround.normal}
        backgroundColor={customTheme.colors.whiteOpacityLight}
        boxShadow="xl"
      >
        <Text
          fontWeight={customTheme.font_weight.bold}
          fontSize={customTheme.font_size.medium}
          color={customTheme.colors.font_color}
        >
          {t("progress")}
        </Text>
      </Box>
    </Box>
  );

  const translationTab = (
    <Box
      backgroundColor={customTheme.colors.white}
      padding={customTheme.paddingAround.normal}
      marginTop={customTheme.margin.large}
      borderRadius={customTheme.border_radius.medium}
    >
      <Tabs variant="line">
        <TabList>
          <Tab>{t("english")}</Tab>
          <Tab>{t("french")}</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>{t("englishContent")}</p>
          </TabPanel>
          <TabPanel>
            <p>{t("frenchContent")}</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );

  return (
    <>
      {breadcrumb}
      {banner}
      {translationTab}
    </>
  );
}

export { Page };
