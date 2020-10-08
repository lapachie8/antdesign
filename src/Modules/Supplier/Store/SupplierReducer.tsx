import {
  IFetchSupplier,
  IModalAction,
  ISetDetail,
  ISetId,
} from './SupplierAction';

import { Action } from 'redux';

export const initialState: any = {
  list: [],
  selectedSupplier: {},
  selectedIdSupplier: '',
  modalAction: 'register',
};

export default function SupplierReducer(state = initialState, action: Action) {
  if (!action) return state;
  const newState = Object.assign({}, state);
  switch (action.type) {
    case 'FETCH_SUPPLIER_LIST_FINISHED': {
      const fetchSupplier = action as IFetchSupplier;
      newState.list = fetchSupplier.data;
      return { ...newState };
    }

    case 'CHANGE_MODAL_SUPPLIER_ACTION': {
      const modalAction = action as IModalAction;
      newState.modalAction = modalAction.typeaction;
      return { ...newState };
    }
    case 'SET_SUPPLIER_ID': {
      const setId = action as ISetId;
      newState.selectedIdSupplier = setId.id;
      return { ...newState };
    }
    case 'SET_SUPPLIER_DETAIL': {
      const setDetail = action as ISetDetail;
      newState.selectedSupplier = setDetail.data;
      return { ...newState };
    }
  }
  return state;
}
