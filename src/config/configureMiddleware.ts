import thunk from "redux-thunk"
import logger from "redux-logger"
import axios, { AxiosRequestConfig, AxiosResponse } from "axios"
import { Middleware } from "redux"
import { Init } from "middleware-type"

const injectCustomMiddleware: Middleware = ({ getState, dispatch }) => next => action => {

  const fetch = (input: string,  { method, params, headers, body }: Init = { method: 'get' }): Promise<AxiosResponse> => {

    const fetchAPI = axios.create({
      baseURL: 'https://pokeapi.co/api/v2/'
    })
    const axiosConfig: AxiosRequestConfig = {
      method,
      url: input,
      params,
      headers: {...headers},
      data: body
    } 
    return fetchAPI(axiosConfig)
  }

  const nextAction = typeof action === 'function' ?
    action({ getState, dispatch, fetch })
    :
    next(action)

  return nextAction

}


const configureMiddleware = () => {
  return [
    injectCustomMiddleware,
    thunk,
    ...(process.env.NODE_ENV === 'development' ?  [logger]: [] )
  ]
}
export default configureMiddleware