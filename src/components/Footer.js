import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <span className="copyright">© {(new Date().getFullYear())} by Daniel Eppensteiner</span>
      </div>
    );
  }
}

export default Footer;
