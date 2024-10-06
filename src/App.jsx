import Home from "./pages/user/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./pages/user/Layout";
import About from "./pages/user/About";
import Header from "./components/user/Header";
import Signup from "./pages/user/Signup";
import Login from "./pages/user/Login";
function App() {
  return (
    <Router>
      <Header/>
      <div>
        {/* Các route sẽ được đặt trong Switch */}
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
