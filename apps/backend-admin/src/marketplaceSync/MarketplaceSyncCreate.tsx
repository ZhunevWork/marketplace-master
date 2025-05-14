import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { MarketplaceTitle } from "../marketplace/MarketplaceTitle";
import { ProductTitle } from "../product/ProductTitle";

export const MarketplaceSyncCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="externalId" source="externalId" />
        <ReferenceInput
          source="marketplace.id"
          reference="Marketplace"
          label="Marketplace"
        >
          <SelectInput optionText={MarketplaceTitle} />
        </ReferenceInput>
        <ReferenceInput source="product.id" reference="Product" label="Product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <TextInput label="status" source="status" />
      </SimpleForm>
    </Create>
  );
};
