import React from 'react'
import { Link } from 'react-router-dom'

const layout: React.FC = () => {
  return (
    <nav className="navbar navbar-dark bg-dark sticky-top">
      <Link className="navbar-brand text-light" to="/">Pokedex</Link>
    </nav>
  )
}

export default layout
