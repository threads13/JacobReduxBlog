import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'fetch-post';
export const DELETE_POST = 'delete-post';
export const EDIT_POST = 'edit-post';

const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = '?key=jacobblog2'

export function fetchPosts(){
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(values, callback){
  const request = axios
  .post(`${ROOT_URL}/posts${API_KEY}`, values)
  .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  };
} 

export function fetchPost (id){
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id, callback){
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
  .then(() => callback());

  return {
    type: DELETE_POST,
    payload: id
  }
}

// maybe i need a get to the edit form page, then a post request afterwards

// export function editPost(values, calback){
//   const request = axios.post(`${ROOT_URL}/posts/${id}${API_KEY}`, values)
//   .then(() => callback);
//
//   return {
//     type: EDIT_POST,
//     payload: request
//   };
// }
