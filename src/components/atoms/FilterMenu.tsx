import React, { ChangeEvent } from 'react'

export interface Props {
  onChange: (arg0:React.ChangeEvent<HTMLSelectElement>) => void
  value: string
} 

const FilterMenu: React.FC<Props> = ({ onChange, value }) => {
  return (
    <select className="custom-select bg-info text-light" onChange={onChange} value={value}>
      <option value=''>Filter by...</option>
      <option value="Highest Number">Highest Number</option>
      <option value="Lowest Number">Lowest Number</option>
      <option value="Z-A">Z-A</option>
      <option value="A-Z">A-Z</option>
    </select>
  )
}


export default FilterMenu
