import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostsNew extends Component {
  render(){
    return(
      <div>
        <h1>New post</h1>
        <Link to="/">Back</Link>
        <form className="form-group">
          <input></input>
        </form>
      </div>
    );
  }
}

export default PostsNew;
