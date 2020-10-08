import * as SelectorSupplier from '../Selector/SupplierSelector';
import * as SelectorTemplate from '../../Template/Selector/TemplateSelector';
import * as SupplierAction from '../Store/SupplierAction';
import * as TemplateAction from '../../Template/Store/TemplateAction';

import React, { useEffect } from 'react';
import { bindActionCreators, compose } from 'redux';

import { Button } from 'antd';
import SupplierComponent from '../Component/SupplierComponent';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

function SupplierContainer(props) {
  const { actionSupplier, listData, actionTemplate } = props;
  useEffect(() => {
    actionSupplier.fetchSupplierListRequested();
  }, [actionSupplier]);
  const renderAction = row => {
    const handleUpdate = () => {
      actionSupplier.changeModalAction('update');
      actionSupplier.setSupplierId(row.row.original.id);
      actionSupplier.setSupplierDetail(row.row.original);
      actionTemplate.openModal('Supplier');
    };
    const handleDelete = () => {
      actionSupplier.setSupplierId(row.row.original.id);
    };

    return (
      <React.Fragment>
        <Button
          className="btnActionTable"
          type="primary"
          onClick={handleUpdate}
        >
          Update
        </Button>
        <Button
          className="btnActionTable"
          type="primary"
          danger
          onClick={handleDelete}
        >
          Delete
        </Button>
      </React.Fragment>
    );
  };
  const columns = [
    {
      Header: 'Supplier Name',
      accessor: 'name',
    },
    {
      Header: 'Supplier Address',
      accessor: 'address',
    },
    {
      Header: 'Action',
      Cell: renderAction,
    },
  ];

  const handleAddSupplier = () => {
    actionSupplier.changeModalAction('register');
    actionTemplate.openModal('Supplier');
  };
  const handleCancelModal = () => {
    actionSupplier.changeModalAction('register');
    actionTemplate.openModal('Supplier');
  };

  return (
    <SupplierComponent
      columns={columns}
      data={listData}
      handleAddSupplier={handleAddSupplier}
      handleCancelModal={handleCancelModal}
      {...props}
    />
  );
}
const mapStateToProps = createStructuredSelector({
  listData: SelectorSupplier.listSelector(),
  modalSupplierIsShow: SelectorTemplate.modalSupplierSelector(),
});

const mapDispatchToProps = (dispatch: any) => ({
  actionSupplier: bindActionCreators(SupplierAction, dispatch),
  actionTemplate: bindActionCreators(TemplateAction, dispatch),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(SupplierContainer);
