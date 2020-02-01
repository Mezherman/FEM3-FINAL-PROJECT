export default function (values) {
  const errors = {};
  const requiredFields = [
    'gender',
    'firstName',
    'lastName'
  ];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });

  return errors;
}
