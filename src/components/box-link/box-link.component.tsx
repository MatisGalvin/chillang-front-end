import { Box, Flex, Text } from "@chakra-ui/react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { customTheme } from "styles";

function BoxLink(p: {
  icon?: JSX.Element;
  key?: any;
  title: string;
  link: string;
  onClick?: () => void;
}) {
  let resolved = useResolvedPath(p.link);
  let match = useMatch({ path: resolved.pathname, end: true });

  const displayIconeIfIconePropsIsSet = (
    <Box
      backgroundColor={customTheme.colors.blue_chillang}
      px="2"
      py="2"
      rounded="lg"
    >
      {p.icon}
    </Box>
  );

  return (
    <Box
      marginBottom="3"
      marginTop="5"
      borderRadius="lg"
      boxShadow="md"
      borderColor={
        match ? "rgba(79, 209, 197, 0.5)" : "rgba(255, 255, 255, 0.3"
      }
      backgroundColor={match ? "white" : "none"}
      w="100%"
      onClick={p.onClick}
    >
      <Link
        style={{
          fontWeight: match ? "bold" : "normal",
          color: match
            ? customTheme.colors.font_color
            : customTheme.colors.gray,
        }}
        to={p.link}
      >
        <Flex
          p="4"
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
        >
          {p.icon && displayIconeIfIconePropsIsSet}
          <Text ml="2">{p.title}</Text>
        </Flex>
      </Link>
    </Box>
  );
}

export { BoxLink };
