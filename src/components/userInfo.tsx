import axios from "axios";
import { useEffect, useState } from "react";
import { FC } from "react";
import styled from "styled-components";

const UserInfoWrapper = styled.div`
   top: 100px;
   left: 300px;
   font-size: 20px;
`;

const UserInfo: FC<any> = (props: any) => {
   const [user, setUser] = useState<any>({});
   useEffect(() => {
      fetchUser(props.param);
   }, []);

   async function fetchUser(id: string) {
      try {
         const response = await axios.get(`https://dummyapi.io/data/v1/user/${id}`, {
            headers: {
               "app-id": "6285368e6c5fe3f61de44084",
            },
         });
         console.log("USER:", response.data);
         setUser(response.data);
      } catch (err: any) {
         console.log(err.response);
      }
   }
   return (
      <UserInfoWrapper>
         <div>
            <h1>{user.firstName}</h1>
            <h2>{user.lastName}</h2>
         </div>
      </UserInfoWrapper>
   );
};

export default UserInfo;
