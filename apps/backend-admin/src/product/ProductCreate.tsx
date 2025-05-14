import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";
import { MarketplaceSyncTitle } from "../marketplaceSync/MarketplaceSyncTitle";
import { OfferCardTitle } from "../offerCard/OfferCardTitle";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="account.id" reference="Account" label="Account">
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <TextInput label="description" multiline source="description" />
        <TextInput label="imageUrl" source="imageUrl" />
        <ReferenceArrayInput
          source="marketplaceSyncs"
          reference="MarketplaceSync"
        >
          <SelectArrayInput
            optionText={MarketplaceSyncTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <ReferenceArrayInput source="offerCards" reference="OfferCard">
          <SelectArrayInput
            optionText={OfferCardTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput label="price" source="price" />
      </SimpleForm>
    </Create>
  );
};
