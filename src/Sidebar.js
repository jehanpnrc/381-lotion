import React, { } from 'react';

function Sidebar() {
    return (
      <div className="sidebar_container">
        <div id="notes_header">
          <div id='notes_header_contents'>
            <h2>Notes</h2>
            <button className='add_note'>+</button>
          </div>
          
        </div>
        <div id="notes_list">
          
            <div className='sidebar_note'>
            <div className='sidebar_title'>
              <strong>TITLE</strong>
              <small className='note-preview'>Preview</small>
              <small className='note-meta'>Last modified [date]</small>
            </div>
          </div>

      

        </div>
      </div>
    );
  }
  
  export default Sidebar;
  