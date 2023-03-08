import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useOutletContext } from "react-router-dom";
import Main from './Main';
import { useNavigate } from "react-router-dom";

function Editor() {
  
  const [activeNote, onUpdateNote, onDeleteNote, notes] = useOutletContext();
  const [noteChanges, setNoteChanges] = useState(activeNote);
  const navigate = useNavigate(); // Navigation function from React Router


  // This function is called whenever a field in the note editor is edited
  // It updates the state of the noteChanges object to reflect the change
  const onEditField = (field, value) => {
    if (field === "lastModified") {
      // Parse the value from the date picker into a Date object
      const date = new Date(value);
      // Format the date into a string using the options object
      value = date.toLocaleString("en-US", options);
    }
    setNoteChanges({
      ...noteChanges,
      [field]: value,
    });
  };
  
  // This function is called when the user clicks the "Save" button
  // It calls the onUpdateNote function passed down via context, passing in the updated note object
  const onSaveNote = () => {
    onUpdateNote(noteChanges);
    navigate(`/notes/${notes.indexOf(activeNote)+1}`);
    console.log(activeNote.lastModified);
  };

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
};

const onCalendarDateChange = (e) => {
  const newDate = new Date(e.target.value);
  const formattedDate = formatDate(newDate);
  const updatedNote = {
    ...activeNote,
    lastModified: formattedDate,
  };
  onUpdateNote(updatedNote);
};

const formatDate = (when) => {
    const formatted = new Date(when).toLocaleString("en-US", options);
    if (formatted === "Invalid Date") {
        return "";
    }
    return formatted;
};

  // If there is no active note, return a Main component
  if (!activeNote) {
    navigate('\notes');
    return(
      <div className="empty_main">
            
                <h2 className="empty_notes">Select a note, or create a new one</h2> 
                </div>
    );
  }

  const onDeleteClick = () => {
    const shouldDelete = window.confirm("Are you sure you want to delete this note?");
    if (shouldDelete) {
      onDeleteNote(activeNote.id);
    }
  };


  // Otherwise, render the note editor
  return (
    <div className="main_container">
      <div className="title_area">
        {/* This input field allows the user to edit the note title */}
        <input
          type="text"
          className="title"
          value={noteChanges.title}
          onChange={(e) => onEditField("title", e.target.value)}
          autoFocus
        />
        {/* This button saves the edited note */}
        <button className="note_button" onClick={onSaveNote}>
          Save
        </button>
        {/* This button deletes the current note */}
        <button className="note_button" onClick={onDeleteClick}>
          Delete
        </button>
      </div>
      {/* This small tag displays the date the note was last modified */}
      <small>
      <input
          className='date-picker'
          type="datetime-local"
          value={formatDate(noteChanges.lastModified)}
          onChange={(e) => {
            onCalendarDateChange(new Date(e.target.value))
          }
            }
        />
      </small>
      {/* This ReactQuill component allows the user to edit the note body */}
      <div className="text_area">
        <ReactQuill
          id="body"
          placeholder="Your Note Here"
          value={noteChanges.body || ""}
          onChange={(value) => onEditField("body", value)}
        />
      </div>
    </div>
  );
}

export default Editor;
