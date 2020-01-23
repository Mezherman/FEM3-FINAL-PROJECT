const initialState = {
  type: 'error',
  message: '',
  fading: true,
  open: false
};

export default function notification(state = initialState, action) {
  switch (action.type) {
    case 'OPEN_NEW_NOTIFICATION': {
      console.log(action);
      return {
        ...state,
        type: action.payload.type,
        message: action.payload.message,
        fading: action.payload.fading ?? true,
        open: true
      };
    }
    case 'ClOSE_NOTIFICATION': {
      return {
        ...state,
        open: false
      };
    }
    default: return { ...state };
  }
}