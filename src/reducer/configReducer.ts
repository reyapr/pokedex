import pokemon, { PokemonState } from './pokemon'
import { combineReducers } from 'redux'

export interface ReduxState {
  pokemon: PokemonState
}

export default combineReducers({
  pokemon
})