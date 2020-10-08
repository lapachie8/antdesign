import { Button } from 'antd';
import ModalSupplierContainer from '../Container/ModalSupplierContainer';
import React from 'react';
import Table from '../../../Assets/Components/CTable';

export default function SupplierComponent(props) {
  const { columns, data, handleAddSupplier } = props;
  return (
    <div>
      <Button onClick={handleAddSupplier}>Add Supplier</Button>
      <Table columns={columns} data={data} />
      <ModalSupplierContainer {...props} />
    </div>
  );
}
