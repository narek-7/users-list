import { FC } from "react";
import { IUser } from "../types/types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const UserWrapper = styled.div`
   overflow: clip;
   position: relative;
   padding: 6px 8px 6px 6px;
   height: 500px;
   font-size: 16px;
   display: block;
   border-bottom: 1px solid rgb(151, 156, 165);
   height: 90px;
   background-color: white;
`;

const User: FC<IUser> = ({ id = "", firstName, lastName, picture }: IUser) => {
   return (
      <Link to={id}>
         <UserWrapper>
            <img
               src={picture}
               alt=""
               style={{ height: "70px", width: "70px", borderRadius: "50px" }}
            />
            {`${firstName} ${lastName}`}
         </UserWrapper>
      </Link>
   );
};

export default User;
