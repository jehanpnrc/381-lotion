import { useOutletContext } from "react-router-dom";

function Main () {
    const [activeNote, onUpdateNote] = useOutletContext();
    
    return (
        <div className="main_container">
            <div className="empty_main">
            
                <h2 className="empty_notes">Select a note, or create a new one</h2> 
                </div>
        </div>
    );
}

export default Main;

