import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Error from './Error';

class App extends Component {

  state = {
    error: '',
    consulta: {},
    resultado: {}
  }

  componentDidUpdate() {
    this.queryApi();
  }

  componentDidMount() {
    this.setState({
      error: false
    })
  } 

  // API 
  queryApi = () => {
    const {city, country} = this.state.consulta;   
    if (!city || !country) return null;

    // read url and add the API Key 
    const APP_ID = 'ddcef1b2932a6ccede19eac46b39ef01';
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APP_ID}`;
   
    // query with fecth api 
    fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(datos => {
        this.setState({
          resultado: datos
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
    
  // data query 
  dataQuery = respuesta => {
    if (respuesta.city === '' || respuesta.country === '') {
      this.setState({
        error: true
      })
    } else {
      this.setState({
        consulta: respuesta 
      })
    } 
  }

  render() {
    // validate form data
    const error = this.state.error;

    let resultado;
    // error "component"
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
