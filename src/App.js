import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes> 
            <Route path="/dashboard" exact element={<Dashboard sidebar={true} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
