export default function SupplierValidation(values) {
  const errors: any = {};
  if (!values.name) {
    errors.name = 'name required!';
  } else if (values.name.length < 3) {
    errors.name = 'at least have 3 character!';
  }

  if (!values.address) {
    errors.address = 'address required!';
  }
  if (!values.phone) {
    errors.phone = 'phone required!';
  }
  return errors;
}
