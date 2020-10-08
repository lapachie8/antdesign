import { Action } from 'redux';

export interface IFetchInventory extends Action {
  data: object;
}

export interface IModalAction extends Action {
  typeaction: string;
}

export function fetchInventoryListRequested() {
  return {
    type: 'FETCH_INVENTORY_LIST_REQUESTED',
  };
}
export function fetchInventoryListFinished(data: object): IFetchInventory {
  return {
    type: 'FETCH_INVENTORY_LIST_FINISHED',
    data,
  };
}

export function changeModalAction(typeaction: string): IModalAction {
  return {
    type: 'CHANGE_MODAL_SUPPLIER_ACTION',
    typeaction,
  };
}
