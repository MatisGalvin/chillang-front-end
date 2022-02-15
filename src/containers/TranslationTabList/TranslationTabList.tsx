import {
  Box,
  Progress,
  Tab,
  Table,
  TabList,
  Tabs,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
} from "@chakra-ui/react";
import ReactCountryFlag from "react-country-flag";
import { customTheme } from "../../styles/theme";
import { useState } from "react";
import useAsyncEffect from "use-async-effect";
import { ITranslationTabListProps } from "./TranslationTabList.typing";
import { useTranslation } from "react-i18next";

/**
 * It is used to display the tab and its datas.
 */

function TranslationTabList(p: ITranslationTabListProps) {
  const { t } = useTranslation("pagePage");
  const [currentLang, setCurrentLang] = useState<any>();
  let currentFile = p.page?.translationFiles.find(
    (fichierTraduit) => fichierTraduit.lang === currentLang
  );

  const titleColumns = [
    t("pagePage:translation"),
    t("pagePage:completion"),
    t("pagePage:identifier"),
    t("pagePage:description"),
  ];

  useAsyncEffect(async () => {
    const currentLanguage = await p.supportedLanguages[0].code;
    setCurrentLang(currentLanguage);
  }, []);

  const tabListHeader = (
    <TabList borderColor={customTheme.colors.blue_chillang}>
      {p.supportedLanguages.map((lang) => {
        return (
          <Tab key={lang.code} onClick={() => setCurrentLang(lang.code)}>
            <ReactCountryFlag
              countryCode={lang.code}
              svg
              style={{
                width: "2em",
                height: "2em",
              }}
            />
            <Text ml="3" fontWeight="bold">
              {lang.name}
            </Text>
          </Tab>
        );
      })}
    </TabList>
  );

  const tabListBodyHeader = (
    <Thead>
      <Tr>
        {titleColumns.map((titleColumn) => {
          return (
            <Th
              key={titleColumn}
              fontWeight={customTheme.font_weight.light}
              color={customTheme.colors.gray}
            >
              {titleColumn}
            </Th>
          );
        })}
      </Tr>
    </Thead>
  );

  const tabListBodyContent = (
    <Tbody>
      {currentFile?.data.map((currentTranslateFile) => {
        return (
          <Tr key={currentTranslateFile.id}>
            <Td>{currentTranslateFile.value}</Td>
            <Td>
              <Progress value={80} size="xs" />
            </Td>
            <Td>{currentTranslateFile.id}</Td>
            <Td>{currentTranslateFile.description}</Td>
          </Tr>
        );
      })}
    </Tbody>
  );

  const tabListBody = (
    <Table mt="8">
      {tabListBodyHeader}
      {tabListBodyContent}
    </Table>
  );

  return (
    <Box p="3" mt="5" borderRadius="lg" boxShadow="md" backgroundColor="white">
      <Tabs variant="enclosed">
        {tabListHeader}
        {tabListBody}
      </Tabs>
    </Box>
  );
}

export { TranslationTabList };
