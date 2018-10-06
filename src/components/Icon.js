import React, { Component } from 'react';
require('font-awesome/css/font-awesome.css');

class Icon extends Component {

  constructor(props) {
    super(props);
    this.state = {
      icon: this.props.id,
      className: this.props.className,
    };
  }

  render() {
    return (
      <i className={`fa fa-fw fa-${this.state.icon} ${this.state.className}`}></i>
    );
  }
}

export default Icon;
