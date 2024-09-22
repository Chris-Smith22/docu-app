import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from "./pages/home"
import Write from "./pages/write"




function App() {
  return <div className="App"> 
    <div className='Header'></div>
    <Router>
      <Link to="/createdoc"> Write a New Document</Link>
      <Link to="/"> Home </Link>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/createdoc" element={<Write />} />

      </Routes>
    </Router>
  </div>;
}

export default App;
