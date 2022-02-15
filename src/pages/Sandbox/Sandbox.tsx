import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";
import { customTheme } from "../../styles/theme";

function Sandbox() {
  return (
    <>
      <Box margin="10">
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

      <Box margin="10">
        <Button
          height="120px"
          width="280px"
          backgroundColor="white"
          border=" 4px solid"
          borderColor={customTheme.colors.blue_chillang}
          borderRadius="lg"
        >
          <Text color={customTheme.colors.blue_chillang} fontWeight="bold">
            Client react app 1
          </Text>
        </Button>
      </Box>
    </>
  );
}

export { Sandbox };
