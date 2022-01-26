import { Stack, Button } from "@chakra-ui/react";
import i18n from "../..";
import { SUPPORTED_LANGUAGES } from "../../config";

function SwitchLanguage() {
  return (
    <Stack spacing={4} direction="row" align="center">
      {SUPPORTED_LANGUAGES.map(({ code, name }) => (
        <Button
          colorScheme="teal"
          size="md"
          onClick={() => i18n.changeLanguage(code)}
        >
          {name}
        </Button>
      ))}
    </Stack>
  );
}

export { SwitchLanguage };
