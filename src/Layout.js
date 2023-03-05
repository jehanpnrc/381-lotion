import { useEffect, useState } from "react";
import Sidebar from './Sidebar';
import Editor from './Editor';
import Main from './Main';
import Preview from './Preview';
import ReactQuill from 'react-quill';
import { Outlet } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";

function Layout() {
    const [notes, setNotes] = useState([]);
    const [activeNote, setActiveNote] = useState(false);
    const navigate = useNavigate();

    const onAddNote = () => {
        const newNote = {
            id: uuidv4(),
            title: "Untitled",
            body: "",
            lastModified: Date.now(),
        }

        setNotes([newNote,...notes]);
        navigate('/notes/preview/edit')
    };

    const getActiveNote = () => {
        return notes.find((note) => note.id === activeNote);
    };

    return (
        <div className="App">
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
            <Sidebar 
                notes={notes} 
                onAddNote={onAddNote}
                activeNote={activeNote}
                setActiveNote={setActiveNote}

            />
            
            {getActiveNote() && <Outlet context={getActiveNote()} />}
            
                
                
            
            </div>
        </div>
    );
}

export default Layout;
