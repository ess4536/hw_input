import React, { Component } from 'react';
import './assets/reset.css';
import './App.css';
import Header from './components/Header';
import MyForm from './components/MyForm';
import Footer from './components/Footer';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Header/>
        <MyForm/>
        <Footer/>
      </div>
    );
  }
}

export default App;