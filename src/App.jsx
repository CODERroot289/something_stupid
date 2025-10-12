import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/register';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
// import About from './pages/About';
// import Projects from './pages/Projects';
import "./App.css"
function App() {
return (

      <Routes>
        {/*<Route path="/" element={<Home />} />*/}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    
  );
}

export default App
