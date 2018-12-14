
import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Item from './Item';
import Loading from './Loading'
import Details from './Details';

class Items extends Component {

  constructor(props) {
    super(props);
    this.state = {
      openById: null,
    }
    this.CONTENT_QUERY = gql`
      {
        flightses {
          id
          date
          title
          departure
          arrival
          description
          img {
            id
            url
          }
        }
      }
    `;
    
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
    return (
      <Query query={this.CONTENT_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <Loading />
          if (error) return <div>Error</div>

          return (
            <div>
                {
                  this.state.openById ?
                    <Details id={this.state.openById.id} closeDetailViewer={this.closeDetailViewer} />
                  :
                    <div />
                }
                {
                    data.flightses.map((currentItem, key) => (
                    <Item key={key} item={currentItem} onDetailView={this.openDetailViewer} />
                  ))
                }
            </div>
          );
   
        }}
      </Query>
    )  
  }
}

export default Items;
