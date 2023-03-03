import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
        <div className="header">
        <div className="head" id="button">
            <button><span>&#9776;</span></button>
        </div>
        <div className="head" id="title">
            <h1>Lotion</h1>
            <p>Like Notion, but worse</p>
        </div>
        </div>
        <div className="container">
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
      <div className="main_container">
            <div id="empty_text">
                <input type="text" placeholder="Untitled"/>
                <button>Save</button>
                <h2>Select a note, or create a new one</h2> 
            </div>
            
        </div>
        </div>
        </>
    );
}