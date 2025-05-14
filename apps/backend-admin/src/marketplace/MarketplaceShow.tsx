import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { MARKETPLACE_TITLE_FIELD } from "./MarketplaceTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";

export const MarketplaceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="apiKey" source="apiKey" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <BooleanField label="isActive" source="isActive" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="MarketplaceSync"
          target="marketplaceId"
          label="MarketplaceSyncs"
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
            <ReferenceField
              label="Product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
