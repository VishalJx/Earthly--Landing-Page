import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './Components/Navbar';
import Page from './Components/Page';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Page/>}></Route>
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
