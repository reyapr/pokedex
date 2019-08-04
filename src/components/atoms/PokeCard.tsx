import React from 'react'
import { Link } from 'react-router-dom'

export interface Props {
  pokemonDigitId: string,
  name: string
} 

const PokeCard: React.FC<Props> = ({ name, pokemonDigitId }) => {
  const imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonDigitId}.png`
  return (
    <div className="col-md-3 card mx-0-auto " style={{margin: "40px", padding: '0px'}}>
      <img src={imageUrl} className="card-img-top bg-info" alt="pokemon"/>
      <div className="card-body text-center">
        <p className="card-text text-center">#{pokemonDigitId}</p>
        <Link className="card-text text-center" to={`/pokemon/${pokemonDigitId.slice(-1)}`}>{name}</Link>
      </div>
    </div>
  )
}

export default PokeCard
