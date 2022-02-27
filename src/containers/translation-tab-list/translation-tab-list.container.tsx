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
  Input,
  Button,
  Flex,
} from "@chakra-ui/react";
import ReactCountryFlag from "react-country-flag";
import { customTheme } from "styles";
import { useState } from "react";
import useAsyncEffect from "use-async-effect";
import { useTranslation } from "react-i18next";
import { IPage, ICountry, ITranslationFile } from "typings";
import { InputEditable } from "./input-editable";
import {
  useAppDispatch,
  setCurrentTabIndex,
  updateTranslationFileById,
  useAppSelector,
  getNavigation,
  INavigation,
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
  let currentPage = p.page;
  let currentTranslationFile = p.page?.translationFiles.find(
    (fichierTraduit) => fichierTraduit.lang === currentLang
  );

  const [translationToCreate, setTranslationToCreate] = useState<string>("");
  const [identifierToCreate, setIdentifierToCreate] = useState<string>("");
  const [descriptionToCreate, setDescriptionToCreate] = useState<string>("");

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

  const updateTranslation = (
    translationFileToUpdate: ITranslationFile,
    keyNameToUpdate: "id" | "description" | "value",
    id: string,
    newValue: string,
    navigation: INavigation
  ) => {
    for (let i = 0; i < translationFileToUpdate!.data.length; i++) {
      let currentElement = translationFileToUpdate?.data[i];
      if (currentElement?.id === id) {
        const translationFileUpdateCopy = translationFileToUpdate;
        Object.assign(translationFileToUpdate, translationFileUpdateCopy);
        translationFileUpdateCopy!.data[i][keyNameToUpdate] = newValue;
        dispatch(
          updateTranslationFileById({
            translationFile: translationFileUpdateCopy!,
            navigation,
          })
        );
      }
    }
  };

  /**
   * When you edit a translation, if you edit an identifier, it will edit this identifier
   * for every language available. If it's not, it will edit just this particulary translation.
   */
  const handleSubmit =
    (translationId: string, keyNameToUpdate: "id" | "description" | "value") =>
    (newValue: string) => {
      if (keyNameToUpdate === "id") {
        currentPage?.translationFiles.forEach(
          (translationFile, translationFileIndex) => {
            updateTranslation(
              translationFile,
              keyNameToUpdate,
              translationId,
              newValue,
              { ...navigation, tabIndex: translationFileIndex }
            );
          }
        );
      } else {
        updateTranslation(
          currentTranslationFile!,
          keyNameToUpdate,
          translationId,
          newValue,
          navigation
        );
      }
    };

  /**
   * When you want to add a new translation, it add for every language available the value
   * of the "description" and "id" field, and only add the value of the "value" field
   * for the current tab languague
   */
  const handleSubmitNewTranslation =
    (value: string, id: string, description: string) => () => {
      currentPage?.translationFiles.forEach((translationFile, index) => {
        translationFile.data = [
          {
            description,
            id,
            value: navigation.tabIndex === index ? value : "",
          },
          ...translationFile.data,
        ];
        dispatch(
          updateTranslationFileById({
            translationFile,
            navigation: { ...navigation, tabIndex: index },
          })
        );
      });
      setDescriptionToCreate("");
      setIdentifierToCreate("");
      setTranslationToCreate("");
    };

  const creationTranslationForm = () => {
    return (
      <Tr>
        <Td>
          <Input
            id="translationFieldToCreate"
            value={translationToCreate}
            placeholder="translation"
            onChange={(e) => setTranslationToCreate(e.target.value)}
          />
        </Td>
        <Td></Td>
        <Td>
          <Input
            id="identifierFieldToCreate"
            value={identifierToCreate}
            placeholder="identifier"
            onChange={(e) => setIdentifierToCreate(e.target.value)}
          />
        </Td>
        <Td>
          <Flex alignItems="center" justifyContent="space-between">
            <Input
              id="descriptionFieldToCreate"
              value={descriptionToCreate}
              placeholder="description"
              onChange={(e) => setDescriptionToCreate(e.target.value)}
            />
            <Button
              ml="2"
              type="submit"
              onClick={handleSubmitNewTranslation(
                translationToCreate,
                identifierToCreate,
                descriptionToCreate
              )}
            >
              {t("pagePage:submit")}
            </Button>
          </Flex>
        </Td>
      </Tr>
    );
  };

  const tabListBodyContent = (
    <Tbody>
      {creationTranslationForm()}
      {currentTranslationFile?.data.map((translation) => {
        return (
          <Tr key={translation.id + currentTranslationFile?._id}>
            <Td>
              <InputEditable
                placeholder="..."
                currentTranslationFileID={currentTranslationFile?._id}
                defaultValue={translation.value}
                onSubmit={handleSubmit(translation.id, "value")}
              />
            </Td>
            <Td>
              <Progress value={80} size="xs" />
            </Td>
            <Td>
              <InputEditable
                currentTranslationFileID={currentTranslationFile?._id}
                defaultValue={translation.id}
                onSubmit={handleSubmit(translation.id, "id")}
              />
            </Td>
            <Td>
              <InputEditable
                placeholder="Add description here"
                currentTranslationFileID={currentTranslationFile?._id}
                defaultValue={translation.description}
                onSubmit={handleSubmit(translation.id, "description")}
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
