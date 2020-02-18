import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:5000';

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

const parseToFilterValue = (itemNoArr, filterResults, sort = '', pages, allCategories, catalogLocation) => {

  const defaultSort = {
    quantity: -1,
    itemNo: 1
  };

  if (sort.sortName) {
    defaultSort[sort.sortName] = sort.sortValue;
  }
  let valOfBrands = '';
  let valOfPrice = '';
  let valOfColor = '';
  const valOfPerPage = `perPage=${pages.perPage}`;
  const valOfStartPage = `startPage=${pages.startPage}`;
  const valOfSort = `&sort=${JSON.stringify(defaultSort)}`;

  if (filterResults.brand.length > 0) {
    valOfBrands = `brand=${filterResults.brand.join(',')}`
  }

  if (filterResults.price.length > 0) {
    valOfPrice = `minPrice=${filterResults.price[0]}&maxPrice=${filterResults.price[1]}`
  }

  if (filterResults.color.length > 0) {
    valOfColor = `color=${filterResults.color.join(',')}`
  }

  const itemsToString = itemNoArr.join(',');
  const itemsForFilter = itemsToString ? `&itemNo=${itemsToString}` : '';
  const subCategories = allCategories.filter((category) => category.parentId === catalogLocation);
  const subCategoriesString = subCategories ? subCategories.map((subCategory) => subCategory.id).join(',') : '';
  const categoryString = !subCategoriesString ? catalogLocation : subCategoriesString;
  const categoryForFilter = categoryString !== 'search' ? `categories=${categoryString}` : '';

  const valToFilter = `${categoryForFilter}${itemsForFilter}&${valOfBrands}&${valOfColor}&${valOfPrice}&${valOfPerPage}&${valOfStartPage}${valOfSort}`
  // console.log('Filter string = ', valToFilter);
  return valToFilter
};

export {
  getFilteredProducts,
  getInfinityFilteredProducts,
  getColors,
  getBrands,
  parseToFilterValue,
}
