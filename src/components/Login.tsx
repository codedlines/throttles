import React from 'react';
import { Input, Button } from 'react-native-elements';
import { useForm, Controller } from 'react-hook-form';
import validator from 'validator';
import styled from 'styled-components/native';
import {
  buttonNames,
  inputPlaceholders,
  validationMessages,
} from '../constants';

export default function Login({ onSubmit }) {
  const { control, handleSubmit, errors } = useForm();

  const onFormSubmit = (form) => {
    onSubmit(form);
  };

  return (
    <ViewCS>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => {
          return (
            <Input
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
              errorMessage={validationMessages[errors?.email?.type] || ''}
              placeholder={inputPlaceholders.EMAIL}
            />
          );
        }}
        name="email"
        defaultValue=""
        rules={{
          validate: {
            email: validator.isEmail,
          },
          required: true,
        }}
      />

      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <Input
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            secureTextEntry
            errorMessage={validationMessages[errors?.password?.type] || ''}
            placeholder={inputPlaceholders.PASSWORD}
          />
        )}
        name="password"
        defaultValue=""
        rules={{
          required: true,
        }}
      />

      <Button title={buttonNames.SUBMIT} onPress={handleSubmit(onFormSubmit)} />
    </ViewCS>
  );
}

const ViewCS = styled.View`
  justify-content: center;
  flex-direction: column;
  flex: 0.7;
`;
