import { Editable, EditableInput, EditablePreview } from "@chakra-ui/react";

function InputEditable(p: {
  placeholder?: string;
  defaultValue: string;
  currentTranslationFileID?: string;
  onSubmit: (value: string) => void;
}) {
  return (
    <Editable
      onSubmit={(newValue) => p.onSubmit(newValue)}
      defaultValue={p.defaultValue}
      placeholder={p.placeholder}
    >
      <EditablePreview />
      <EditableInput />
    </Editable>
  );
}

export { InputEditable };
