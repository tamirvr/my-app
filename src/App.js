import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import Particles from 'react-particles-js';
import './App.css';



class App extends Component {
  constructor(){
    super();
    this.state = {
      ínput: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }
  render() {
    return (
      <div className="App">
      <Particles className = 'particles'
        params={{
            particles: {
            number: {
                value: 30,
                density: {
            enable: true,
             value_area: 800
      }
    }
                }
              }}
          
            />
    <Navigation />
    <Logo />
     <Rank />
    <ImageLinkForm  onInputChange = { this.onInputChange}/>
    
      </div>
    );
  }
}

export default App;
