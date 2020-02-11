import React from 'react'
import { shallow } from 'enzyme'
import { ProductList } from './product-list'

describe('News container', () => {
  const props = { // описываем props
    products,
    productsLoading
    // функция получения новостей onGetNews. Ее содержимое тестировать не нужно.
    // Но нам потребуется протестировать, что функция была вызвана в componentDidMount
  }

  // здесь будут будущие it

})