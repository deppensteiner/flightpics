import React, { Component } from 'react';
import Icon from './Icon';
import Card from './Card';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = { item: this.props.item };
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
            imageURL={item.titleImage.url}
            detailView={this.props.onDetailView}
          />
        </div>
        <div className="post-inner-container post-description">
          <span className="description" dangerouslySetInnerHTML={{__html: item.description}} />
        </div>
      </div>
    );
  }
}

export default Header;
