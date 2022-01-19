import "./Dashboard.css";

import { Link } from "react-router-dom";
import Navibar from "./components/Navbar";

function Dashboard() {
  return (
    <div className="dashboard">
      <Navibar />
      <div className="card">
        <button
          type="button"
          className="btn btn-danger">
          <Link to="/journal">
            Journal
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
