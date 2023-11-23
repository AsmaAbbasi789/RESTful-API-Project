import axios from 'axios';

const API_URL = 'http://localhost:3003';

export const getAllPosts = () => axios.get(`${API_URL}/postsData`);
export const createPost = (postData) => axios.post(`${API_URL}/postsData`, postData);
export const updatePost = (postId, postData) => axios.put(`${API_URL}/postsData/${postId}`, postData);
export const deletePost = (postId) => axios.delete(`${API_URL}/postsData/${postId}`);

export const getPost = (postId) => axios.get(`${API_URL}/postsData/${postId}`);
