import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

interface MatchParams {
  pokemonId: string
}

export interface Props extends RouteComponentProps<MatchParams>{} 

const PokemonDetail: React.FC<Props> = ({ match }) => {
  console.log(match.params,"<params")
  const { pokemonId } = match.params
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`
  return (
    <div className="card mt-3 mx-auto" style={{ maxWidth: '540px'}}>
      <div className="row no-gutters align-items-center">
        <div className="col-md-4">
          <img src={imageUrl} className="card-img" alt="image" style={{ width: '250px' }}/>
        </div>
        <div className="col-md-7 ml-1">
          <div className="card-body ">
            <p className="card-text"> Name: </p>
            <p className="card-text"> HP: </p>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default PokemonDetail
