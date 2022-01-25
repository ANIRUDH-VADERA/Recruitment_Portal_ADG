import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage.js"
import SignUp from "./Components/SignUp.js";
import Login from "./Components/Login.js";
import Aboutyourself from "./Components/Aboutyourself.js"
import DomainPage from "./Components/DomainPage.js"


function App() {
  return (
    <Router>
      <div className="App">
        <Routes >
          <Route path="/" element={<LandingPage />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/aboutyou" element={<Aboutyourself />} />
          <Route path="/domain" element={<DomainPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
