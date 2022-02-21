import { Editable, EditableInput, EditablePreview } from "@chakra-ui/react";

function InputEditable(p: {
  defaultValue: string;
  currentTranslationFileID?: string;
  onSubmit: (value: string) => void;
}) {
  return (
    <Editable
      onSubmit={(newValue) => p.onSubmit(newValue)}
      defaultValue={p.defaultValue}
    >
      <EditablePreview />
      <EditableInput />
    </Editable>
  );
}

export { InputEditable };
