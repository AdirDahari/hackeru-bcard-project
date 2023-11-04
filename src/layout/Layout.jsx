import { Fragment } from "react";
import NavigationBar from "./Header/NavigationBar";
import Main from "./Main/Main";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <NavigationBar />
      <Main>{children}</Main>
    </Fragment>
  );
};
export default Layout;
