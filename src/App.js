import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar.js"
import LandingPage from "./Components/LandingPage.js"
import SignUp from "./Components/SignUp.js";
import Login from "./Components/Login.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes >
          <Route path="/" element={<LandingPage />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
