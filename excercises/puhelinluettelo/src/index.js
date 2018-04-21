import React from 'react';
import ReactDOM from 'react-dom'
import FilteredList from './components/FilteredList'
import AddPersonComponent from './components/AddPersonComponent'
import FilterComponent from './components/FilterComponent'


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
     this.handleChange = this.handleChange.bind(this);
  }


  handleChange = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);
    this.setState({[event.target.name]: event.target.value})
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

    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <FilterComponent handlechange={this.handleChange} filter={this.state.filter}  />

        <h2>Lisää uusi</h2>
        <AddPersonComponent
          handleSubmit={this.addPerson} handleChange={this.handleChange}
          name={this.state.newName} phone={this.state.newPhone} />

        <h2>Numerot</h2>
        <FilteredList filter={this.state.filter} elements={this.state.persons} filterBy={"name"} />

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
