import axios from "axios";
import AuthHeader from './AuthHeader';

const baseURL = "https://localhost:5001";

const API_URL = "/api/posts";

const getAllPosts = () => {
  return axios.get(baseURL+API_URL, { headers: AuthHeader() });
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
  getPostCount
};

export default PostService;