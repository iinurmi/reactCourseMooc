import React from 'react';
import ReactDOM from 'react-dom'

const ListElement = ( {person} ) => {
  return (
    <div>
      <p> {person.name} {person.phone} </p>
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', phone: '0392' }
      ],
      newName: '',
      newPhone:'',
      filter: ''
    }
  }
  handleNameChange = (event) => {
    console.log(event.target.value)
    this.setState({ newName: event.target.value})
  }
  handleFilterChange = (event) => {
    console.log(event.target.value)
    this.setState({ filter: event.target.value})
  }
  handlePhoneChange = (event) => {
    console.log(event.target.value)
    this.setState({ newPhone: event.target.value})
  }
  containsItem = (items, property, value) => {
    return items.some(item => item[property] === value);
  }
  addPerson = (event) => {
    event.preventDefault();

    if(!this.containsItem(this.state.persons, 'name', this.state.newName)){
      const persons = this.state.persons.concat({ name: this.state.newName, phone: this.state.newPhone });
      this.setState({
        persons: persons,
        newName: '',
        newPhone: ''
      })
    }
  };


  render() {
    const filteredPersons =
        this.state.filter === '' ?
          this.state.persons :
          this.state.persons.filter(person => person.name.toLowerCase().indexOf(this.state.filter.toLowerCase()) !== -1);
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form>
          <div>
            rajaa näytettäviä: <input onChange={this.handleFilterChange} value={this.state.filter} />
          </div>
        </form>
        <h2>Lisää uusi</h2>
        <form onSubmit={this.addPerson}>
          <div>
            nimi: <input onChange={this.handleNameChange} value={this.state.newName} />
          </div>
          <div>
            numero: <input onChange={this.handlePhoneChange} value={this.state.newPhone} />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <div>
          {filteredPersons.map(person =>
            <ListElement key={person.name} person={person} />
          )}
        </div>

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
