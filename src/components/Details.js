
import React, { Component } from 'react';

class Details extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="more-details">
        <div className="md-overlay"></div>
        <div className="md-details">
          {this.props.id}
          <div className="md-actions">
            <button className="btn btn-default close" onClick={this.props.closeDetailViewer}>Schließen</button>
          </div>
        </div>
      </div>
    )  
  }
}

export default Details;
