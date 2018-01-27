import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';
import { Link } from 'react-router-dom';

class PostsShow extends Component {
  componentDidMount(){
    const {id} = this.props.match.params;
    this.props.fetchPost(id);
  }

  render(){
    const {post} = this.props;

    if(!post){
      return <div>Loading...</div>;
    }

    return(
      <div>
        <div className="newPost">
          <h2>{post.title}</h2>
        <h6>Written by: <em>{post.categories}</em></h6>
          <p className="content">{post.content}</p>
        </div>
        <Link to="/" className="btn btn-primary content">
          Back
        </Link>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps){
  return {post: posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps, { fetchPost } )(PostsShow);
