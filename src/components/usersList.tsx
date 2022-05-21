import { useState, useEffect, FC, useCallback } from "react";
import axios from "axios";
import User from "./user";
import { IUser } from "../types/types";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Virtuoso } from "react-virtuoso";

interface IUsersList {
   users?: IUser[];
}

const UsersWrapper = styled.div`
   height: 800px;
   width: 300px;
`;

const UsersList: FC<IUsersList> = () => {
   const [users, setUsers] = useState<any>([]);
   let [currentPage, setCurrentPage] = useState(1);

   async function fetchUsers(pageNumber: any = 1) {
      const response = await axios.get(
         `https://dummyapi.io/data/v1/user?page=${pageNumber}&limit=10`,
         {
            headers: {
               "app-id": "6285368e6c5fe3f61de44084",
            },
         }
      );

      return response.data;
   }

   const loadMore = useCallback(() => {
      setCurrentPage((currentPage += 1));
      fetchUsers(currentPage).then((response) => setUsers([...users, ...response.data]));
   }, [users]);

   const Footer = () => <div>Loading...</div>;
   console.log("users count", users.length);

   useEffect(() => {
      fetchUsers().then((response) => setUsers(response.data));
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
