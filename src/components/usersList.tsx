import { useState, useEffect, FC } from "react";
import axios from "axios";
import User from "./user";
import { IUser } from "../types/types";
import { useParams, Outlet } from "react-router-dom";
import styled from "styled-components";
import UserInfo from "./userInfo";

interface IUsersList {
   users?: IUser[];
}

interface IParams {
   id?: string;
}

const UsersWrapper = styled.div`
   height: 100%;
   width: 350px;
   position: fixed;
   top: 100px;
   left: -30px;
   overflow: scroll;
`;

const UsersList: FC<IUsersList> = () => {
   const params: IParams = useParams();
   const users_url = "https://dummyapi.io/data/v1/user/";
   const [users, setUsers] = useState<IUser[]>([]);
   const [paramId, setParam] = useState<string>("");

   useEffect(() => {
      fetchUsers();
   }, []);

   useEffect(() => {
      handleParam();
   }, [paramId]);

   const handleParam = () => {
      setParam(params.id || "");
   };

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

   return (
      <>
         <UsersWrapper>
            <ul>
               {users.map((user: IUser) => (
                  <li key={user.id}>
                     <User
                        id={user.id}
                        firstName={user.firstName}
                        lastName={user.lastName}
                        picture={user.picture}
                     />
                  </li>
               ))}
            </ul>
         </UsersWrapper>
         <Outlet />
      </>
   );
};

export default UsersList;
