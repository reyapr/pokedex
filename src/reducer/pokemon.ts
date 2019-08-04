import { Reducer } from 'redux'
import { actionType } from '../actions/pokemon'
export interface PokemonState {
  list: Array<any>
  detail: object
}

const pokemonState = {
  list:[],
  detail: {}
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
    default:
      return state
  }
}

export default pokemon