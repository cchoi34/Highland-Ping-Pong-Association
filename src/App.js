import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Navbar from "./components/Navbar.js";
import SingleSponsor from "./components/SingleSponsor.js";
import AllPlayers from "./components/AllPlayers.js";
import AllSponsors from "./components/AllSponsors";
import Login from "./components/Login.js";
import Schedule from "./components/Schedule.js";
import SinglePlayer from "./components/SinglePlayer.js";
import Standings from "./components/Standings.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
              <Route path="/players">
                  <AllPlayers />
              </Route>
              <Route path="/sponsors">
                  <AllSponsors />
              </Route>
              <Route path="/schedule">
                  <Schedule />
              </Route>
              <Route path="/standings">
                  <Standings />
              </Route>
              <Route path="/login">
                  <Login />
              </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
