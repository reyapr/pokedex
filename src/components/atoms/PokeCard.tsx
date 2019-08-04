import React, { useEffect } from 'react'

export interface Props {
  pokemonDigitId?: string,
  name: string
} 

const PokeCard: React.FC<Props> = ({ name, pokemonDigitId }) => {
  const imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonDigitId}.png`
  return (
    <div className="col-md-3 card mx-0-auto " style={{margin: "40px", padding: '0px'}} >
      <img src={imageUrl} className="card-img-top bg-info" alt="pokemon"/>
      <div className="card-body">
        <p className="card-text text-center">#{pokemonDigitId}</p>
        <p className="card-text text-center">{name}</p>
      </div>
    </div>
  )
}

export default PokeCard
