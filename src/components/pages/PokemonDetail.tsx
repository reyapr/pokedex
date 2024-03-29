import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { connect } from 'react-redux'
import { getPokemonDetail, clearPokemonDetail } from '../../actions/pokemon'
import { PokemonDetailParam } from 'action-type'
import { digitHelper } from '../../libs/digitHelper'
import { ReduxState } from '../../reducer/configReducer'

interface MatchParams {
  pokemonId: string,
}

export interface Props extends RouteComponentProps<MatchParams>{
  getPokemonDetail: (arg0:PokemonDetailParam) => void
  pokemon: any
  clearPokemonDetail: () => void
} 

const PokemonDetail: React.FC<Props> = ({ match, getPokemonDetail, pokemon, clearPokemonDetail }) => {
  const pokemonAbility = pokemon.abilities || []  
  const pokoemonDetail = pokemon.stats || []  
  const [ pokeStatus, setPokeStatus ] = useState([])
  const { pokemonId } = match.params
  let pokemonDigitId = digitHelper(pokemonId)
  const imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonDigitId}.png`

  useEffect(() => {
    getPokemonDetail({ pokemonId: Number(pokemonId) })

    return function cleanup(){
      clearPokemonDetail()
    }
  },[getPokemonDetail, pokemonId, clearPokemonDetail])

  useEffect(() => {
    let allStatus: any = pokemon.stats.map((status: any) => status.base_stat) || []
    setTimeout(()=>{
      setPokeStatus(allStatus)
    },700)
  },[pokemon])

  return (
    <div className="card mt-3 mx-auto" style={{ maxWidth: '1100px'}}>
      <div className="row no-gutters align-items-center">
        <div className="col-md-4">
          <img src={imageUrl} className="card-img" alt="pokedex"/>
        </div>
        <div className="col-md-7 ml-1">
          <div className="card-body ">
            <h5>{pokemon.name}</h5>
            {
              pokoemonDetail.map((status: any, index: any) => {
                return(
                  <div className="row align-items-center" key={index}>
                    <div className="col-md-3">
                      {status.stat.name || ''}  
                    </div>: 
                    <div className="col-md-8 m-1">
                      <div className="progress">
                        <div 
                          className="progress-bar" 
                          role="progressbar" 
                          style={{width: `${pokeStatus[index] || 0}%` }} 
                          aria-valuenow={pokeStatus[index] || 0} 
                          aria-valuemin={0} 
                          aria-valuemax={100}
                          >
                            {`${pokeStatus[index] || 0 }%`}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
              <div className="col mt-3" style={{paddingLeft: 0}}>
                abilites:
                {
                  pokemonAbility.map((ability: any) =>{
                    return(
                      <div className="col">
                        - {ability.ability.name}
                      </div>
                    )
                  })
                }
              </div>
          </div>
        </div>
      </div>
     
    </div>
  )
}

const mapStateToProps = (state: ReduxState) => ({
  pokemon: state.pokemon.detail
})

const mapDispatchToProps = { getPokemonDetail, clearPokemonDetail }

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail)
