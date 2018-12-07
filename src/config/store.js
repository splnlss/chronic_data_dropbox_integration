import { createStore, combineReducers } from 'redux'

import dropboxReducer from '../features/dropbox/reducer'

const rootReducer = combineReducers({
  dropbox: dropboxReducer
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store