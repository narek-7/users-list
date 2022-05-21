import axios from "axios";
import { useEffect, useState } from "react";
import { FC } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const UserInfoWrapper = styled.div`
   position: relative;
   top: 100px;
   left: 300px;
   font-size: 20px;
   margin-bottom: 100px;
`;

const UserInfo: FC<any> = () => {
   const [user, setUser] = useState<any>({});
   const params = useParams();

   useEffect(() => {
      fetchUser(params.id);
   }, [params.id]);

   async function fetchUser(id: any) {
      try {
         const response = await axios.get(`https://dummyapi.io/data/v1/user/${id}`, {
            headers: {
               "app-id": "6285368e6c5fe3f61de44084",
            },
         });

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
