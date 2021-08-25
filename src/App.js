import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Chat from "./Chat";

export default function App() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/chat">
                <Chat />
            </Route>
            <Route path="/profile">
                <Profile />
            </Route>
            <Route path="/">
                <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }