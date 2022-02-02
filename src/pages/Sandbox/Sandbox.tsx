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

function Sandbox() {
  return (
    <>
      <Tabs variant="enclosed">
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

export { Sandbox };
