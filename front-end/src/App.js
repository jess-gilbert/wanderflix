import "./App.css";
import Navbar from "./navbar/Navbar";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Watchlist from "./pages/Watchlist";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Watchlist" element={<Watchlist />} />
      </Routes>
    </div>
  );
}

export default App;
