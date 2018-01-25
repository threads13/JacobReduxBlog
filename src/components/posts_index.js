import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';
import _ from 'lodash';

class PostsIndex extends Component {
  componentDidMount(){
    this.props.fetchPosts();
  }

  renderPosts(){
    return _.map(this.props.posts, post => {
      return (
        <div>
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      </div>
      );
    });
  }

  render(){
    return(
      <div>
        <h1>Index Component</h1>
        <Link to="/posts/new">New Post</Link>
      <ul className="list-group">
        {this.renderPosts()}
      </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);