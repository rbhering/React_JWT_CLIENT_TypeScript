import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Auth/Login"
import Posts from "./pages/Post/Posts";
import Footer from "./components/Footer";
import Post from "./pages/Post/Post";
import EditorTeste from "./pages/EditorTeste";
import Header from "./components/Header";
import CreateEditPost from "./pages/Post/CreateEditPost";
import Comments from "./pages/Comment/Comments";



function App() {
  // Call the function outside of the JSX
  

  return (
  <div>
    <Header/>
    {/* {Util.RefreshToken()} */}
    <div className="container-md mt-5">
      <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/" element={<Login />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/editorTeste" element={<EditorTeste />} />
        <Route path="/post/create-post" element={<CreateEditPost />} />
        <Route path="/post/edit-post/:id" element={<CreateEditPost />} />
        <Route path="/comments/:postId" element={<Comments />} />

        
        
        <Route path="*" element={<Navigate to= {"/posts"}/>} />  
      </Routes>
      <Footer />
      
    </div>
  
  </div>
  );
}

export default App;
