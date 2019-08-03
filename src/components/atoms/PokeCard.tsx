import React, { useEffect } from 'react'

export interface Props {
  pokemonId?: any,
  name: string
} 

const PokeCard: React.FC<Props> = ({ name, pokemonId }) => {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`
  return (
    <div className="col-md-3 card mx-0-auto " style={{margin: "40px", padding: '0px'}} >
      <img src={imageUrl} className="card-img-top bg-info" alt="pokemon"/>
      <div className="card-body">
        <p className="card-text text-center">{name}</p>
      </div>
    </div>
  )
}

export default PokeCard
