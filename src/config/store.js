import { compose, createStore, combineReducers } from 'redux'
import persistState from 'redux-localstorage'

import dropboxReducer from '../features/dropbox/reducer'

const rootReducer = combineReducers({
  dropbox: dropboxReducer
})

const enhancer = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  persistState(),
)

const store = createStore( rootReducer, enhancer )

export default store