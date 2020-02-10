import productsReducer from './products'
import carouselReducer from './carousel'
import categoriesReducer from './categories'
import cart from './cart'
import * as t from '../actions/actionTypes'

describe('carousel reducer', () => {
  const initialState = {
    productsList: [],
    topProducts: [],
    error: null,
    errorTop: null,
    productsListLoading: true,
    topProductsLoading: true
  };

  it('FETCH_TOP_PRODUCTS_LIST_REQUEST', () => {
    const action = {
      type: t.FETCH_TOP_PRODUCTS_LIST_REQUEST
    }
    expect(carouselReducer(initialState, action)).toEqual({
      ...initialState,
      productsList: [],
      productsListLoading: true,
    })
  })

  it('FETCH_TOP_PRODUCTS_LIST_SUCCESS', () => {
    const action = {
      type: t.FETCH_TOP_PRODUCTS_LIST_SUCCESS,
      error: null,
      productsListLoading: false,
      payload: {
        productsList: {
          topSellers: [1, 2, 3]
        }
      }
    };
    expect(carouselReducer(initialState, action)).toEqual({
      ...initialState,
      error: null,
      productsListLoading: false,
      productsList: action.payload.productsList.topSellers,
    })
  })

  it('FETCH_TOP_PRODUCTS_LIST_FAILURE', () => {
    const action = {
      type: t.FETCH_TOP_PRODUCTS_LIST_FAILURE,
      payload: {
        error: 'Text'
      },
      productsListLoading: false
    };
    expect(carouselReducer(initialState, action)).toEqual({
      ...initialState,
      productsList: [],
      error: action.payload.error,
      productsListLoading: false
    })
  })

  it('FETCH_TOP_PRODUCTS_REQUEST', () => {
    const action = {
      type: t.FETCH_TOP_PRODUCTS_REQUEST,
      productsList: [],
      productsListLoading: true,
      errorTop: null
    };
    expect(carouselReducer(initialState, action)).toEqual({
      ...initialState,
      productsList: [],
      productsListLoading: true,
      errorTop: null
    })
  })

  it('FETCH_TOP_PRODUCTS_SUCCESS', () => {
    const action = {
      type: t.FETCH_TOP_PRODUCTS_SUCCESS,
      payload: {
        products: [1, 2, 3]
      },
      errorTop: null,
      productsListLoading: false
    }
    expect(carouselReducer(initialState, action)).toEqual({
      ...initialState,
      productsList: action.payload.products,
      errorTop: null,
      productsListLoading: false
    })
  })

  it('FETCH_TOP_PRODUCTS_FAILURE', () => {
    const action = {
      type: t.FETCH_TOP_PRODUCTS_FAILURE,
      payload: {
        errorTop: 'some text'
      },
      productsListLoading: false
    };
    expect(carouselReducer(initialState, action)).toEqual({
      ...initialState,
      productsList: [],
      errorTop: action.payload.error,
      productsListLoading: false
    })
  })
})
// describe('cart reducer', () => {
//   const initialState = {
//     products: [],
//     totalCartQuantity: 0,
//     totalCartPrice: 0
//   };
//
//   it('ADD_PRODUCT_SUCCESS', () => {
//     const action = {
//       type: t.ADD_PRODUCT_SUCCESS,
//       payload: {
//         newCart: {}
//       }
//     }
//     expect(cart(initialState, action)).toEqual({
//       ...initialState,
//       newCart: action.payload.newCart
//     })
//   });
//
//   it('REMOVE_PRODUCT_SUCCESS', () => {
//     const action = {
//       type: t.REMOVE_PRODUCT_SUCCESS,
//       payload: {
//         newCart: {}
//       }
//     }
//     expect(cart(initialState, action)).toEqual({
//       ...initialState,
//       newCart: action.payload.newCart
//     })
//   });
//
//   it('UPDATE_CART_SUCCESS', () => {
//     const action = {
//       type: t.UPDATE_CART_SUCCESS,
//       payload: {}
//     }
//     expect(cart(initialState, action)).toEqual({
//       ...initialState,
//       newCart: action.payload.newCart
//     })
//   });
//
//   it('CLEAR_CART', () => {
//     const action = {
//       type: t.CLEAR_CART,
//       products: [],
//       totalCartQuantity: 5,
//       totalCartPrice: 5
//     }
//     expect(cart(initialState, action)).toEqual({
//       ...initialState,
//       products: [],
//       totalCartQuantity: 0,
//       totalCartPrice: 0
//     })
//   })
// })
describe('categories reducer', () => {
  const initialState = {
    catalog: {
      allCategories: [],
      mainCategories: [],
    },
    error: null,
    catalogLoading: true,
    catalogLocation: ''
  };

  it('FETCH_CATALOG_REQUEST', () => {
    const action = {
      type: t.FETCH_CATALOG_REQUEST,
    }
    expect(categoriesReducer(initialState, action)).toEqual({
      ...initialState,
      catalog: {},
      catalogLoading: true
    })
  })

  it('FETCH_CATALOG_SUCCESS', () => {
    const action = {
      type: t.FETCH_CATALOG_SUCCESS,
      catalogLoading: false,
      payload: {
        catalog: {
          allCategories: [1, 2, 3],
          mainCategories: []
        }
      }
    }
    expect(categoriesReducer(initialState, action)).toEqual({
      ...initialState,
      catalogLoading: false,
      catalog: action.payload.catalog,
      error: null,
    })
  })

  it('FETCH_CATALOG_FAILURE', () => {
    const action = {
      type: t.FETCH_CATALOG_FAILURE,
      catalog: {},
      payload: {
        error: '500 server error'
      },
      catalogLoading: false
    }
    expect(categoriesReducer(initialState, action)).toEqual({
      ...initialState,
      error: action.payload.error,
      catalog: {},
      catalogLoading: false
    })
  })

  it('CATALOG_LOCATION', () => {
    const action = {
      type: t.CATALOG_LOCATION,
      payload: {
        catalogLocation: '123',
      }
    }
    expect(categoriesReducer(initialState, action)).toEqual({
      ...initialState,
      catalogLocation: action.payload
    })
  })
})

