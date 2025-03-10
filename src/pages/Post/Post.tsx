import React, { useEffect, useState } from 'react';
import IPost from '../../interfaces/Post';
import PostService from '../../services/PostService';
import { Route, useLocation, useParams } from 'react-router-dom';

function Post() {
  const [post, setPost] = useState<IPost>({id:0})

//   const location = useLocation();
//   const id = parseInt(new URLSearchParams(location.key).get(Route.) || '1');
// alert(id) 
  const id =  parseInt(useParams().id?.toString() || '1');  
  const nada = '';

  useEffect(() => {
    PostService.getPostsById(id).then(
      (response) => {
        setPost(response.data);
        console.log(response.data); 
      })
      //createPost();
  },[id]);
  
  function createPost() {
      const post1: IPost = {id: 0, titulo: 'und3fined teste', text: 'text',  userId: 1};
      PostService.createPost(post1).then(
        (response) => {
          console.log(response.data);
        });
      }
  

  
  

  return (
    <div key={post?.id} className="card">
        <h5 className="card-header">{post?.titulo}</h5>
        <div className="card-body">
            <p className="Features" dangerouslySetInnerHTML={{ __html: post.text ?? '' }}/> 
        </div>
    </div>
  );
};

export default Post;