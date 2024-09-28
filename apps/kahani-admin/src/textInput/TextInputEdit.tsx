import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const TextInputEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="associatedReel" source="associatedReel" />
        <TextInput label="content" multiline source="content" />
        <TextInput label="reelReference" source="reelReference" />
      </SimpleForm>
    </Edit>
  );
};
