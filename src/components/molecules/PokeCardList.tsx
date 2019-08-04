import React, { useEffect, useState } from 'react'
import PokeCard from '../atoms/PokeCard'
import { connect } from 'react-redux'
import { getPokemon } from '../../actions/pokemon'
import { ReduxState } from '../../reducer/configReducer'
import InfiniteScroll from 'react-infinite-scroller'
import { digitHelper } from '../../libs/digitHelper'
import Loader from '../atoms/Loader'
export interface Props {
  pokemonList: Array<any>,
  getPokemon: () => void
} 

const PokeCardList: React.FC<Props> = ({ pokemonList, getPokemon }) => {

  const [state, setState] = useState({
    itemsPage: 20,
    startIndex: 0,
    hasMore: false,
    showedItems: []
  })

  const newPokemonData = (data : any) =>{
    let copyData = [...data]
    let slicedPokemonData = copyData.splice(state.startIndex, state.itemsPage)
    let hasMore = false
    let totalLength = state.showedItems.length + slicedPokemonData.length
    if(pokemonList.length > totalLength){
      hasMore = true
    }
    return {
      hasMore,
      slicedPokemonData,
    }
  }

  const loadMore = () => {
    let { slicedPokemonData, hasMore } = newPokemonData(pokemonList)
    let showedItems: any = state.showedItems
    if(state.hasMore){
      setTimeout(() => {
        setState({
          ...state,
          showedItems: showedItems.concat(slicedPokemonData),
          startIndex: state.startIndex + 2,
          hasMore
        })
      },400)
    }
  }

  const hasMore = () => {
    console.log('hasMore')
  }

  useEffect(()=>{
    getPokemon()
  },[getPokemon])

  useEffect(() => {
    let { slicedPokemonData, hasMore } = newPokemonData(pokemonList)
    let showedItems: any = state.showedItems
    setState({
      ...state,
      showedItems: showedItems.concat(slicedPokemonData),
      startIndex: state.startIndex + 2,
      hasMore,
    })

  },[pokemonList])
  return (
    <div className="container-fluid">
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={state.hasMore}
        loader={<Loader key={state.startIndex}/>}
      >
        <div className="row p-1">
          {
              state.showedItems.map((pokemon: any, index: any) => {
              let splittedUrl = pokemon.url.split('/')
              return(
                <PokeCard
                  name={pokemon.name}
                  pokemonDigitId={digitHelper(splittedUrl[splittedUrl.length-2])}
                  key={index}
                />
              )
            })
          }
        </div>
      </InfiniteScroll>
    </div>
  )
}

const mapStateToProps = (state: ReduxState) => ({
  pokemonList: state.pokemon.list
})
const mapDispatchToProps = { getPokemon }

export default connect(mapStateToProps, mapDispatchToProps)(PokeCardList)
