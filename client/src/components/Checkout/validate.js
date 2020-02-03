const validate = (values) => {
  console.log(values);
  const errors = {};
  const requiredFields = [
    'gender',
    'firstName',
    'lastName',
    'email',
    'mobile',
    'street',
    'flat',
    'city',
    'postalCode',
    'agreement'
  ];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }
  if (
    values.mobile &&
    !/^[0-9-+\s()]{10,18}$/i.test(values.mobile)
  ) {
    errors.mobile = 'Invalid phone number, at least 10 symbols required';
  }
  if (
    !values.agreement
  ) {
    errors.agreement = 'We need your agreement to place order.';
  }

  return errors;
};

export default validate;