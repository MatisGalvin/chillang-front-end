import { Stack, Button } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { customTheme } from "../../styles/theme";
import { ISwitchLanguageProps } from "./switch-language.component.typing";

/**
 * Component that takes an aray of languages, and display on the same row, a button for each language.
 * On click, it will change the current language thanks to the "code" property.
 */

function SwitchLanguage(availableLanguagues: ISwitchLanguageProps[]) {
  const { i18n } = useTranslation();
  return (
    <Stack spacing={4} direction="row" align="center">
      {availableLanguagues.map(({ code, name }) => (
        <Button
          key={name}
          colorScheme={customTheme.colors.blue_chillang}
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
