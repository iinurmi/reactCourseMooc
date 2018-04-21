import React from 'react'

const ListElements = ( {elements} ) => {
  return (
    <div>
        {elements.map(person =>
          <ListElement key={person.name} person={person} />
        )}
    </div>
  )
}
const ListElement = ( {person} ) => {
  return (
    <div>
      <p> {person.name} {person.phone} </p>
    </div>
  )
}

const FilteredList = ({filter, elements, filterBy}) => {
  const filteredElements =
      filter === '' ?
        elements :
        elements.filter(element => element[filterBy].toLowerCase().indexOf(filter.toLowerCase()) !== -1);
  console.log(filter);
  return(
    <ListElements elements={filteredElements} />
  )
}

export default FilteredList
