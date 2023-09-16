import './App.css';
import HomePage from './Components/HomePage';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  // It is a better approach to put routes though they are kind of unnecessary in this project
  // They can be used for the menu (but not requested in the requiremnets)
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' Component={HomePage}/>
        
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
