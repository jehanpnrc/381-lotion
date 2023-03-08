import { useEffect, useState } from "react";
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate, useParams } from "react-router-dom";

function Layout() {
  // Initialize state variables
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );
 // Array of notes
  const [activeNote, setActiveNote] = useState(false); // ID of active note
  const [showSidebar, setShowSidebar] = useState(true); // Whether to show the sidebar or not
  const navigate = useNavigate(); // Navigation function from React Router
  const {place} = useParams();

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  
  // Add a new note to the array of notes
  const onAddNote = () => {
    const newNote = {
      id: uuidv4(),
      title: "Untitled",
      body: "",
      lastModified: Date.now(),
      // place: notes.indexOf(newNote) + 1,
    };

  // Update the place property of existing notes and set the new note as the active note
   const updatedNotes = notes.map(note => ({ ...note, place: note.place + 1 }));

    // Add the new note to the beginning of the array
    setNotes([newNote, ...notes]);

    // Set the new note as the active note and navigate to its edit page
    setActiveNote(newNote.id);
    navigate(`/notes/1/edit`);
  }; 

  // Delete a note from the array of notes
  const onDeleteNote = (idToDelete) => {
    // Filter out the note with the specified ID and update the array of notes
    setNotes(notes.filter((note) => note.id !== idToDelete));
  };

  // Get the currently active note
  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  // Update a note in the array of notes
  const onUpdateNote = (updatedNote) => {
    // Navigate to the preview page
    navigate(`/notes/${updatedNote.place}`);

    // Map over the array of notes and update the note with the same ID as the active note
    const updatedNotesArray = notes.map((note) => {
      if (note.id === activeNote) {
        return updatedNote;
      }
      return note;
    });

    // Update the array of notes
    setNotes(updatedNotesArray);
  };

  // Toggle the visibility of the sidebar
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  // Render the layout
  return (
    <div className="App">
      <div className="header">
        <div className="head" id="button">
          {/* Button to toggle the sidebar */}
          <button onClick={toggleSidebar}>
            <span>&#9776;</span>
          </button>
        </div>
        <div className="head" id="title">
          {/* App title and description */}
          <h1>Lotion</h1>
          <p>Like Notion, but worse</p>
        </div>
      </div>
      <div className="container">
        {/* Sidebar component */}
        {showSidebar && (
          <Sidebar
            notes={notes}
            onAddNote={onAddNote}
            activeNote={activeNote}
            setActiveNote={setActiveNote}
          />
        )}

        {/* Active note editor component */}
        {getActiveNote() && (
          <Outlet context={[getActiveNote(), onUpdateNote, onDeleteNote, notes]} />
        )}
      </div>
    </div>
  );
}

export default Layout;
