import React from 'react'

export interface Props {} 

const Loader: React.FC = () => {
  return (
    <div className="d-flex align-items-center">
      <strong>Loading...</strong>
      <div className="spinner-border mx-auto" role="status" aria-hidden="true"></div>
    </div>
  )
}

export default Loader
