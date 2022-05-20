import { FC } from "react";
import UsersList from "./components/usersList";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFound from "./components/notFound";

const App: FC = () => {
   return (
      <Switch>
         <Route path="/" exact component={UsersList} />
         <Route path="/:userId?" component={UsersList} />
         <Route path="/404" exact component={NotFound} />
         <Redirect to="/404" />
      </Switch>
   );
};

export default App;
