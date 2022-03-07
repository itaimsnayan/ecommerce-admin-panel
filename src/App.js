import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/dashboard"
            exact
            element={<Dashboard sidebar={true} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
