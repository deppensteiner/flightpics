import React, { Component } from 'react';
import Icon from './Icon';
import Card from './Card';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = { item: this.props.data };
  }

  render() {
    const item = this.state.item;
    return (
      <div className="post">
        <div className="post-inner-container post-inner">
          <Icon className="caret-left" id="caret-left" /> 
          <Icon className="caret-right" id="caret-right" /> 
          <Card
            id={item.id}
            title={item.title}
            date={item.date}
            departure={item.departure}
            arrival={item.arrival}
            imageURL={item.imageURL}
          />
        </div>
        <div className="post-inner-container post-description">
          <span className="description">{item.description}</span>
        </div>
      </div>
    );
  }
}

export default Header;
