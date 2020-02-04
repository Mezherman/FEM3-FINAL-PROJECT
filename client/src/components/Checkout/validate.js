const validate = (values) => {
  // console.log(values);
  const errors = {};
  const requiredFields = [
    'gender',
    'firstName',
    'lastName',
    'email',
    'mobile',
    'street',
    'flat',
    'postalCode',
    'city',
    'paymentMethod',
    'delivery',
    'agreement'
  ];

  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });

  if (!values.gender) {
    errors.gender = 'Please choose gender';
  }

  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (values.mobile && !/^[0-9-+\s()]{10,18}$/i.test(values.mobile)) {
    errors.mobile = 'Invalid phone number, must be between 10 and 18 characters';
  }

  if (values.flat && !/^[0-9a-zA-Z]{1,5}$/i.test(values.flat)) {
    errors.flat = 'invalid flat number'
  }

  if (values.city && !/^[A-Za-z]/i.test(values.city)) {
    errors.city = 'invalid city name'
  }

  if (values.street && !/^[A-Za-z]/i.test(values.street)) {
    errors.street = 'invalid street name'
  }

  if (values.postalCode && !/^[0-9]/i.test(values.postalCode)) {
    errors.postalCode = 'invalid postal code'
  }

  if (!values.paymentMethod) {
    errors.paymentMethod = 'Please choose payment method';
  }

  if (!values.delivery) {
    errors.delivery = 'Please choose delivery method';
  }

  if (!values.agreement) {
    errors.agreement = 'We need your agreement to place order';
  }

  return errors;
};

export default validate;