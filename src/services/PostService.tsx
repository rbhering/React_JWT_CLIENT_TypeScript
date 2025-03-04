import axios from "axios";
import AuthHeader from './AuthHeader';
import Post from "../interfaces/Post";

const baseURL = "https://localhost:5001";

const API_URL = "/api/posts";

const getAllPosts = () => {
  return axios.get(baseURL+API_URL, { headers: AuthHeader() });
};



const createPost = async (id:number, titulo:string,text:string, userId: number) => {
  return await axios
    .post<Post>(baseURL + API_URL + "/create", 
    {
      id,
      titulo,
      text,
      userId
    }, 
    { headers: AuthHeader() })
    .then((response : any) => {
      if (response.data) {
        //localStorage.setItem("user", JSON.stringify(response.data));
        console.log(response.data)
      }
      return response;
    });
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
  getPostsById,
  createPost
};

export default PostService;