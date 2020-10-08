import { createSelector } from 'reselect';

const supplierState = (state: any) => state.SupplierState;
const supplierFormState = (state: any) => state.form.supplierForm.values;

export const listSelector = () =>
  createSelector(supplierState, state => state.list);

export const idSelector = () =>
  createSelector(supplierState, state => state.selectedIdSupplier);

export const selectedSupplierSelector = () =>
  createSelector(supplierState, state => state.selectedSupplier);

export const modalActionSelector = () =>
  createSelector(supplierState, state => state.modalAction);

// SELECTOR FORM
export const formNameSelector = () =>
  createSelector(supplierFormState, state => state.name);

export const formAddressSelector = () =>
  createSelector(supplierFormState, state => state.address);

export const formCitySelector = () =>
  createSelector(supplierFormState, state => state.city);

export const formPostCodeSelector = () =>
  createSelector(supplierFormState, state => state.postcode);

export const formPhoneSelector = () =>
  createSelector(supplierFormState, state => state.phone);
