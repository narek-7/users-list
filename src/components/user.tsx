import { FC } from "react";
import { IUser } from "../types/types";
import styled from "styled-components";

const UserWrapper = styled.div`
   overflow: clip;
   position: relative;
   padding: 6px 8px 6px 16px;
   height: 500px;
   text-decoration: none;
   font-size: 20px;
   color: rgba(106, 106, 106, 0.905);
   display: block;
   border-bottom: 1px solid rgb(151, 156, 165);
   height: 100px;
   direction: ltr;
   background-color: white;
   background-image: url("/assets/images/coffee1.jpg");
   background-position: left top;
   background-repeat: no-repeat;
`;

const User: FC<IUser> = ({ id, firstName, lastName, picture }: IUser) => {
   return (
      <UserWrapper>
         <img
            src={picture}
            alt=""
            style={{ height: "70px", width: "70px", borderRadius: "50px" }}
         />
         <a href="">{firstName + " " + lastName}</a>
      </UserWrapper>
   );
};

export default User;
