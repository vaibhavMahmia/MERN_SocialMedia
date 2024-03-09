import axios from 'axios';

const url = 'http://localhost:5000/posts/get-posts';

export const fetchPosts = () => axios.get(url);