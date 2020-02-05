export const SEND_COMMENT = 'SEND_COMMENT';
export const POST_COMMENTS_REQUEST = 'POST_COMMENTS_REQUEST';
export const GET_PRODUCT_COMMENTS = 'GET_PRODUCT_COMMENTS';
export const RESET_COMMENTS_LIST = 'RESET_COMMENTS_LIST';

const initialState = {
  commentsList: [],
  currentComment: {},
  productId: ''
};

export default function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case POST_COMMENTS_REQUEST: {
      return {
        ...state,
        productId: action.payload.productId
      }
    }
    case GET_PRODUCT_COMMENTS: {
      return {
        ...state,
        commentsList: action.payload.comments,
      }
    }
    case SEND_COMMENT: {
      return {
        ...state,
        currentComment: action.payload.currentComment
      }
    }
    case RESET_COMMENTS_LIST: {
      // console.log('RESET_COMMENTS_LIST');
      return {
        ...state,
        commentsList: []
      }
    }
    default:
      return state
  }
}
