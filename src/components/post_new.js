import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostNew extends Component {
  render(){
    return(
      <div>
        <h1>New post</h1>
        <Link to="/">Back</Link>
      </div>
    );
  }
}

export default PostNew;
