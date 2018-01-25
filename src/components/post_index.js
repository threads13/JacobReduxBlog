import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostIndex extends Component {
  render(){
    return(
      <div>
        <h1>Index Component</h1>
      <Link to="/post/new">New Post</Link>
      </div>
    );
  }
}

export default PostIndex;
