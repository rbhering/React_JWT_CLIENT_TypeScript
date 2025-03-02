import {useEffect} from 'react'
import AuthService from "../services/AuthService"; 


const RefreshToken = () => {    
    // useEffect(() => {
        setInterval(() => {
         AuthService.loginWithRefreshToken(AuthService.getCurrentUser().refreshToken);
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