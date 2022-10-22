import "./App.css";
import Navbar from "./navbar/Navbar";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import ResultPage from "./pages/ResultPage";
import Watchlist from "./pages/Watchlist";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
      <div className="App">
        <Navbar />
        <GlobalProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/ResultPage/:query" element={<ResultPage />} />
          <Route path="/Watchlist" element={<Watchlist />} />
        </Routes>
        </GlobalProvider>
      </div>
  );
}

export default App;
