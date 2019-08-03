import { Reducer } from 'redux'

export interface PokemonState {
  list: Array<any>
}

const pokemonState = {
  list:[]
}

const pokemon: Reducer = (state: PokemonState = pokemonState, { type, payload }) => {
  switch(type){
    default:
      return state
  }
}

export default pokemon