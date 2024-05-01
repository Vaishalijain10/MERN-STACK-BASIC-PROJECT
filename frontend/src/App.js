import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";

function App() {
  return (
    <div>
      {/* Router handles all routes within route */}
      {/* there is only 1 routes and handle many route */}
      <Router>
        <Routes>
          <Route path="/" element={<Register />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
