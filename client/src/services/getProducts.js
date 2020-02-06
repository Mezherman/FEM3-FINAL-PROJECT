import axios from 'axios';
import getCategories from './getCategories';

axios.defaults.baseURL = 'http://localhost:5000';

export default function getAllProducts() {
  return axios
    .get('/products')
    .then((response) => response.data)
    .catch((err) => {
      console.log('ERROR = ', err);
    });
}

export async function getProductsByCategory(categoryName) {
  if (['cooking', 'dining', 'drinking', 'preparing'].includes(categoryName)) {
    const subCategoriesList = await getCategories().then((catalog) => {
      const subCategories = catalog.filter((category) => category.parentId === categoryName);
      return subCategories.map((category) => category.id).join(',');
    });
    return axios
      .get(`/products/filter?categories=${subCategoriesList}`)
      .then((response) => response.data.products)
      .catch((err) => {
        console.log('ERROR = ', err);
      });
  }
  return axios
    .get(`/products/filter?categories=${categoryName}`)
    .then((response) => response.data.products)
    .catch((err) => {
      console.log('ERROR = ', err);
    });
}

export function getProductsByItemNo(itemNo) {
  return axios
    .get(`/products/${itemNo}`)
    .then((product) => {
      // console.log('getProductsByitemNo = ', product);
      return product
    })
    .catch((err) => {
      console.log('ERROR = ', err);
    });
}
