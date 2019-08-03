import { Middleware } from 'middleware-type'
export const actionType = {
  GET_POKEMON: 'GET_POKEMON'
}

export const getPokemon = () => ({ dispatch, fetch }: Middleware)=> {
  fetch('pokemon')
  .then(res => {
    console.log(res,'res')
    dispatch({
      type: actionType.GET_POKEMON,
      payload: res.data
    })
  })
  .catch(err=>{
    console.log(err)
  })
}