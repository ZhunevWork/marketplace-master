import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const SubscriptionPlanCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <BooleanInput label="isActive" source="isActive" />
        <TextInput label="name" source="name" />
        <NumberInput label="price" source="price" />
        <ReferenceArrayInput source="users" reference="User">
          <SelectArrayInput
            optionText={UserTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
