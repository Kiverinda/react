import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomeComponent from "./Home";

const App = () => {

return (
  <Router>
    <Switch>
      
            <Route path="/">
                    <HomeComponent />
            </Route>
          
      </Switch>
    </Router>
  );
};

export default App;