// import React, { Component } from 'react';
//
// class PostsUpdate extends Component {
//   render(){
//     return (
//       <div>
//         <h2>{post.title}</h2>
//       </div>
//     );
//   }
// }

// export default PostsUpdate;
//
//

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { editPost, fetchPost, deletePost } from '../actions';

class PostEdit extends Component {
  renderField(field){
    const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
      <div className="text-help">
        {field.meta.touched ? field.meta.error: ''}
      </div>
      </div>
    )
  }

  // onSubmit(values){
  //   // console.log(values);
  //   this.props.editPost(values);
  // }

  onSubmit(values) {

    console.log(this.post.id);

    this.props.editPost(values, () => {
      this.props.history.push("/");
    });
  }

  onEditClick(values){
    // i can now get the id sent to my edit onClick
    // need to figure out how to get it sent through
    const post = this.props.post;
    console.log(post);
    // console.log(post);


    // const { id } = this.props.match.params;

    this.props.editPost(values, () => {
      this.props.history.push("/")
    });
  }


  render(){
    const { handleSubmit } = this.props;

    const {post} = this.props;
    // console.log(post.id);


    return(
      <div>
        <h3>Edit post</h3>
      {post.title}

      {post.id}

        <form onSubmit={handleSubmit(this.onSubmit.bind(this)),post.id} className="form-group">
          <Field
            name="title"
            component={this.renderField}
            label="Title"
          />
          <Field
            name="author"
            component={this.renderField}
            label="Author"
          />
          <Field
            name="content"
            component={this.renderField}
            label="Post Content"
          />
        <button type="submit" className="btn btn-primary">Submit</button>
      <Link className="btn btn-danger" to="/">Back</Link>
        </form>
      </div>
    );
  }
}

function validate(values){
  const errors = {};

  if (!values.title){
    errors.title = "Enter a username";
  }

  if (!values.author){
    errors.author = "Enter an author";
  }

  if (!values.content){
    errors.content = "Enter some content";
  }

  return errors;
}

function mapStateToProps({ posts }, ownProps){
  return {post: posts[ownProps.match.params.id]};
}

export default reduxForm({
  validate,
  form: 'PostEditForm'
})(
  connect(mapStateToProps, {editPost, fetchPost, deletePost})(PostEdit)
);
