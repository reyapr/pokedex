import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducer/configReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import configureMiddleware from './configureMiddleware'

const middleware = configureMiddleware()

const storeEnhancer = composeWithDevTools(
  applyMiddleware(...middleware)
)

const store = createStore(reducer, storeEnhancer)

export default store