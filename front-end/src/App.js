import Navbar from "./navbar/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Watchlist from "./pages/Watchlist"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="/Watchlist" element={<Watchlist />} />
        </Routes>
      </div>
    </>
  )
}

export default App