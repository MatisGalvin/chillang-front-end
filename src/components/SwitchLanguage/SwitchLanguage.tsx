import { Stack, Button } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGUAGES } from "../../config";

function SwitchLanguage() {
  const { i18n } = useTranslation();
  return (
    <Stack spacing={4} direction="row" align="center">
      {SUPPORTED_LANGUAGES.map(({ code, name }) => (
        <Button
          key={name}
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
