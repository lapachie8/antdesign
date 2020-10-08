import { IFetchInventory, IModalAction } from './InventoryAction';

import { Action } from 'redux';

export const initialState: any = {
  list: [],
  selectedInventory: {},
  selectedIdInventory: '',
  modalAction: 'register',
};

export default function InventoryReducer(state = initialState, action: Action) {
  if (!action) return state;
  const newState = Object.assign({}, state);
  switch (action.type) {
    case 'FETCH_INVENTORY_LIST_FINISHED': {
      const fetchInventory = action as IFetchInventory;
      newState.list = fetchInventory.data;
      return { ...newState };
    }

    case 'CHANGE_MODAL_INVENTORY_ACTION': {
      const modalAction = action as IModalAction;
      newState.modalAction = modalAction.typeaction;
      return { ...newState };
    }
  }
  return state;
}
