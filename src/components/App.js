import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Error from './Error';

class App extends Component {

  state = {
    error: ''
  }

  componentDidMount() {
    this.setState({
      error: false
    })
  } 
    
  // data query 
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
    const error = this.state.error;

    let resultado;

    if (error) {
      resultado = <Error mensaje='Ambos campos son obligatorios'/>
    }


    return (
      <div className="app">
        <Header 
          titulo = "Weather App React" 
        />
        <Formulario 
          dataQuery = {this.dataQuery}
        />
        {resultado}
      </div>
    );
  }
}

export default App;
