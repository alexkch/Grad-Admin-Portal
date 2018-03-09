import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Ticket from './Ticket/Ticket';

class App extends Component {
  state = {
    persons : [
      { id: '1', name: 'Max', age : 20},
      { id: '2', name: 'Chunko', age : 30},
      { id: '3', name: 'Dunko', age : 50}
    ],
    show: false
  }

  switchNameHandler = (newName) => {
    console.log('clicked');
    this.setState({
      persons : [
          { name: newName },
          { name: 'ddo'},
          { name: '66'}
        ]
    });
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  deleteHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  toggleHandler = () => {

    const doesShow = this.state.show;
    this.setState({show : !doesShow});
  }

  render() {

    let person = null;
    if (this.state.show) {
      person = (
        <div>
          {this.state.persons.map((person, index) => <Ticket ticket_id="10000000e" name={person.name}
            click={this.deleteHandler.bind(this,index)}
            changed={event => this.nameChangeHandler(event, person.id)}
            key={person.id}
            >Cool ticket </Ticket>
          )}
        </div>
      );
    }


    return (
      <div className="App">
        <h1> Test App </h1>
        <button onClick={this.toggleHandler}> Toggle Person </button>
        {person}
      </div>
    );
  }
}

export default App;
