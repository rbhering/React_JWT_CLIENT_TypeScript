import React, { useEffect } from "react";
import { Routes, Route, Router, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Util from "./hooks/Util";
import Login from "./pages/Login"
import Posts from "./pages/Posts";
import Footer from "./components/Footer";
import AuthService from "./services/AuthService";

function App() {
  // Call the function outside of the JSX
  

  return (
  <div>
    {/* {Util.RefreshToken()} */}
    <div className="container-md mt-5">
      <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  
  </div>
  );
}

export default App;
