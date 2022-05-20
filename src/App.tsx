import { FC } from "react";
import UsersList from "./components/usersList";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/notFound";
import UserInfo from "./components/userInfo";

const App: FC = () => {
   return (
      <Routes>
         <Route path="user" element={<UsersList />}>
            <Route path=":id" element={<UserInfo />} />
         </Route>
         <Route path="404" element={<NotFound />} />
      </Routes>
   );
};

export default App;
