import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import logo from './logo.svg';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Welcome />

        <img src={logo} alt=""></img>
        <Footer />
      </div>
    );
  }
}

export default App;
