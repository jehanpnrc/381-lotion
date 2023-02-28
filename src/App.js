import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';
function App() {
  return (
    <div className='App'>
      <Header />
      <div className='container'>
          <Sidebar />
          <Main />
      </div>
    </div>
  );
}

export default App;