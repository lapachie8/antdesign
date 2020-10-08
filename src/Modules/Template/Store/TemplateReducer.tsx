import { IOpenModal, IToggleSider } from './TemplateAction';

import { Action } from 'redux';

export const initialState: any = {
  siderIsOpen: true,
  showModalSupplier: false,
  showModalInventory: false,
  showModalSales: false,
};

export default function TemplateReducer(state = initialState, action: Action) {
  if (!action) return state;
  const newState = Object.assign({}, state);

  switch (action.type) {
    case 'TOGGLE_SIDER': {
      const toggleSider = action as IToggleSider;
      newState.siderIsOpen = toggleSider.status;
      // newState.siderIsOpen = !state.siderIsOpen;
      return { ...newState };
    }
  }
  switch (action.type) {
    case 'OPEN_MODAL': {
      const openModal = action as IOpenModal;
      const component = openModal.component;
      newState[`showModal${component}`] = !state[`showModal${component}`];
      // newState.siderIsOpen = !state.siderIsOpen;
      return { ...newState };
    }
  }
  return state;
}
