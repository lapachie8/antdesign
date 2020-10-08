import { Form, Input } from 'antd';

import React from 'react';

interface IInputText {
  input;
  meta;
  label?;
  placeholder?;
}

export const InputText = ({
  input,
  meta: { touched, error },
  label,
  placeholder,
}: IInputText) => {
  return (
    <Form.Item
      validateStatus={touched && error !== undefined ? 'error' : ''}
      help={touched && error !== undefined ? error : ''}
      label={label}
    >
      <Input placeholder={placeholder} {...input} />
    </Form.Item>
  );
};
