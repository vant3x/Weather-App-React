import React, { Component } from 'react';

class Clima extends Component{
  render() {
    console.log(this.props.resultado);
    return(
      <h1>Desde Clima</h1>
    )
  }
}

export default Clima;