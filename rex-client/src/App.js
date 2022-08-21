import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Battlefield from "./Components/Battlefield"

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Battlefield />}>
              <Route index element={<Battlefield />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
