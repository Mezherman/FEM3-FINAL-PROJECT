export default function(values) {
    const errors = {};
    const requiredFields = [
        'gender',
        'firstName',
        'lastName',
        'email',
        'password',
        'phone',
    ];
    requiredFields.forEach(field => {
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
        values.birthdayDay &&
        (values.birthdayDay > 31 || values.birthdayDay < 1)
    ) {
        errors.birthdayDay = 'Invalid birthday day';
    }
    if (
        values.login &&
        !/^[0-9a-zA-Z]{3,10}$/i.test(values.login)
    ) {
        errors.login = 'Login must be between 3 and 10 characters';
    }
    if (
        values.birthdayMonth &&
        (values.birthdayMonth > 12 || values.birthdayMonth < 1)
    ) {
        errors.birthdayMonth = 'Invalid birthday month';
    }
    if (
        values.birthdayYear &&
        !/^[1|2][8-9][0-9][0-9]$/i.test(values.birthdayYear)
    ) {
        errors.birthdayYear = 'Invalid birthday year';
    }
    if (
        values.password &&
        !/^[0-9a-zA-Z]{7,30}$/i.test(values.password)
    ) {
        errors.password = 'Password must be between 7 and 30 characters';
    }
    if (
        values.phone &&
        !/^[0-9-+\s()]{10,18}$/i.test(values.phone)
    ) {
        errors.phone = 'Invalid phone number, at least 10 symbols required';
    }

    return errors;
}

// Password must be between 7 and 30 characters
