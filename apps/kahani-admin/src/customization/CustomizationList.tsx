import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CustomizationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Customizations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="associatedReel" source="associatedReel" />
        <TextField label="backgroundMusic" source="backgroundMusic" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="reelCustomization" source="reelCustomization" />
        <TextField label="theme" source="theme" />
        <TextField label="transitions" source="transitions" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
