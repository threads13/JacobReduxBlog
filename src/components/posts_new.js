import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField(field){
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
      </div>
    )
  }

  render(){
    return(
      <div>
        <h3>New post</h3>
        <Link to="/">Back</Link>
        <form className="form-group">
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
    errors.title = "Enter an author";
  }

  if (!values.title){
    errors.content = "Enter some content";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostNewForm'
})(PostsNew);
