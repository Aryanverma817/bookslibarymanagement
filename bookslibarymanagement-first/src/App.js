
import './App.css';
import Home from './pages/Home';
import AddBooks from './pages/AddBooks';
import {  Routes, Route } from "react-router-dom"
import AllBooks from './component/AllBooks';

function App() {
  return (
    <div >
      
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/addbooks" element={<AddBooks/>}></Route>
          <Route path="/allbooks" element={<AllBooks/>}></Route>
        </Routes>
     
  
    </div>
  );
}

export default App;
