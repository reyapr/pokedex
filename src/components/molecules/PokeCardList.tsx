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

  useEffect(()=>{
    console.log('test')
    getPokemon()
  },[getPokemon])
  return (
    <div className="container-fluid">
      <div className="row p-1">
        {
            pokemonList.map(pokemon => {
            return(
              <PokeCard
                name={pokemon.name}
                pokemonId={Number(pokemon.url.substr(-2,1))}
              />
            )
          })
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state: ReduxState) => ({
  pokemonList: state.pokemon.list
})
const mapDispatchToProps = { getPokemon }

export default connect(mapStateToProps, mapDispatchToProps)(PokeCardList)
