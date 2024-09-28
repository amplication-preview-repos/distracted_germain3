import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ReelList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Reels"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="createdBy" source="createdBy" />
        <TextField label="creator" source="creator" />
        <TextField label="description" source="description" />
        <TextField label="duration" source="duration" />
        <TextField label="ID" source="id" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
