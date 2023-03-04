import React, { useEffect } from 'react';
import ReactQuill, { useQuill } from 'react-quill';

function Editor() {

      
    return (
        <div className='main_container'>
            <div className='title_area'>
                <input type='text' id='title'/>
                <button className ='note_button'>Save</button>
                <button className='note_button'>Delete</button>
            </div>
                <small>Date</small>
            <div className='text_area'>
              <ReactQuill></ReactQuill>
            </div>
        
        </div>
    );
}

export default Editor;