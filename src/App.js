import logo from "./logo.png";
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Invite from './Invite'

function App() {
  return (
    <BrowserRouter>

 
    <Routes>
    <Route path='/:id' element={<Invite/>} />
        </Routes>
      </BrowserRouter>

  );
}

export default App;
