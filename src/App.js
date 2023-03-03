import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';
import Editor from './Editor';
function App() {
  const [notes, setNotes] = useState([]);

  return (
    <div className='App'>
      <Header />
      <div className='container'>
          <Sidebar notes={notes}/>
          <Main />
      </div>
    </div>
  );
}

export default App;