import React from 'react';

const Header = (props) => {
  return (
    <div>
      <header>
        <nav className="nav-wrapper light-blue accent-3">
          <div className="brand-logo">{props.titulo}</div>
        </nav>
      </header>
    </div>
  )
};

export default Header;