import React, { } from 'react';

function Sidebar({ notes, onAddNote, activeNote, setActiveNote }) {
    return (
      <div className="sidebar_container">
        <div id="notes_header">
          <div id='notes_header_contents'>
            <h2>Notes</h2>
            <button className='add_note' onClick={onAddNote}>+</button>
          </div>
          
        </div>
        <div id="notes_list">
          {notes.map((note) => (
             <div key={note.id} 
             className={`sidebar_note ${note.id === activeNote && "active"}`}
             onClick={() => setActiveNote(note.id)}
             >
             <div className='sidebar_title'>
               <strong>{note.title}</strong>
               <small className='note-preview'>{note.body && new DOMParser().parseFromString(note.body, 'text/html').body.textContent.substring(0,100) + "..."}</small>
               <small className='note-meta'>
                {new Date(note.lastModified).toLocaleDateString("eg-GB", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
                </small>
             </div>
           </div>

          ))}

        </div>
      </div>
    );
  }
  
  export default Sidebar;
  