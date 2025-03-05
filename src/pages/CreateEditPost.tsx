import { useParams } from "react-router-dom";
import { Editor } from 'primereact/editor';
import { useState, useEffect } from "react";
import  IPost  from '../interfaces/Post';
import PostService from "../services/PostService";

const CreateEditPost = () => {
    const { id } = useParams<{ id?: string | undefined}>();  
    const [text, setText] = useState('')
    const [titulo, setTitulo] = useState('')
    const [post, setPost] = useState<IPost | undefined>()
   
    //alert(id);
 useEffect(() => {
    if(id !== undefined) {
        alert(id);
       
            PostService.getPostsById(parseInt(id) ).then(
              (response) => {
                setPost(response.data);
                console.log(response.data); 
                setText(response.data.text);
                setTitulo(response.data.titulo);
              })
              //createPost();
        
    }
      },[id]);
      
      function createPost() {
          const post1: IPost = 
            {id: 0, titulo: titulo, text: text,  userId: post?.userId};//TEM QUE COLOCAR O IOD E O NOME OU EMAIL DO USER NO LOCALSTORAGE
          PostService.createPost(post1).then(
            (response) => {
              console.log(response.data);
            });
          }




    return (        
        <div>
            <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value ?? '')}/>  
            <Editor value={text} onTextChange={(e) => setText(e.htmlValue ?? '')} style={{ height: '320px' }} />   
        </div>
    );
   

}

export default CreateEditPost;