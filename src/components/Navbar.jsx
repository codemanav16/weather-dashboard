import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-between p-4 bg-white shadow-md">
      <h1 className="font-bold text-xl">Weather Dashboard</h1>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/history">History</Link>
      </div>
    </div>
  );
}