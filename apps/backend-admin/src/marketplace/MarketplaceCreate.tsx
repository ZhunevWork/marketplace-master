import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { MarketplaceSyncTitle } from "../marketplaceSync/MarketplaceSyncTitle";

export const MarketplaceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="apiKey" source="apiKey" />
        <TextInput label="description" multiline source="description" />
        <BooleanInput label="isActive" source="isActive" />
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
      </SimpleForm>
    </Create>
  );
};
