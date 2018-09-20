import React from 'react';
import PropTypes from 'prop-types';


const Error = (props) => {
  return(
    <div className="container">
      <div className="row">
        <div className="col s12 m6 offset-m3">
          <div className="card-panel red lighten-1 error">
            <h4>  {props.mensaje} </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

Error.propTypes = {
  mensaje: PropTypes.string.isRequired  
}

export default Error;