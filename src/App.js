import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Dashboard sidebar={true} navbar={true} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
