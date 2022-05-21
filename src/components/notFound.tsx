import { FC } from "react";
import { UserInfoWrapper, TitleWrapper } from "./userInfo";

const NotFound: FC = () => {
   return (
      <UserInfoWrapper>
         <TitleWrapper>404</TitleWrapper>
         <p>This page does not exist. Should be here? Notify us about this error.</p>
      </UserInfoWrapper>
   );
};

export default NotFound;
