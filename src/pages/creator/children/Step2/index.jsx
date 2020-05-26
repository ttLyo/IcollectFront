import React, {useState} from 'react';
import BraftEditor from "braft-editor"
import 'braft-editor/dist/index.css';
import {Divider} from "antd";

const Step2 = () => {

  const [editorState, setEditorState] = useState(BraftEditor.createEditorState(null));

  return (
    <div>
      <BraftEditor value={editorState}/>
      <Divider/>
    </div>
  );
};

export default Step2;
