
import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Loading from './Loading'
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import Items from './Items';

class Content extends Component {

  constructor(props) {
    super(props);

    this.CONTENT_QUERY = gql`
      {
        flightses(orderBy:date_DESC) {
          id
          date
          title
          departure
          arrival
          description
          titleImage {
            id
            url
          }
        }
      }
    `;

    const httpLink = createHttpLink({
      uri: 'https://api-euwest.graphcms.com/v1/cjpmc21jv2rcq01fkewd5496k/master',
    });
    
    this.client = new ApolloClient({
      link: httpLink,
      cache: new InMemoryCache()
    });

  }
  
  render() {
    return (
      <div className="Content">
        <ApolloProvider client={this.client}>
          <Query query={this.CONTENT_QUERY}>
            {({ loading, error, data }) => {
              if (loading) return <Loading />
              if (error) return <div>Error</div>
              return <Items data={data.flightses} />      
            }}
          </Query>
        </ApolloProvider>
      </div>
    );
  }
}

export default Content;
