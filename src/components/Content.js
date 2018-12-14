
import React, { Component } from 'react';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import Items from './Items';

class Content extends Component {

  constructor(props) {
    super(props);

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
          <Items />
        </ApolloProvider>
      </div>
    );
  }
}

export default Content;
