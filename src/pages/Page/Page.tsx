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
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { SERVER_URL } from "../../config";
import { IPage } from "../../typings/models/page.typing";
import { customTheme } from "../../styles/theme";
import { VscFile } from "react-icons/vsc";
import useAsyncEffect from "use-async-effect";
import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGUAGES } from "../../config/";
import ReactCountryFlag from "react-country-flag";

/**
 * Component that returns a breadcrumb based on the current location,
 * the banner for the progress, and the translation tab
 */

function Page() {
  const { t } = useTranslation("pagePage");
  const params = useParams();
  const [page, setPage] = useState<IPage>();

  useAsyncEffect(async () => {
    const getOnePage = await axios.get<IPage>(
      `${SERVER_URL}/page/${params.id}`
    );
    setPage(getOnePage.data);
  }, [params.id]);

  const breadcrumb = (
    <Breadcrumb marginBottom="5">
      <BreadcrumbItem>
        <BreadcrumbLink
          fontWeight={customTheme.font_weight.light}
          color={customTheme.colors.gray}
          as={Link}
          to="/"
        >
          {t("pagePage:pages")}
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink>{page?.name}</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );

  const banner = (
    <Box
      padding="3"
      pt="8"
      backgroundImage="../../../assets/img/banner.png"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      borderRadius="lg"
    >
      <Flex>
        <Box
          background="whiteAlpha.900"
          color={customTheme.colors.blue_chillang}
          marginLeft="2"
          display="flex"
          alignItems="center"
          justifyContent="center"
          padding="0 6px"
          borderRadius="xl"
          boxShadow="lg"
        >
          <VscFile size="22px" />
        </Box>
        <Text
          fontSize={customTheme.font_size.large}
          color={customTheme.colors.white}
          fontWeight="bold"
          marginLeft="5"
        >
          {page?.name}
        </Text>
      </Flex>
      <Box
        padding="5"
        borderRadius="lg"
        margin="2"
        mt="4"
        backgroundColor="whiteAlpha.800"
        boxShadow="xl"
      >
        <Text
          fontWeight="bold"
          fontSize={customTheme.font_size.medium}
          color={customTheme.colors.font_color}
        >
          {t("pagePage:progress")}
        </Text>
      </Box>
    </Box>
  );

  const translationTab = (
    <Box p="3" mt="5" borderRadius="lg">
      <Tabs variant="enclosed">
        <TabList borderColor={customTheme.colors.blue_chillang}>
          {SUPPORTED_LANGUAGES.map((lang) => {
            return (
              <Tab key={lang.code}>
                <ReactCountryFlag
                  countryCode={lang.country_code}
                  svg
                  style={{
                    width: "2em",
                    height: "2em",
                  }}
                />
                <Text ml="3" fontWeight="bold">
                  {lang.name}
                </Text>
              </Tab>
            );
          })}
        </TabList>
        <Table mt="8">
          <Thead>
            <Tr>
              <Th
                fontWeight={customTheme.font_weight.light}
                color={customTheme.colors.gray}
              >
                Translation
              </Th>
              <Th
                fontWeight={customTheme.font_weight.light}
                color={customTheme.colors.gray}
              >
                Completion
              </Th>
              <Th
                fontWeight={customTheme.font_weight.light}
                color={customTheme.colors.gray}
              >
                Identifier
              </Th>
              <Th
                fontWeight={customTheme.font_weight.light}
                color={customTheme.colors.gray}
              >
                Description
              </Th>
            </Tr>
          </Thead>
          <Tbody></Tbody>
        </Table>
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
