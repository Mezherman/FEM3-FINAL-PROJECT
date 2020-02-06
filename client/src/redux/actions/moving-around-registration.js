const enterRegistrationPage = () => ({
  type: 'ENTER_REGISTRATION_PAGE',
  payload: true
});

const leaveRegistrationPage = () => ({
  type: 'LEAVE_REGISTRATION_PAGE',
  payload: false
});

export {
  enterRegistrationPage,
  leaveRegistrationPage
};
