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
          <div>
            <li className="list-group-item" key={post.id} id="post">
              <Link className="content" to={`/posts/${post.id}`}>
                <h4>{post.title}</h4>
              </Link>
              <h6><em>Written by:</em> {post.categories}</h6>
              <p className="content">{post.content}</p>
            </li>
          </div>
      </div>
      );
    });
  }

  render(){
    return(
      <div>
        <h2 className="content">Jacob's React/Redux Blog</h2>
        <div className="text-xs-right newPost">
          <Link className="btn btn-primary" to="/posts/new">
            New Post
          </Link>
        </div>
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
