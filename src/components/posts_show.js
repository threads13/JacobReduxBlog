import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';

class PostsShow extends Component {
  componentDidMount(){
    const {id} = this.props.match.params;
    this.props.fetchPost(id);
  }

  onDeleteClick() {
     const { id } = this.props.match.params;

     this.props.deletePost(id, () => {
       this.props.history.push("/");
     });
   }

  onEditClick(){

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
        <Link
          to={`/posts/${post.id}/edit`}
          className="btn btn-danger content"
          onClick={this.onEditClick.bind(this)}
          >
          Edit
        </Link>
        <button
          to="/"
          className="btn btn-danger content"
          onClick={this.onDeleteClick.bind(this)}
          >
          Delete
        </button>
        <p>
          <Link to="/" className="content">
            Back
          </Link>
        </p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps){
  return {post: posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps, { fetchPost, deletePost } )
(PostsShow);
