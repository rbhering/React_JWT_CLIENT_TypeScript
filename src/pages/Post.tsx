import React, { useEffect, useState } from 'react';
import '../components/Editor/styles.scss';
import '../components/Editor/global1.scss';
import IPost from '../interfaces/Post';
import PostService from '../services/PostService';
import { useLocation } from 'react-router-dom';

function Post() {
  const [post, setPost] = useState<IPost>()

  const location = useLocation();
  const param = new URLSearchParams(location.search).get('id') || '1';
  const id = parseInt(param);
  
  useEffect(() => {

    PostService.getPostsById(id).then(
      (response) => {
        setPost(response.data);
      })

  }, []);

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