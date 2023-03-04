import Sidebar from './Sidebar';
import Editor from './Editor';
import Main from './Main';

function Layout() {
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
                <Sidebar />
            
                <Editor />
                
            
            </div>
        </div>
    );
}

export default Layout;