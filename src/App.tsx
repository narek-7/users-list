import { FC } from "react";
import UsersList from "./components/usersList";
import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./components/notFound";
import UserInfo from "./components/userInfo";

const App: FC = () => {
   return (
      <Routes>
         <Route path="user" element={<UsersList />}>
            <Route path=":id" element={<UserInfo />} />
         </Route>
         <Route path="/" element={<Navigate to="/user" replace />} />
         <Route path="*" element={<NotFound />} />
      </Routes>
   );
};

export default App;
