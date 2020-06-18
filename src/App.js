import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MyForm from './components/MyForm';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Header/>
        <MyForm/>
      </div>
    );
  }
}

export default App;