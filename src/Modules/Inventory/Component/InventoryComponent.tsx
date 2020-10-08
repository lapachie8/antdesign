import { Button, Form, Input, Modal } from 'antd';

import React from 'react';
import Table from '../../../Assets/Components/CTable';

export default function InventoryComponent(props) {
  const {
    columns,
    data,
    handleAddInventory,
    handleCancelModal,
    handleSubmit,
    modalInventoryIsShow,
  } = props;
  return (
    <div>
      <Button onClick={handleAddInventory}>Add Inventory</Button>
      <Table columns={columns} data={data} />
      <Modal
        title="Basic Modal"
        visible={modalInventoryIsShow}
        onOk={handleSubmit}
        onCancel={handleCancelModal}
      >
        <Form layout="vertical">
          <Form.Item label="Item Name" required>
            <Input placeholder="masukan nama barang" />
          </Form.Item>
          <Form.Item label="Cost Price" required>
            <Input placeholder="masukan harga" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
