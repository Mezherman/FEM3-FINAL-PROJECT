export default function getCatalog(allCategories, mainCategories) {
  return {
    type: 'GET_CATEGORIES',
    payload: {
      allCategories,
      mainCategories
    }
  }
}

export function setMainCategories(mainCategories) {
  return {
    type: 'SET_MAIN_CATEGORIES',
    payload: {
      mainCategories
    }
  }
}