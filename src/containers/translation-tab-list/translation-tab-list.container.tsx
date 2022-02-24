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
import { customTheme } from "styles";
import { useState } from "react";
import useAsyncEffect from "use-async-effect";
import { useTranslation } from "react-i18next";
import { IPage, ICountry } from "typings";
import { InputEditable } from "./input-editable";
import {
  useAppDispatch,
  setCurrentTabIndex,
  updateTranslationFileById,
  useAppSelector,
  getNavigation,
} from "models";

/**
 * It is used to display the tab and its datas.
 */

function TranslationTabList(p: {
  supportedLanguages: ICountry[];
  page: IPage | undefined;
}) {
  const { t } = useTranslation("pagePage");
  const [currentLang, setCurrentLang] = useState<any>();
  let currentTranslationFile = p.page?.translationFiles.find(
    (fichierTraduit) => fichierTraduit.lang === currentLang
  );

  const navigation = useAppSelector(getNavigation);

  const dispatch = useAppDispatch();

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
      {p.supportedLanguages.map((lang, index) => {
        return (
          <Tab
            key={lang.code}
            onClick={() => {
              setCurrentLang(lang.code);
              dispatch(setCurrentTabIndex(index));
            }}
          >
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

  /**
   * Update the data locally and send it by the updateTranslationFileById action.
   */
  const handleSubmit =
    (
      translationToUpdate: { id: string; value: string },
      partToModify: string
    ) =>
    (textValue: string) => {
      for (let i = 0; i < currentTranslationFile!.data.length; i++) {
        let currentElement = currentTranslationFile?.data[i];
        if (currentElement?.id === translationToUpdate.id) {
          switch (partToModify) {
            case "value":
              currentTranslationFile!.data[i].value = textValue;
              dispatch(
                updateTranslationFileById({
                  translationfile: currentTranslationFile!,
                  navigation,
                })
              );
              break;
            case "description":
              currentTranslationFile!.data[i].description = textValue;
              dispatch(
                updateTranslationFileById({
                  translationfile: currentTranslationFile!,
                  navigation,
                })
              );
              break;
          }
        }
      }
    };

  const tabListBodyContent = (
    <Tbody>
      {currentTranslationFile?.data.map((translation) => {
        return (
          <Tr key={translation.id + currentTranslationFile?._id}>
            <Td>
              <InputEditable
                currentTranslationFileID={currentTranslationFile?._id}
                defaultValue={translation.value}
                onSubmit={handleSubmit(translation, "value")}
              />
            </Td>
            <Td>
              <Progress value={80} size="xs" />
            </Td>
            <Td>{translation.id}</Td>
            <Td>
              <InputEditable
                currentTranslationFileID={currentTranslationFile?._id}
                defaultValue={translation.description}
                onSubmit={handleSubmit(translation, "description")}
              />
            </Td>
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
