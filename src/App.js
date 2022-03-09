import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/sharedComponents/Sidebar";
import Navbar from "./components/sharedComponents/Navbar";
import "antd/dist/antd.css";
import Login from "./components/Login";
import { useSelector } from "react-redux";
import { navigationService } from "./services/navigationService";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Sidebar />
        </div>
        <Routes>
          <Route
            path="/"
            element={<Login />}
            exact
          />
        </Routes>
        <Routes>
          <Route
            path="/dashboard"
            element={<Dashboard />}
            exact
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;