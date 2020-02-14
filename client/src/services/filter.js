import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

function getFilteredProducts(value) {
  return axios
    .get(`/products/filter?${value}`)
    .then((response) => response.data.products)
    .catch((error) => error)
}

function getInfinityFilteredProducts(value) {
  return axios
    .get(`/products/filter?${value}`)
    .then((response) => response.data)
    .catch((error) => error)
}

function getColors() {
  return axios('/colors').then((response) => (response.data))
}

function getBrands() {
  return axios('/filters/brands').then((response) => (response.data))
}
const parseToFilterValue = (obj, sort = '', pages, allCategories, catalogLocation) => {
  let valOfBrands = '';
  let valOfPrice = '';
  let valOfColor = '';
  const valOfPerPage = `perPage=${pages.perPage}`;
  const valOfStartPage = `startPage=${pages.startPage}`;
  const valOfSort = sort.sortName ? `&sortName=${sort.sortName}&sortValue=${sort.sortValue}` : '';

  if (obj.brand.length > 0) {
    valOfBrands = `brand=${obj.brand.join(',')}`
  }

  if (obj.price.length > 0) {
    valOfPrice = `minPrice=${obj.price[0]}&maxPrice=${obj.price[1]}`
  }

  if (obj.color.length > 0) {
    valOfColor = `color=${obj.color.join(',')}`
  }

  const subCategories = allCategories.filter((category) => category.parentId === catalogLocation);
  const subCategoriesString = subCategories ? subCategories.map((subCategory) => subCategory.id).join(',') : '';
  const categoryForFilter = !subCategoriesString ? catalogLocation : subCategoriesString;

  const valToFilter = `categories=${categoryForFilter}&${valOfBrands}&${valOfColor}&${valOfPrice}&${valOfPerPage}&${valOfStartPage}${valOfSort}`
  return valToFilter
};

export {
  getFilteredProducts,
  getInfinityFilteredProducts,
  getColors,
  getBrands,
  parseToFilterValue,
}
