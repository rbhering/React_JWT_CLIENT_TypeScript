import {useEffect} from 'react'
import AuthService from "../services/AuthService"; 

const URL = 'http://localhost:3000/';

const RefreshToken = () => {    
    // useEffect(() => {
        setInterval(() => {
          if(window.location.href !==URL){
            //alert(window.location.href)
            AuthService.loginWithRefreshToken(AuthService.getCurrentUser().refreshToken);
            return 1;
          }  
        }, 1 * 60 * 1000);
    //   }, [])
      return 1;
};

// const RenderPost = () => {
//     useEffect(() => {
//       setInterval(() => {
//         PostService.getAllPosts().then(
//           (response) => {
//             //setPosts(response.data);
//           })
//         //alert('SDF')
//       }, 1 * 30 * 1000)
//     }, [])

//   }
//   RenderPost();



const Util = {
  
  RefreshToken
};

export default Util;