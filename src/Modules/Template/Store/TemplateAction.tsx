import { Action } from 'redux';

export interface IToggleSider extends Action {
  status: boolean;
}

export interface IOpenModal extends Action {
  component: string;
}

export function toggleSider(status = false): IToggleSider {
  return {
    type: 'TOGGLE_SIDER',
    status,
  };
}

export function openModal(component: string): IOpenModal {
  return {
    type: 'OPEN_MODAL',
    component,
  };
}
