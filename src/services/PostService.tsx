import axios from "axios";
import AuthHeader from './AuthHeader';
import Post from "../interfaces/Post";

const baseURL = "https://localhost:5001";

const API_URL = "/api/posts";

const getAllPosts = () => {
  return axios.get(baseURL+API_URL, { headers: AuthHeader() });
};

const getPostsById = (id: number) => {
  return axios.get<Post>(baseURL + API_URL+"/getPostById", {headers: AuthHeader(), params: { id}});
};



const getPostsPerPage = (page: number, limit: number) => {
  return axios.get(baseURL + API_URL+"/getPostPerPage", {headers: AuthHeader(), params: { page,  limit}});
};

const getPostCount = () => {
  return axios.get(baseURL + API_URL+"/getPostCount", {headers: AuthHeader()});
};

const PostService = {
  getAllPosts,
  getPostsPerPage,
  getPostCount,
  getPostsById
};

export default PostService;