import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Item from './Item';
import Loading from './Loading'

const CONTENT_QUERY = gql`
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

const Items = () => {
  return (
    <Query query={CONTENT_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <Loading />
        if (error) return <div>Error</div>

        return data.flightses.map((currentItem, key) => (
          <Item key={key} item={currentItem} />
        ))
        
      }}
    </Query>
  )  
}

export default Items;
