import React from "react";
import UsersList from "./components/usersList";
import User from "./components/user";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFound from "./components/notFound";

const App = () => {
   return (
      <Switch>
         <Route path="/users" exact component={UsersList} />
         <Route path="/users/:userId?" component={User} />
         <Route path="/404" component={NotFound} />
         <Redirect from="/" to="/users" />
         <Route path="/" exact component={UsersList} />
         <Redirect to="/404" />
      </Switch>
   );
};

export default App;
