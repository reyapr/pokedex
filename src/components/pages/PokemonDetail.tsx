import React, { useEffect } from 'react'
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

  const { pokemonId } = match.params
  let pokemonDigitId = digitHelper(pokemonId)
  const imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonDigitId}.png`

  useEffect(() => {
    getPokemonDetail({ pokemonId: Number(pokemonId) })

    return function cleanup(){
      clearPokemonDetail()
    }
  },[getPokemonDetail])

  return (
    <div className="card mt-3 mx-auto" style={{ maxWidth: '1100px'}}>
      <div className="row no-gutters align-items-center">
        <div className="col-md-4">
          <img src={imageUrl} className="card-img" alt="image"/>
        </div>
        <div className="col-md-7 ml-1">
          <div className="card-body ">
            <h5>{pokemon.name}</h5>
            {
              pokemon.stats && pokemon.stats.map((status: any) => {
                return(
                  <div className="row align-items-center">
                    <div className="col-md-3">
                      {status.stat.name}  
                    </div>: 
                    <div className="col-md-8 m-1">
                      <div className="progress">
                        <div 
                          className="progress-bar" 
                          role="progressbar" 
                          style={{width: `${status.base_stat}%` }} 
                          aria-valuenow={status.base_stat} 
                          aria-valuemin={0} 
                          aria-valuemax={100}
                          >
                            {`${status.base_stat}%`}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
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
