import React from "react"
import PokeCardList from '../molecules/PokeCardList'

export interface Props {} 

const Pokedex: React.FC = () => {
  return (
    <React.Fragment>
      <PokeCardList/>
    </React.Fragment>
  )
}

export default Pokedex
