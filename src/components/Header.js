import React, { Component } from 'react';
import './css/header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <a href="/">
            <img src="/img/logo.png" alt="Logo" />
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
