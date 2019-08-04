import { Middleware } from 'middleware-type'
import { PokemonDetailParam } from 'action-type'

export const actionType = {
  GET_POKEMON: 'GET_POKEMON',
  GET_POKEMON_DETAIL: 'GET_POKEMON_DETAIL',
  CLEAR_POKEMON_DETAIL: 'CLEAR_POKEMON_DETAIL'
}

export const getPokemon = () => ({ dispatch, fetch }: Middleware)=> {
  fetch('pokemon?limit=964')
  .then(res => {
    dispatch({
      type: actionType.GET_POKEMON,
      payload: res.data
    })
  })
  .catch(err=>{
    console.log(err)
  })
}

export const getPokemonDetail = ({ pokemonId }: PokemonDetailParam) => ({ dispatch, fetch }: Middleware) => {
  fetch(`pokemon/${pokemonId}`)
  .then(res => {
    dispatch({
      type: actionType.GET_POKEMON_DETAIL,
      payload: res
    })
  })
  .catch(err =>{
    console.log(err)
  })
}

export const clearPokemonDetail = () => ({
  type: actionType.CLEAR_POKEMON_DETAIL
})