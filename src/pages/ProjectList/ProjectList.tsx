import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";
import { customTheme } from "../../styles/theme";
import { Link } from "react-router-dom";
import { IProjectList } from "./ProjectList.typing";

const breadcrumb = (
  <Breadcrumb p="5" separator="/">
    <BreadcrumbItem>
      <BreadcrumbLink
        fontWeight={customTheme.font_weight.light}
        color={customTheme.colors.gray}
        as={Link}
        to="/"
      >
        Home
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <BreadcrumbLink>Project</BreadcrumbLink>
    </BreadcrumbItem>
  </Breadcrumb>
);

function ProjectList(p: IProjectList) {
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
          Select your project
        </Text>
        <Button
          height="120px"
          width="280px"
          backgroundColor="white"
          border=" 2px dotted"
          borderColor={customTheme.colors.blue_chillang}
          borderRadius="lg"
        >
          <Flex alignItems="center" justifyContent="center">
            <FiPlus size="42" color={customTheme.colors.blue_chillang} />
            <Text color={customTheme.colors.blue_chillang} fontWeight="bold">
              CREATE A NEW PROJECT
            </Text>
          </Flex>
        </Button>
      </Box>
    </>
  );
}

export { ProjectList };
