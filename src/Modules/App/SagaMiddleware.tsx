import { all, fork } from 'redux-saga/effects';
import {
  fetchSupplierListAction,
  submitSupplierAction,
  updateSupplierAction,
} from '../Supplier/Saga/SupplierSaga';

import { fetchInventoryListAction } from '../Inventory/Saga/InventorySaga';

export default function* () {
  yield all([
    //supplier
    fork(fetchSupplierListAction),
    fork(submitSupplierAction),
    fork(updateSupplierAction),
    //inventory
    fork(fetchInventoryListAction),
  ]);
}
