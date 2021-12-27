import { createStore, combineReducers } from 'redux'
import CartReducer from './reducers/cartReducer'

const allReducers = combineReducers({ cart: CartReducer })
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
