import { useEffect, useState } from "react";
import { FC } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchUser } from "../api/api";

export const UserInfoWrapper = styled.div`
   border: 1px solid black;
   padding: 1rem;
   position: fixed;
   top: 50px;
   left: 350px;
   font-size: 22px;
   font-style: italic;
   font-family: Yu Gothic UI Light, Calibri Light, sans-serif;
`;

export const TitleWrapper = styled.div`
   text-align: center;
   font-size: 52px;
   margin-bottom: 30px;
   color: #0066ff;
`;

const UserInfo: FC<any> = () => {
   const [user, setUser] = useState<any>({});
   const params = useParams();
   
   useEffect(() => {
      fetchUser(params.id)
         .then((response) => setUser(response))
         .catch((error) => console.log(error));
   }, [params.id]);

   if (user.picture) {
      return (
         <UserInfoWrapper>
            <TitleWrapper>
               <div>{`${user.firstName} ${user.lastName}`}</div>
            </TitleWrapper>
            <img src={user.picture} alt="" />
            <div>{`Email:  ${user.email}`}</div>
            <div>{`Sex:  ${user.gender}`}</div>
            <div>{`Birthdate:  ${new Date(user.dateOfBirth).toLocaleDateString()}`}</div>
            <div>{`Phone:  ${user.phone}`}</div>
         </UserInfoWrapper>
      );
   }
   return <UserInfoWrapper>{"Loading..."}</UserInfoWrapper>;
};

export default UserInfo;
