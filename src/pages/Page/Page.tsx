import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  Flex,
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
import { IPageProps } from "./Page.typing";
import { TranslationTabList } from "../../containers/TranslationTabList/TranslationTabList";

/**
 * Component that returns a breadcrumb based on the current location,
 * the banner for the progress, and the translation tab
 */

function Page(p: IPageProps) {
  const { t } = useTranslation("pagePage");
  const params = useParams<{ _id: string }>();
  const [page, setPage] = useState<IPage>();
  useAsyncEffect(async () => {
    const getOnePage = await axios.get<IPage>(
      `${SERVER_URL}/pages/${params._id}`
    );

    setPage(getOnePage.data);
  }, [params._id]);

  const breadcrumb = (
    <Breadcrumb marginBottom="5" pt="5" ml="5">
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

  return (
    <>
      {breadcrumb}
      {banner}
      <TranslationTabList
        supportedLanguages={p.supportedLanguages}
        page={page}
      />
    </>
  );
}

export { Page };
