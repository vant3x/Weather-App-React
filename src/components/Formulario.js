import React from 'react';

class Formulario extends React.Component {

  //Create Refs   
  cityRef = React.createRef();
  countryRef = React.createRef();

  // Search Weather
  weatherRadar = (e) => {
    e.preventDefault();

    // read the refs and create object
    const respuesta = {
     city: this.cityRef.current.value,
      country: this.countryRef.current.value
    } 

    // console.log(respuesta);

    // send to props
    this.props.dataQuery(respuesta);
    

    // reset form
    e.currentTarget.reset();
  }

  render() {
    return (
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <form onSubmit={this.weatherRadar}>
              <div className="input-field col s12 m8 l4 offset-m2">
                <input ref={this.cityRef} id="ciudad"type="text" />
                <label htmlFor="ciudad">Ciudad:</label>
              </div>

              <div className="input-field col s12 m8 l4 offset-m2">
                <select ref={this.countryRef}>
                  <option value="" defaultValue>Elige un país</option>
                  <option value="CO">Colombia</option>
                  <option value="AR">Argentina</option>
                  <option value="MX">México</option>
                  <option value="ES">España</option>
                  <option value="US">Estados Unidos</option>
                </select>
                <label htmlFor="pais">País:</label>
              </div>
              <div className="input-field col s12 m8 l4 offset-2 buscador">
                <input type="submit"
                 className="waves-effect waves-light btn-large yellow accent-4" 
                 value="Buscar..."
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Formulario;