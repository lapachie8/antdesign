import * as SelectorSupplier from '../Selector/SupplierSelector';
import * as SupplierAction from '../Store/SupplierAction';

import { bindActionCreators, compose } from 'redux';

import ModalSupplierComponent from '../Component/ModalSupplierComponent';
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

function ModalSupplierContainer(props) {
  const { actionSupplier, supplierDetail, modalAction } = props;
  const handleOnSubmit = () => {
    if (modalAction === 'register') {
      actionSupplier.submitSupplierRegister();
    } else {
      actionSupplier.updateSupplierRequested();
    }
    actionSupplier.submitSupplierListRequsted();
  };
  const initialValues: any = {};
  if (Object.keys(supplierDetail).length > 0) {
    const { name, address, city, postCode } = supplierDetail;
    initialValues.name = name;
    initialValues.address = address;
    initialValues.city = city;
    initialValues.postcode = postCode;
    // initialValues.contacts[0]?.phone = phone;
  }
  return (
    <ModalSupplierComponent
      initialValues={initialValues}
      handleSubmitForm={handleOnSubmit}
      {...props}
    />
  );
}
const mapStateToProps = createStructuredSelector({
  supplierDetail: SelectorSupplier.selectedSupplierSelector(),
  modalAction: SelectorSupplier.modalActionSelector(),
});

const mapDispatchToProps = (dispatch: any) => ({
  actionSupplier: bindActionCreators(SupplierAction, dispatch),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(ModalSupplierContainer);
