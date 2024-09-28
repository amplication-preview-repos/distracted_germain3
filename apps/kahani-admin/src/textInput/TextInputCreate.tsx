import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const TextInputCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="associatedReel" source="associatedReel" />
        <TextInput label="content" multiline source="content" />
        <TextInput label="reelReference" source="reelReference" />
      </SimpleForm>
    </Create>
  );
};
