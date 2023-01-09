import React, { useState } from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import "codemirror/keymap/sublime"
import styles from './Texteditor.module.css'
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import axios from 'axios';
var qs = require('qs');

function Texteditor() {
  const [code, setCode] = useState("a = 0")
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("") // added state for output value

  const onChange = (code) => {
        setCode(code)
  }
  
  const onInputChange = (event) => {
    setInput(event.target.value)
    
  }
  
  const checkCode = () => {
    
    var data = qs.stringify({
      'code': code,
      'language': 'py',
      'input': input
  });
  var config = {
      method: 'post',
      url: 'https://api.codex.jaagrav.in',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : data
  };
  
  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      setOutput(response.data.output) // update the output value
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className={styles.main}>
      <div>Add two numbers</div>
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <CodeMirror className={styles.code}
          value={code}
          height="300px"
          options={
            {
              mode: 'python',
            }
          }
          theme={okaidia}
          onChange={onChange}
        />
        <div>
          <div>INPUT</div>
        <input 
          className="w-20 h-60 text-slate-500  rounded-lg mt-3 border-2 p-2 mr-60"
          value={input}
          onChange={onInputChange}
        />
        </div>
        <div>
        <div className="font-bold mt-5">Output</div>
        <div className='w-40 bg-slate-50 h-60 text-slate-500  rounded-lg mt-3 border-2 p-2 mr-60'>{output}</div> {/* display the output value */}
      </div>
      </div>
      <div
        onClick={() => checkCode()}
        className=" w-20 ml-80  rounded-lg mt-3 border-2 p-2 bg-green-600"
      >
        Submit Code
      </div>
      
    </div>
  );
}

export default Texteditor;
