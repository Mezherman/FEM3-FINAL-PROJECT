const initialState = {
  mainSlides: []
};

const slides = (state = initialState, action) => {
  if (action.type === 'GET_MAIN_SLIDES') {
    console.log('FROM ACTION ', action.payload);
    return {
      ...state,
      mainSlides: action.payload
    }
  }
  return state;
};

export default slides;
