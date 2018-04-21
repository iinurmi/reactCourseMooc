import React from 'react'

const FilterComponent = ({filter, handlechange}) => {
  console.log(filter);
  return(
    <form>
      <div>
        rajaa näytettäviä: <input name="filter" value={filter} onChange={handlechange} />
      </div>
    </form>
  )
}

export default FilterComponent
