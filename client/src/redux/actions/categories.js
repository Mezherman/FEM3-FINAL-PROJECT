export default function getCatalog(allCategories, mainCategories) {
  return {
    type: 'GET_CATEGORIES',
    payload: {
      allCategories,
      mainCategories
    }
  }
}