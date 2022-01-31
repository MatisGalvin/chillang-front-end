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
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { SERVER_URL } from "../../config";
import { IPage } from "../../interfaces/models/page.typing";
import { customTheme } from "../../styles/theme";
import { VscFile } from "react-icons/vsc";

function Page() {
  const params = useParams();
  const [page, setPage] = useState<IPage>();

  useEffect(() => {
    axios.get<IPage>(`${SERVER_URL}/page/${params.id}`).then((response) => {
      setPage(response.data);
      console.log(response.data);
    });
  }, [params.id]);

  return (
    <>
      <Breadcrumb marginBottom={customTheme.margin.large}>
        <BreadcrumbItem>
          <BreadcrumbLink
            fontWeight={customTheme.font_weight.light}
            color={customTheme.colors.gray}
            as={Link}
            to={"/"}
          >
            Page
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink fontWeight={customTheme.font_weight.normal}>
            {page?.name}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
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
            Progression
          </Text>
        </Box>
      </Box>
      <Box
        backgroundColor={customTheme.colors.white}
        padding={customTheme.paddingAround.normal}
        marginTop={customTheme.margin.large}
        borderRadius={customTheme.border_radius.medium}
      >
        <Tabs variant="line">
          <TabList>
            <Tab>English</Tab>
            <Tab>French</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>Contenu anglais</p>
            </TabPanel>
            <TabPanel>
              <p>Contenu francais</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
}

export { Page };
