import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
  componentDidMount(){
    const {id} = this.props.match.params.id;
    this.props.fetchPost(id);
  }

  render(){
    const {post} = this.props;

    if(!post){
      return <div>Loading...</div>;
    }

    return(
      <div>
        <h2>{post.title}</h2>
        <h5>Written by: {post.categories}</h5>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps){
  return {post: posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps, { fetchPost } )(PostsShow);
