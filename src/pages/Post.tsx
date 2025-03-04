import React, { useEffect, useState } from 'react';
import '../components/Editor/styles.scss';
import '../components/Editor/global1.scss';
import IPost from '../interfaces/Post';
import PostService from '../services/PostService';
import { Route, useLocation, useParams } from 'react-router-dom';

function Post() {
  const [post, setPost] = useState<IPost | undefined>()

//   const location = useLocation();
//   const id = parseInt(new URLSearchParams(location.key).get(Route.) || '1');
// alert(id) 
  const id =  parseInt(useParams().id?.toString() || '1');  
  const nada = '';

  useEffect(() => {
    PostService.getPostsById(id).then(
      (response) => {
        setPost(response.data);
      })
      //createPost();
  },[id]);
  
  function createPost() {
      //const post: IPost = {id: 0, titulo: 'titulo', text: 'text',  userId: 1};
      PostService.createPost(0,"77777777", "7777777777", 1).then(
        (response) => {
          console.log(response.data);
        });
      }
  

  
  

  return (
    <div key={post?.id} className="card">
        <h5 className="card-header">{post?.titulo}</h5>
        <div className="card-body">
            <p className="card-text">{post?.text}</p>
        </div>
    </div>
  );
};

export default Post;