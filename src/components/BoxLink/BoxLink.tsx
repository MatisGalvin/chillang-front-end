import { IBoxLinkProps } from "./BoxLink.typing";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { customTheme } from "../../styles/theme";

function BoxLink(p: IBoxLinkProps) {
  let resolved = useResolvedPath(p.link);
  let match = useMatch({ path: resolved.pathname, end: true });

  const displayIconeIfIconePropsIsSet = (
    <Box
      backgroundColor={customTheme.colors.blue_chillang}
      px="2"
      py="2"
      rounded="lg"
    >
      {p.icone}
    </Box>
  );

  return (
    <Box
      marginBottom="3"
      marginTop="5"
      borderRadius="lg"
      boxShadow="md"
      style={
        match
          ? { borderColor: "rgba(79, 209, 197, 0.5)" }
          : { borderColor: "rgba(255, 255, 255, 0.3" }
      }
      w="100%"
      p={4}
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
        <Flex display="flex" alignItems="center" justifyContent="flex-start">
          {p.icone && displayIconeIfIconePropsIsSet}
          <Text ml="2">{p.title}</Text>
        </Flex>
      </Link>
    </Box>
  );
}

export { BoxLink };