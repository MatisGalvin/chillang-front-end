import { Editable, EditableInput, EditablePreview } from "@chakra-ui/react";

/**
 * Input that is used to directly edit a value, an ID or a description of a translation from the UI.
 */

function InputEditable(p: {
  placeholder?: string;
  defaultValue: string;
  currentTranslationFileID?: string;
  onSubmit: (value: string) => void;
}) {
  return (
    <Editable
      onSubmit={p.onSubmit}
      defaultValue={p.defaultValue}
      placeholder={p.placeholder}
    >
      <EditablePreview />
      <EditableInput />
    </Editable>
  );
}

export { InputEditable };
