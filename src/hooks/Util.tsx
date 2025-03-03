import AuthService from "../services/AuthService"; 

const URL = 'http://localhost:3000/';


const RefreshToken = () => {    

  setInterval(() => {          
    if(window.location.href !==URL){
      //alert(window.location.href)
      try {
        AuthService.loginWithRefreshToken(AuthService.getCurrentUser().refreshToken);              
        return 1;
      } catch (error) {
        console.log(error);
        window.location.reload();
        return 1;
      }     
    }  
  }, 1 * 60 * 1000);
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