describe('products reducer', () => {
  const initialState = {
    products: [],
    error: null,
    productsLoading: true,
    sorting: '',
  };
  it('FETCH_PRODUCTS_REQUEST', () => {
    const action = {
      type: t.FETCH_PRODUCTS_REQUEST,
    }
    expect(productsReducer(initialState, action)).toEqual({
      ...initialState,
      products: [],
      error: null,
      productsLoading: true,
    })
  })

  it('FETCH_PRODUCTS_SUCCESS', () => {
    const action = {
      type: t.FETCH_PRODUCTS_SUCCESS,
      payload: [1, 2, 3]
    }
    expect(productsReducer(initialState, action)).toEqual({
      ...initialState,
      products: action.payload.products,
      productsLoading: false
    })
  })

  it('FETCH_PRODUCTS_FAILURE', () => {
    const action = {
      type: t.FETCH_PRODUCTS_FAILURE,
      payload: {
        error: 'ERROR'
      }
    }
    expect(productsReducer(initialState, action)).toEqual({
      ...initialState,
      products: [],
      error: action.payload.error,
      productsLoading: false
    })
  })

  it('SORTING_PRODUCTS', () => {
    const action = {
      type: t.SORTING_PRODUCTS,
      payload: {
        sorting: [1, 2, 3],
        products: [5, 6, 3]
      }
    }
    expect(productsReducer(initialState, action)).toEqual({
      ...initialState,
      sorting: action.payload.sorting,
      products: action.payload.products
    })
  })

  it('RESET_SORTING', () => {
    const action = {
      type: t.RESET_SORTING,
    }
    expect(productsReducer(initialState, action)).toEqual({
      ...initialState,
      sorting: ''
    })
  })
})
