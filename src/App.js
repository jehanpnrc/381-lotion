import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Sidebar from './Sidebar';
import Editor from './Editor';
import Main from './Main';
import Preview from './Preview';
import Layout from './Layout';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/notes/:place" element={<Preview/>}></Route>
          <Route path="/notes/:place/edit" element={<Editor/>}></Route>



        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;