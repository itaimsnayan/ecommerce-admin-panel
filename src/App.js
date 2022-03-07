import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/sharedComponents/Sidebar";
import Navbar from "./components/sharedComponents/Navbar";
import "antd/dist/antd.css";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Sidebar />
          <Routes>
            <Route
              path="/dashboard"
              element={<Dashboard />}
              exact
            />
          </Routes>
        </div>

        <div>
          <Routes>
            <Route
              path="/"
              element={<Login />}
              exact
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;