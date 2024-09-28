import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const ReelShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="createdBy" source="createdBy" />
        <TextField label="creator" source="creator" />
        <TextField label="description" source="description" />
        <TextField label="duration" source="duration" />
        <TextField label="ID" source="id" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
