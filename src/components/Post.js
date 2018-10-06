import React, { Component } from 'react';
import Icon from './Icon';

const moment = require('moment');

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = { item: this.props.data };
  }

  parseDate(date) {
    return moment(date).format("DD. MMM. YYYY")
  }

  render() {
    const item = this.state.item;
    return (
      <div className="post">
        <div className="post-inner">
          <Icon className="caret" id="caret-left" /> 
          <label className="title">{item.title}</label>
          <span className="date">{this.parseDate(item.date)}</span>
          <span className="description">{item.description}</span>
          <img src={item.imageURL} alt={item.title} />
        </div>
      </div>
    );
  }
}

export default Header;
