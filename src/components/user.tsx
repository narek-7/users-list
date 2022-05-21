import { FC } from "react";
import { IUser } from "../types/types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const UserWrapper = styled.div`
   overflow: clip;
   position: relative;
   padding: 6px 8px 6px 16px;
   height: 500px;
   text-decoration: none;
   font-size: 20px;
   display: block;
   border-bottom: 1px solid rgb(151, 156, 165);
   height: 100px;
   direction: ltr;
   background-color: white;
   background-image: url("/assets/images/coffee1.jpg");
   background-position: left top;
   background-repeat: no-repeat;
`;

const User: FC<IUser> = ({ id = "245445dw", firstName, lastName, picture }: IUser) => {
   return (
      <Link to={id}>
         <UserWrapper>
            <img
               src={picture}
               alt=""
               style={{ height: "70px", width: "70px", borderRadius: "50px" }}
            />
            {firstName + " " + lastName}
         </UserWrapper>
      </Link>
   );
};

export default User;
