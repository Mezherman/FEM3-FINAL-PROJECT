export default function setCatalog(allCategories, mainCategories) {
  return {
    type: 'GET_CATEGORIES',
    payload: {
      allCategories,
      mainCategories,
      catalogLoaded: true
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