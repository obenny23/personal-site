import React from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Body from './components/Body';
import Footer from './components/Footer';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Welcome />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
