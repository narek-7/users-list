import { useState, useEffect, FC } from "react";
import axios from "axios";
import User from "./user";
import { IUser } from "../types/types";
import { useParams } from "react-router-dom";
import styled from "styled-components";

interface IUsersList {
   users: IUser[];
}

const UsersWrapper = styled.div`
   height: 100%;
   width: 350px;
   position: fixed;
   top: 0px;
   left: -30px;
   overflow: scroll;
`;

const UsersList: FC<IUsersList> = () => {
   const params = useParams();

   const users_url = "https://dummyapi.io/data/v1/user/";
   const [users, setUsers] = useState<IUser[]>([]);

   useEffect(() => {
      fetchUsers();
   }, []);

   async function fetchUsers() {
      try {
         const response = await axios.get(users_url, {
            headers: {
               "app-id": "6285368e6c5fe3f61de44084",
            },
         });
         setUsers((prevState) => response.data.data);
      } catch (err: any) {
         console.log(err.response);
      }
   }

   const handleClick = (id: string) => {
      console.log(id);
   };

   const userInfo = () => {
      if (8) {
         return <div></div>;
      }
   };

   if (users) {
      return (
         <UsersWrapper>
            <ul>
               {users.map((user: IUser) => (
                  <li key={user.id}>
                     <User
                        id={user.id}
                        firstName={user.firstName}
                        lastName={user.lastName}
                        picture={user.picture}
                        // onClick={handleClick}
                     />
                  </li>
               ))}
            </ul>
            <div>{userInfo()}</div>
         </UsersWrapper>
      );
   }
   return null;
};

export default UsersList;
