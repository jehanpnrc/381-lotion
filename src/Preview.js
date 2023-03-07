import { useOutletContext } from "react-router-dom";

function Preview() {
    const [activeNote, onUpdateNote] = useOutletContext();
    return (
        <div className='main_container'>
            <div className='title_area'>
                <p className="title_pp">{activeNote.title}</p>
                <button className ='note_button'>Edit</button>
                <button className='note_button'>Delete</button>
            </div>
                <small>{new Date(activeNote.lastModified).toLocaleDateString("eg-GB", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}</small>
                <div className='text_area'>
  {activeNote.body && new DOMParser().parseFromString(activeNote.body, 'text/html').body.textContent}
</div>

        
        </div>
    );
}

export default Preview;