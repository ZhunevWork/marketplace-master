import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { MarketplaceSyncTitle } from "../marketplaceSync/MarketplaceSyncTitle";

export const MarketplaceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
