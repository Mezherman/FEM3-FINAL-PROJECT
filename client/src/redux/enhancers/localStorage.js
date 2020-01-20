export const localStorage = store => next => action => {
  console.log('localstorage', action);
  return next(action)
}