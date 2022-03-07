import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
<<<<<<< HEAD
import Sidebar from "./components/Sidebar";
import 'antd/dist/antd.css';
=======
import "antd/dist/antd.css";
>>>>>>> bc3239b837574281ca82c4758c675de8227fd4ab

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
<<<<<<< HEAD
          <Route path="/" exact element={<Dashboard sidebar={true} navbar={true} />} />
=======
          <Route
            path="/dashboard"
            exact
            element={<Dashboard sidebar={true} />}
          />
>>>>>>> bc3239b837574281ca82c4758c675de8227fd4ab
        </Routes>
      </Router>
    </div>
  );
}

export default App;
