import React, { useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useOutletContext } from "react-router-dom";
import Main from './Main';

function Editor() {
    const [activeNote, onUpdateNote] = useOutletContext();
    if(!activeNote) return <Main />

    const onEditField = (field, value) => {
        onUpdateNote({
        ...activeNote,
        [field]: value,
        lastModified: Date.now(),
        })
    };
    
      
    return (
        <div className='main_container'>
            <div className='title_area'>
                <input 
                type='text' 
                className='title' 
                value={activeNote.title} 
                onChange={(e) => onEditField("title", e.target.value)}
                autoFocus
                />
                <button className ='note_button'>Save</button>
                <button className='note_button'>Delete</button>
            </div>
            <small>Date</small>
            <div className='text_area'>
            <ReactQuill 
                id='body'
                placeholder='Your Note Here'
                value={activeNote.body || ''} 
                onChange={(value) => onEditField("body", value)}
            />
            </div>

        
        </div>
    );
}

export default Editor;
