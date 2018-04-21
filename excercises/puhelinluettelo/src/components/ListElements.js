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

export default ListElements
