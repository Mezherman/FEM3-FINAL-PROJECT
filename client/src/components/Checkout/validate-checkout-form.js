export default function (values) {
  const errors = {};
  const requiredFields = [
    'gender'
  ];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });

  return errors;
}
