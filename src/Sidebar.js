import React, { useState } from 'react';

function Sidebar( {notes} ) {
    const [title, setTitle] = useState([]);
  
    const addNote = () => {
      setTitle([...title, "Untitled"]);
    };
  
    return (
      <div className="sidebar_container">
        <div id="notes_header">
          <h2>Notes</h2>
          <button onClick={addNote}>+</button>
        </div>
        <div id="notes_list">
          {notes.map((note) => ( 
            <div className='sidebar_note'>
            <div className='sidebar_header'>
              <strong>TITLE</strong>
              <small className='note-meta'>Last modified [date]</small>
            </div>
          </div>

          ))}

        </div>
      </div>
    );
  }
  
  export default Sidebar;
  