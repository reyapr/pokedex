declare module "middleware-type" {
  import { Method, AxiosResponse } from "axios"

  export interface Init {
    params?: object
    method?: Method
    headers?: object
    body?: any
  }

  export type GetState = () => State;
  export type DepsFetch = (string, Init?) => Promise<AxiosResponse>

  export interface Middleware {
    fetch: DepsFetch
    getState: GetState
    dispatch: Dispatch
  }
}