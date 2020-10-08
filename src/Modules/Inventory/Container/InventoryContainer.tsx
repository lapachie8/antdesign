import * as InventoryAction from '../Store/InventoryAction';
import * as SelectorInventory from '../Selector/InventorySelector';
import * as SelectorTemplate from '../../Template/Selector/TemplateSelector';
import * as TemplateAction from '../../Template/Store/TemplateAction';

import React, { useEffect } from 'react';
import { bindActionCreators, compose } from 'redux';

import { Button } from 'antd';
import InventoryComponent from '../Component/InventoryComponent';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

function InventoryContainer(props) {
  const { actionInventory, listData, actionTemplate } = props;

  const renderAction = row => {
    return (
      <React.Fragment>
        <Button className="btnActionTable" type="primary">
          Update
        </Button>
        <Button className="btnActionTable" type="primary" danger>
          Delete
        </Button>
      </React.Fragment>
    );
  };
  const columns = [
    {
      Header: 'Inventory Name',
      accessor: 'name',
    },
    {
      Header: 'Action',
      Cell: renderAction,
    },
  ];
  useEffect(() => {
    actionInventory.fetchInventoryListRequested();
  }, [actionInventory]);

  const handleAddInventory = () => {
    actionTemplate.openModal('Inventory');
    actionInventory.changeModalAction('register');
  };

  const handleCancelModal = () => {
    actionTemplate.openModal('Inventory');
    actionInventory.changeModalAction('register');
  };

  return (
    <InventoryComponent
      handleCancelModal={handleCancelModal}
      handleAddInventory={handleAddInventory}
      columns={columns}
      data={listData}
      {...props}
    />
  );
}
const mapStateToProps = createStructuredSelector({
  listData: SelectorInventory.listSelector(),
  modalInventoryIsShow: SelectorTemplate.modalInventorySelector(),
});

const mapDispatchToProps = (dispatch: any) => ({
  actionInventory: bindActionCreators(InventoryAction, dispatch),
  actionTemplate: bindActionCreators(TemplateAction, dispatch),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(InventoryContainer);
