import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import History from "./pages/History";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="p-4 bg-white shadow flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/history">History</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}