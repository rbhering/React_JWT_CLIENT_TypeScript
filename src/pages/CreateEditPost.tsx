import { useParams } from "react-router-dom";
import { Editor } from 'primereact/editor';
import { useState } from "react";

const CreateEditPost = () => {
    const { id } = useParams<{ id?: string | undefined}>();  
    const [text, setText] = useState('')
    if(id === undefined) {
        alert(id);
    }
    //alert(id);
    return (        
        <div>
            <Editor value={text} onTextChange={(e) => setText(e.htmlValue ?? '')} style={{ height: '320px' }} />   
        </div>
    );
   

}

export default CreateEditPost;