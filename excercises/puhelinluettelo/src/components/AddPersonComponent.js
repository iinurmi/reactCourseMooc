import React from 'react'

const AddPersonComponent = ({handleSubmit, handleChange, name, phone}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        nimi: <input name="newName" onChange={handleChange} value={name} />
      </div>
      <div>
        numero: <input name="newPhone" onChange={handleChange} value={phone} />
      </div>
      <div>
        <button type="submit">lisää</button>
      </div>
    </form>
  )
}

export default AddPersonComponent
