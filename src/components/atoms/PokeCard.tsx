import React, { useEffect } from 'react'

export interface Props {} 

const PokeCard: React.FC = () => {

  return (
    <div className="col-md-3 card pt-3 mx-0-auto" style={{margin: "40px"}} >
      <img src="http://bit.ly/nancy3" className="card-img-top" alt="pokemon"/>
      <div className="card-body">
        <p className="card-text">TEXT</p>
      </div>
    </div>
  )
}

export default PokeCard
