import { Reducer } from 'redux'
import { actionType } from '../actions/pokemon'
export interface PokemonState {
  list: Array<any>
}

const pokemonState = {
  list:[]
}

const pokemon: Reducer = (state: PokemonState = pokemonState, { type, payload }) => {
  switch(type){
    case actionType.GET_POKEMON:
      return {
        ...state,
        list: [...payload.results]
      }
    default:
      return state
  }
}

export default pokemon