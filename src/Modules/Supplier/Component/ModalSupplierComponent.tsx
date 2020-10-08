import { Button, Form, Modal } from 'antd';
import { Field, reduxForm } from 'redux-form';

import { InputText } from '../../../Assets/Components/CInputText';
import React from 'react';
import validate from '../Validation/SupplierValidation';

function ModalSupplierComponent(props) {
  const {
    handleCancelModal,
    modalSupplierIsShow,
    handleOnSubmit,
    invalid,
  } = props;

  console.log(props.initialValues);

  return (
    <Modal
      title="Basic Modal"
      visible={modalSupplierIsShow}
      onCancel={handleCancelModal}
      footer={null}
    >
      <Form onFinish={handleOnSubmit} layout="vertical">
        <Field
          name="name"
          component={InputText}
          label="Name"
          placeholder="input your name here"
        />
        <Field
          name="address"
          component={InputText}
          label="Address"
          placeholder="input your address here"
        />
        <Field
          name="city"
          component={InputText}
          label="City"
          placeholder="input your city here"
        />
        <Field
          name="postcode"
          component={InputText}
          label="Postal Code"
          placeholder="input your postal Code here"
        />
        <Field
          name="phone"
          component={InputText}
          label="Phone"
          placeholder="input your phone number here"
        />
        <Button type="primary" htmlType="submit" disabled={invalid}>
          Submit
        </Button>
      </Form>
    </Modal>
  );
}

export default reduxForm({
  form: 'supplierForm',
  validate,
  enableReinitialize: true,
})(ModalSupplierComponent);
