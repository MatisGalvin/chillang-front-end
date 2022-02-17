import { Button, Flex, Text } from "@chakra-ui/react";
import { customTheme } from "styles";

function BigButton(p: {
  border: string;
  icone?: JSX.Element;
  label: string | undefined;
  onClick?: () => void;
}) {
  return (
    <Button
      height="120px"
      width="280px"
      backgroundColor="white"
      border={p.border}
      borderColor={customTheme.colors.blue_chillang}
      borderRadius="lg"
      mr="20"
      onClick={p.onClick}
    >
      <Flex alignItems="center" justifyContent="center">
        {p.icone}
        <Text color={customTheme.colors.blue_chillang} fontWeight="bold">
          {p.label}
        </Text>
      </Flex>
    </Button>
  );
}

export { BigButton };
