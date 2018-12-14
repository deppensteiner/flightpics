import React, { Component } from 'react';
import Icon from './Icon';

const moment = require('moment');

class Card extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      title: this.props.title,
      date: this.props.date,
      departure: this.props.departure,
      arrival: this.props.arrival,
      imageURL: this.props.imageURL,
      id: this.props.id,
    };

    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
  }

  parseDate(date) {
    return moment(date).format("DD. MMM. YYYY");
  }

  onMouseLeave() {
    this.setState({ hoverId: null });
  }

  onMouseEnter() {
    this.setState({ hoverId: this.state.id });
  }

  render() {
    return (
      <div className={`card-container ${this.state.hoverId === this.state.id ? 'hover' : ''}`}>
        <img
          src={this.state.imageURL}
          alt={this.state.title}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        />
        <div className="more-link" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} >
          <span onClick={e => this.props.detailView(this.state.id, e)}><Icon id="images" /> FOTOS</span>
        </div>
        <span className="date">
            <Icon id="calendar" /> {this.parseDate(this.state.date)}
          </span>
        <div className="card-container-text">
          <label className="title">{this.state.title}</label>
          <span className="departure">
            <Icon id="plane-departure" /> {this.state.departure}
          </span>
          <span className="arrival">
            <Icon id="plane-arrival" /> {this.state.arrival}
          </span>
        </div>
      </div>
    );
  }
}

export default Card;
