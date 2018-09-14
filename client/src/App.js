import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
      this.state ={
        users: []
      };
  }

  componentDidMount() {
    
    fetch('/home')
      .then(res => { 
        return res.json()
      })
      .then(users => {
        this.setState({ users })
      });

  }

  render() {
    return (
      <div className="App">
          {this.state.users.map(user =>
              <h1>{user.name}</h1>
          )}
      </div>
    );
  }

}

export default App;
