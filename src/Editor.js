import React, { useEffect } from 'react';
import ReactQuill, { useQuill } from 'react-quill';
import { useOutletContext } from "react-router-dom";

function Editor() {
    const activeNote = useOutletContext();
      
    return (
        <div className='main_container'>
            <div className='title_area'>
                <input type='text' className='title' value={activeNote.title}/>
                <button className ='note_button'>Save</button>
                <button className='note_button'>Delete</button>
            </div>
                <small>Date</small>
            <div className='text_area'>
              <ReactQuill placeholder='Your note here' value={activeNote.body}></ReactQuill>
            </div>
        
        </div>
    );
}

export default Editor;
