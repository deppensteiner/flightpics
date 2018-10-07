import React, { Component } from 'react';

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
