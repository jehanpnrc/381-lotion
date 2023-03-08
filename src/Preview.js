import { useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Preview() {
    const navigate = useNavigate(); // Navigation function from React Router
    const onDeleteClick = () => {
        const shouldDelete = window.confirm("Are you sure you want to delete this note?");
        if (shouldDelete) {
          onDeleteNote(activeNote.id);
        }
      };

    const [activeNote, onUpdateNote, onDeleteNote, notes] = useOutletContext();
    return (
        <div className='main_container'>
            <div className='title_area'>
                <h2 className="title_pp">{activeNote.title}</h2>
                <button className='note_button' onClick={() => navigate(`/notes/${notes.indexOf(activeNote)+1}/edit`)}>
                    Edit
                </button>
                <button className="note_button" onClick={onDeleteClick}>Delete</button>
            </div>
                <small>{new Date(activeNote.lastModified).toLocaleDateString("eg-GB", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}</small>
                <div className="text_area" dangerouslySetInnerHTML={{ __html: activeNote.body }}></div>

        
        </div>
    );
}

export default Preview;
