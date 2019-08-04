import React, { useEffect } from 'react'
import PokeCard from '../atoms/PokeCard'
import { connect } from 'react-redux'
import { getPokemon } from '../../actions/pokemon'
import { ReduxState } from '../../reducer/configReducer'
import InfiniteScroll from 'react-infinite-scroller'
import { digitHelper } from '../../libs/digitHelper'

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
            let splittedUrl = pokemon.url.split('/')
            return(
              <PokeCard
                name={pokemon.name}
                pokemonDigitId={digitHelper(splittedUrl[splittedUrl.length-2])}
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
