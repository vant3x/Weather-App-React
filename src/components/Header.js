import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <div>
      <header>
        <nav className="nav-wrapper light-blue accent-3">
          <div className="brand-logo ">  <i className="fas fa-sun center-mid"></i> {props.titulo} </div>
        </nav>
      </header>
    </div>
  )
};

Header.propTypes = {
  titulo: PropTypes.string.isRequired
}

export default Header;