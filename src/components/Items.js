
import React, { Component } from 'react';
import Item from './Item';
import Details from './Details';
import Loading from './Loading';

class Items extends Component {

  constructor(props) {
    super(props);
    this.state = {
      openById: null,
      data: this.props.data,
    };
    
    this.openDetailViewer = this.openDetailViewer.bind(this);
    this.closeDetailViewer = this.closeDetailViewer.bind(this);
  }

  openDetailViewer(id) {
    this.setState({ openById: { id }});
  }

  closeDetailViewer() {
    this.setState({ openById: false });
  }

  render() {
    if (!this.state.data) return <Loading />
    return (
      <div>
          {
            this.state.openById ?
              <Details id={this.state.openById.id} closeDetailViewer={this.closeDetailViewer} />
            :
              <div />
          }
          {
              this.state.data.map((currentItem, key) => (
              <Item key={key} item={currentItem} onDetailView={this.openDetailViewer} />
            ))
          }
      </div>
    )
  }
}

export default Items;
