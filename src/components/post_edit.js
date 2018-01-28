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
import { editPost } from '../actions';

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

  onSubmit(values){
    console.log(values);
    this.props.editPost(values);
  }


  render(){
    const { handleSubmit } = this.props;

    const {post} = this.props;



    return(
      <div>
        <h3>Edit post</h3>
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="form-group">
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
  connect(mapStateToProps, {editPost})(PostEdit)
);
