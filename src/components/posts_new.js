import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
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

  onSubmit(values) {
    console.log(values);
    this.props.createPost(values, () => {
      this.props.history.push("/");
    });
  }
  render(){
    const { handleSubmit } = this.props;
    return(
      <div>
        <h3>New post</h3>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="form-group">
          <Field
            name="title"
            component={this.renderField}
            label="Title"
          />
          <Field
            name="categories"
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

  if (!values.categories){
    errors.categories = "Enter a category ";
  }

  if (!values.content){
    errors.content = "Enter some content";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostNewForm'
})(
  connect(null, {createPost})(PostsNew)
);
