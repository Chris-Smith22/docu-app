import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from "./pages/home"
import Write from "./pages/writedoc"
import Viewdoc from './pages/viewdoc';




function App() {
  return <div className="App"> 
    <div className='Header'></div>
    <Router>
      <div className='navbar'>
        <Link to="/"> Home </Link>
        <Link to="/createdoc"> Create New Document</Link>
      </div>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/createdoc" element={<Write />} />
        <Route path="/viewdoc/:id" element={<Viewdoc />} />
        
      </Routes>
    </Router>
  </div>;
}

export default App;
