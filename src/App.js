import React, { Component } from 'react';
import './App.css';
import Login from './components/Login/Login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
    }
  }

  checkLogin(account){}
  
  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;
