import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login"
import Posts from "./pages/Posts";
import Footer from "./components/Footer";
import Post from "./pages/Post";
import EditorTeste from "./pages/EditorTeste";
import Header from "./components/Header";



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
        
        <Route path="*" element={<Navigate to= {"/posts"}/>} />  
      </Routes>
      <Footer />
      
    </div>
  
  </div>
  );
}

export default App;
