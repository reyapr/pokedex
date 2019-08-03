import React, { useEffect } from 'react'
import PokeCard from '../atoms/PokeCard'
import { connect } from 'react-redux'
import { getPokemon } from '../../actions/pokemon'
import { ReduxState } from '../../reducer/configReducer'

export interface Props {
  pokemonList: Array<any>,
  getPokemon: () => void
} 

const PokeCardList: React.FC<Props> = ({ pokemonList, getPokemon }) => {
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

const mapStateToProps = (state: ReduxState) => ({
  pokemonList: state.pokemon.list
})
const mapDispatchToProps = { getPokemon }

export default connect(mapStateToProps, mapDispatchToProps)(PokeCardList)
