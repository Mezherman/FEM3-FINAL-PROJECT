import { getCatalogFromDB } from './categories'
import loginLoaded, { fetchCustomerData } from './user'
import { mergeDBWithLocalStorage } from './CartActions'
import { getFavoritesFromDB } from './favorites'

const fetchRequest = () => ({
  type: 'FETCH_LOAD_REQUEST'
});

const fetchResponse = () => ({
  type: 'FETCH_LOAD_RESPONSE'
});

export default function loadAllData() {
  return (dispatch) => Promise.all([
    dispatch(getCatalogFromDB()),
    dispatch(loginLoaded()),
    dispatch(fetchCustomerData()),
    dispatch(mergeDBWithLocalStorage()),
    dispatch(getFavoritesFromDB()),
    dispatch(fetchResponse())
  ])
}