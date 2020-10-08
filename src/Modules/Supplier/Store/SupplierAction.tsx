import { Action } from 'redux';

export interface IFetchSupplier extends Action {
  data: object;
}

export interface IModalAction extends Action {
  typeaction: string;
}

export interface ISetId extends Action {
  id: string;
}

export interface ISetDetail extends Action {
  data: object;
}
export function sumbitSupplierRequested() {
  return {
    type: 'SUMBIT_SUPPLIER_REQUESTED',
  };
}

export function setSupplierId(id: string): ISetId {
  return {
    type: 'SET_SUPPLIER_ID',
    id,
  };
}

export function setSupplierDetail(data: object): ISetDetail {
  return {
    type: 'SET_SUPPLIER_DETAIL',
    data,
  };
}

export function deleteSupplierRequested() {
  return {
    type: 'DELETE_SUPPLIER_REQUESTED',
  };
}

export function updateSupplierRequested() {
  return {
    type: 'UPDATE_SUPPLIER_REQUESTED',
  };
}

export function fetchSupplierListRequested() {
  return {
    type: 'FETCH_SUPPLIER_LIST_REQUESTED',
  };
}
export function fetchSupplierListFinished(data: object): IFetchSupplier {
  return {
    type: 'FETCH_SUPPLIER_LIST_FINISHED',
    data,
  };
}

export function changeModalAction(typeaction: string): IModalAction {
  return {
    type: 'CHANGE_MODAL_SUPPLIER_ACTION',
    typeaction,
  };
}
