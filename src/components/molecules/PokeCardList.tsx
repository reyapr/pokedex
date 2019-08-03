import React from 'react'
import PokeCard from '../atoms/PokeCard'

export interface Props {} 

const PokeCardList: React.FC = () => {
  return (
    <div className="container-fluid">
      <div className="row p-1">
        <PokeCard/>
        <PokeCard/>
        <PokeCard/>
        <PokeCard/>
      </div>
    </div>
  )
}

export default PokeCardList
