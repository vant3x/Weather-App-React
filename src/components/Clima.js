import React, { Component } from 'react';
class Clima extends Component{

  
  mostrarResultado = () => {
    const {name, weather, main, clouds} = this.props.resultado;
    
    if(!name || !weather || !main || !clouds) return null;

    // convert kelvin to centigrade
    const kelvin = 273.15;

    return(
      <div className="row">
       <div className="resultado col s12 m8 l6 offset-m2 offset-l3">
         <div className="card-panel light-blue align-center">
           <div className="white-text">
             <h2>Resultado Clima de: {name}</h2>
             <p className="temperatura">
               Actual: { (main.temp - kelvin).toFixed(2) } &deg;C
             </p>
           </div>
         </div>
       </div>
      </div>
    )
  }

  render() {
    console.log(this.props.resultado);
    return(
      <div className="container">
        {this.mostrarResultado( )}
      </div>
    )
  }
}

export default Clima;