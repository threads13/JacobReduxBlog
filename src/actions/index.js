import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREAT_POST = 'create_post';

https://reduxblog.herokuapp.com/api/posts?key=jacobblog
const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = '?key=jacobblog'

export function fetchPosts(){
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPosts(values){
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values);

  return {
    type: CREAT_POST,
    payload: request
  };
}
