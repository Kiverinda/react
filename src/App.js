import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ProfileComponent from "./Profile";
import ChatsComponent from "./Chats";
import NotFoundComponent from "./NotFoundComponent"
import HomeComponent from "./Home";


const App = () => {

return (
  <Router>
          <Switch>
            <Route exact path="/chat/:chatId">
              <ChatsComponent />
            </Route>
            
            <Route exact path="/chats">
              <ChatsComponent />
            </Route>
      
            <Route exact path="/profile">
                <ProfileComponent />
            </Route>
      
            <Route exact path="/">
              <HomeComponent />
            </Route>
      
            <Route>
              <NotFoundComponent />
            </Route>
          
          </Switch>
    </Router>
  );
};

export default App;