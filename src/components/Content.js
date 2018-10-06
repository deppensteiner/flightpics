import React, { Component } from 'react';
import axios from 'axios';

import Post from './Post';

class Content extends Component {

  constructor(props) {
    super(props);
    this.state = { posts: [] };

    this.fetchData = this.fetchData.bind(this);

    this.fetchData();
  }

  fetchData() {
    const that = this;
    axios.get(`https://my-json-server.typicode.com/deppensteiner/flightpics/posts`)
      .then(res => {
        that.setState({ posts: res.data });
      })
      .catch(error => {
      })
  }

  sortPosts(posts) {
    return posts;
  }

  render() {
    return (
      <div className="Content">
        { this.sortPosts(this.state.posts).map(item => (
          <Post key={item.id} data={item} />
        ))}
      </div>
    );
  }
}

export default Content;
