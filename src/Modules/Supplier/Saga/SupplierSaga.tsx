import * as ActionSupplier from '../Store/SupplierAction';
import * as ActionTemplate from '../../Template/Store/TemplateAction';
import * as SelectorSupplier from '../Selector/SupplierSelector';

import { call, put, select, takeLatest } from 'redux-saga/effects';

import axios from 'axios';

function* fetchSupplierListProcess() {
  try {
    const { data } = yield call(
      axios.get,
      `${process.env.REACT_APP_APP_URL}/Supplier/inquiry/0/1000`
    );
    yield put(ActionSupplier.fetchSupplierListFinished(data.data));
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
function* deleteSupplierProcess() {
  try {
    const id = yield select(SelectorSupplier.idSelector());
    yield call(axios.delete, `${process.env.REACT_APP_APP_URL}/Supplier/${id}`);
    yield put(ActionSupplier.fetchSupplierListRequested());
  } catch (error) {
    console.log(error);
  }
}
function* submitSupplierProcess() {
  try {
    const name = yield select(SelectorSupplier.formNameSelector());
    const address = yield select(SelectorSupplier.formAddressSelector());
    const city = yield select(SelectorSupplier.formCitySelector());
    const postcode = yield select(SelectorSupplier.formPostCodeSelector());
    const phone = yield select(SelectorSupplier.formPhoneSelector());
    yield call(
      axios.post,
      `${process.env.REACT_APP_APP_URL}/Supplier/AddSupplier`,
      {
        name,
        address,
        city,
        postcode,
        contacts: [
          {
            name: 'phone',
            contactType: 'mobilePhone',
            value: phone,
          },
        ],
      }
    );
    yield put(ActionSupplier.fetchSupplierListRequested());
    yield put(ActionTemplate.openModal('Supplier'));
  } catch (error) {
    console.log(error);
  }
}
function* updateSupplierProcess() {
  try {
    const id = yield select(SelectorSupplier.idSelector());
    const name = yield select(SelectorSupplier.formNameSelector());
    const address = yield select(SelectorSupplier.formAddressSelector());
    const city = yield select(SelectorSupplier.formCitySelector());
    const postcode = yield select(SelectorSupplier.formPostCodeSelector());
    const phone = yield select(SelectorSupplier.formPhoneSelector());
    yield call(
      axios.put,
      `${process.env.REACT_APP_APP_URL}/Supplier/UpdateSupplier`,
      {
        id,
        name,
        address,
        city,
        postcode,
        contacts: [
          {
            name: 'phone',
            contactType: 'mobilePhone',
            value: phone,
          },
        ],
      }
    );
    yield put(ActionSupplier.fetchSupplierListRequested());
    yield put(ActionTemplate.openModal('Supplier'));
  } catch (error) {
    console.log(error);
  }
}

export function* fetchSupplierListAction() {
  yield takeLatest('FETCH_SUPPLIER_LIST_REQUESTED', fetchSupplierListProcess);
}
export function* deleteSupplierAction() {
  yield takeLatest('DELETE_SUPPLIER_REQUESTED', deleteSupplierProcess);
}

export function* submitSupplierAction() {
  yield takeLatest('SUBMIT_SUPPLIER_REQUESTED', submitSupplierProcess);
}

export function* updateSupplierAction() {
  yield takeLatest('UPDATE_SUPPLIER_REQUESTED', updateSupplierProcess);
}
