import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';

class App extends Component {
  state = {
    error: ''
  }

  componentDidMount() {
    this.setState({
      error: false
    })
  } 
     
  dataQuery = respuesta => {
    if (respuesta.city === '' || respuesta.country === '') {
      this.setState({
        error: true
      })
    } else {
      console.log('Todo correcto');
    } 
  }

  render() {
    return (
      <div className="app">
        <Header 
          titulo = "Weather App React" 
        />
        <Formulario 
          dataQuery = {this.dataQuery}
        />
      </div>
    );
  }
}

export default App;
