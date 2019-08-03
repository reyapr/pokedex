import { Middleware } from 'middleware-type'
export const actionType = {
  GET_POKEMON: 'GET_POKEMON'
}

export const getPokemon = () => ({ dispatch, fetch }: Middleware)=> {
  fetch('pokemon')
  .then(res => {
    console.log(res)
  })
  .catch(err=>{
    console.log(err)
  })
}