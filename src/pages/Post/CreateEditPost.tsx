import { useParams } from "react-router-dom";
import { Editor } from 'primereact/editor';
import { useState, useEffect, useMemo, useCallback } from "react";
import IPost from '../../interfaces/Post';
import PostService from "../../services/PostService";


import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Tooltip from "react-bootstrap/esm/Tooltip";
import AuthService from './../../services/AuthService';
import User from './../../interfaces/User';

const CreateEditPost = () => {
  const { id } = useParams<{ id?: string | undefined }>();
  const [text, setText] = useState('')
  const [titulo, setTitulo] = useState('')
  const [post, setPost] = useState<IPost>({id:0, titulo:'', text:''})
  const [validated, setValidated] = useState(false);
  const [editorValidation, setEditorValidation] = useState("")
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [teste, setTeste] = useState(5);


  const userLogado = AuthService.getCurrentUser();
  //alert(userLogado.userName);
  //alert(id);
  useEffect(() => {
    if (id !== undefined) {
      alert(id);

      PostService.getPostsById(parseInt(id)).then(
        (response) => {
          setPost(response.data);
          console.log(response.data);
          setText(response.data.text?? '');
          setTitulo(response.data.titulo ?? '');
        })
      //createPost();
    }
  }, [id]);

  //alert( post !== undefined ? post.user?.nome : '');

  function createPost() {
    const post1: IPost =
      { id: 0, titulo: titulo, text: text, userId: 1, user:{nome:'kjl'}};//TEM QUE COLOCAR O IOD E O NOME OU EMAIL DO USER NO LOCALSTORAGE
    PostService.createPost(post1).then(
      (response) => {
        console.log(response.data);
      });
  }

  useEffect(() => {
    if(text === '') {
      
      setEditorValidation('Please type a text.');
    }else {
      setEditorValidation('');
    }
  },[text])





  const handleSubmit = (event: any) => {
    console.log('function handleSubmit' );
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false || text === '') {      
      setEditorValidation('Please type a text.');
      alert(event.currentTarget);
      console.log(event.currentTarget)
      console.log(text)
      
    }
    else {  
      setEditorValidation('');
      createPost();
      alert(event.currentTarget);
    }

    setValidated(true);
  };
  
  // let count = 1;
  // const call = useCallback(()=> {
  //   console.log('useCallback' + count.toString())
  //   setTeste(count++)
  // },[teste])

  // const eff = useEffect(()=>{
  //   console.log('useEffect' + count.toString())
  //   setTeste(count++);
  // }, [teste])

  return (
    <div>
      {/* {post !== undefined ? post.user?.nome : ''} */}
      {post.titulo}
      {post.id}
      {post.user?.nome}
      {/* <button onClick={()=> call}>clicar call</button>
      <button onClick={()=> eff }>clicar eff</button> */}
     
      {/* <Editor value={text} onTextChange={(e) => setText(e.htmlValue ?? '')} style={{ height: '320px' }} /> */}

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">

          {/* <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value ?? '')} /> */}

        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" required value={titulo} onChange={(e) => setTitulo(e.target.value ?? '')} />
            <Form.Control.Feedback type="invalid"> 
              Please type a title.
            </Form.Control.Feedback>
          </Form.Group>
         

        </Row>
        <Row className="mb-12">
          {/* <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Label>City</Form.Label> */}
            <Editor value={post.text} onTextChange={(e) => setText(e.htmlValue ?? '')} required style={{ height: '320px' }} />
            {/* <Form.Control.Feedback type="invalid">
              Please type a text.
            </Form.Control.Feedback> */}
            {editorValidation}
          {/* </Form.Group> */}


        </Row>

        <Row className="mb-3">
          <Form.Group className="mb-3" >
         



      {/* Conditionally render the selected image if it exists */}
      {selectedImage && (
        <div>
          {/* Display the selected image */}
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br /> <br />
          {/* Button to remove the selected image */}
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )}

      <br />

      {/* Input element to select an image file */}
      <input
        type="file"
        name="myImage"
        // Event handler to capture file selection and update the state
        onChange={(event) => {
          console.log(event.target.files ? event.target.files[0] : null); // Log the selected file
          setSelectedImage(event.target.files ? event.target.files[0] : null); // Update the state with the selected file
        }}
      />











          </Form.Group>
        </Row>

        <br /><br />
        <Row className="mb-3">
          <Form.Group className="mb-3" >
            <Button type="submit">Submit</Button>
          </Form.Group>
        </Row>


      </Form>


    </div>

  );


}

export default CreateEditPost;