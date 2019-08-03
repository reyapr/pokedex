import { Reducer } from 'redux'

export interface PokemonState {
  pokeName: string,
  pokeImage: string,
  pokeId: number | null
}

const pokemonState = {
  pokeId: null,
  pokeName: '',
  pokeImage: ''
}

const pokemon: Reducer = (state: PokemonState = pokemonState, { type, payload }) => {
  switch(type){
    default:
      return state
  }
}

export default pokemon