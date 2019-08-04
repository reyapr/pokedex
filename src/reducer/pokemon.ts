import { Reducer } from 'redux'
import { actionType } from '../actions/pokemon'
import { sortArr } from '../libs/sortHelper'
export interface PokemonState {
  list: Array<any>
  detail: object
  sort: string
}

const pokemonState = {
  list:[],
  detail: {},
  sort: ''
}

const pokemon: Reducer = (state: PokemonState = pokemonState, { type, payload }) => {
  switch(type){
    case actionType.GET_POKEMON:
      return {
        ...state,
        list: [...payload.results]
      }
    case actionType.GET_POKEMON_DETAIL:
      return {
        ...state,
        detail: payload.data
      }
    case actionType.CLEAR_POKEMON_DETAIL:
      return {
        ...state,
        detail: {}
      }
    case actionType.FILTER_ASC:
      return {
        ...state,
        list: sortArr(state.list, 'asc'),
        sort: 'asc'
      }
    case actionType.FILTER_DESC:
      return {
        ...state,
        list: sortArr(state.list, 'desc'),
        sort: 'desc'
      }
    default:
      return state
  }
}

export default pokemon