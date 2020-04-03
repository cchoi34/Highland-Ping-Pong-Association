import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';


function Navbar() {
  return (
        <div className="navbar">
            <Link to="/players">
                Players
            </Link>
            <Link to="/sponsors">
                Sponsors
            </Link>
            <Link to="/schedule">
                Schedule
            </Link>
            <Link to="/standings">
                Standings
            </Link>
            <Link to="/login">
                Login
            </Link>
        </div>
  );
}

export default Navbar;