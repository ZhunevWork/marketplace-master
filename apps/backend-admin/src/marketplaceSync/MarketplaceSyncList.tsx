import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { MARKETPLACE_TITLE_FIELD } from "../marketplace/MarketplaceTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";

export const MarketplaceSyncList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"MarketplaceSyncs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="externalId" source="externalId" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Marketplace"
          source="marketplace.id"
          reference="Marketplace"
        >
          <TextField source={MARKETPLACE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Product" source="product.id" reference="Product">
          <TextField source={PRODUCT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
