import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import SideBar from './Components/SideBar/SideBar';

function App() {
  return (
    <div className="wrapper">
      <h1>Welcome to Rex Client!</h1>
      {<SideBar />}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />} >
            
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
