import { useState, useEffect, FC, useCallback, useRef } from "react";
import User from "./user";
import { IUser } from "../types/types";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Virtuoso } from "react-virtuoso";
import { fetchUsers } from "../api/api";

interface IUsersList {
   users?: IUser[];
}

const UsersWrapper = styled.div`
   height: 800px;
   width: 300px;
`;

const UsersList: FC<IUsersList> = () => {
   const [users, setUsers] = useState<IUser[]>([]);
   const currentPage = useRef<number>(1);

   const loadMore = useCallback(() => {
      currentPage.current++;
      fetchUsers(currentPage.current).then((response) =>
         setUsers([...users, ...response.data])
      );
   }, [users]);

   const Footer = () => <div>{"Loading..."}</div>;

   useEffect(() => {
      fetchUsers()
         .then((response) => setUsers(response.data))
         .catch((error) => console.log(error));
   }, []);

   return (
      <>
         <UsersWrapper>
            <Virtuoso
               style={{ height: 800 }}
               data={users}
               endReached={loadMore}
               overscan={200}
               itemContent={(index, user) => {
                  return (
                     <div>
                        <User
                           id={user.id}
                           firstName={user.firstName}
                           lastName={user.lastName}
                           picture={user.picture}
                        />
                     </div>
                  );
               }}
               components={{ Footer }}
            />
         </UsersWrapper>
         <Outlet />
      </>
   );
};

export default UsersList;
