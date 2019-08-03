import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducer/configReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const storeEnhancer = composeWithDevTools(
  applyMiddleware(
    thunk,
    ...(process.env.NODE_ENV === 'development' ?  [logger]: [] )
  )
)

const store = createStore(reducer, storeEnhancer)

export default store