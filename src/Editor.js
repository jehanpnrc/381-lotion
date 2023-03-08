import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useOutletContext } from "react-router-dom";
import Main from './Main';
import { useNavigate } from "react-router-dom";


function Editor() {
  const [activeNote, onUpdateNote, onDeleteNote] = useOutletContext();
  const [noteChanges, setNoteChanges] = useState(activeNote);
  const navigate = useNavigate(); // Navigation function from React Router


  // This function is called whenever a field in the note editor is edited
  // It updates the state of the noteChanges object to reflect the change
  const onEditField = (field, value) => {
    setNoteChanges({
      ...noteChanges,
      [field]: value,
      lastModified: Date.now(),
    });
  };

  // This function is called when the user clicks the "Save" button
  // It calls the onUpdateNote function passed down via context, passing in the updated note object
  const onSaveNote = () => {
    onUpdateNote(noteChanges);
    navigate(`/notes/${activeNote.place}`);
    console.log(activeNote.id);
  };

  // If there is no active note, return a Main component
  if (!activeNote) navigate("\notes");

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
        <button className="note_button" onClick={() => onDeleteNote(activeNote.id)}>
          Delete
        </button>
      </div>
      {/* This small tag displays the date the note was last modified */}
      <small>Date</small>
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
