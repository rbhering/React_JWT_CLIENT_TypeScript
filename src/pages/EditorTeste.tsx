import React, { useState } from 'react';
import { EditorState, RichUtils, Editor as TextEditor } from 'draft-js';

const EditorTeste: React.FC = () => {
    const [text, setText] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    };

    return (
         
        <div>
                
            <h1>Editor Teste</h1>
            <textarea value={text} onChange={handleChange} rows={10} cols={50} />
            <div>
                <h2>Output:</h2>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default EditorTeste;