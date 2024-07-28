
import './App.css';
import Home from './pages/Home';
import AddBooks from './pages/AddBooks';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/addbooks" element={<AddBooks/>}></Route>
        </Routes>
      </Router>
  
    </div>
  );
}

export default App;
