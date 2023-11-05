import Main from "./Main/Main";
import Header from "./Header/Header";
import Links from "./Header/ui/Links";

const Layout = ({ children }) => {
  return (
    <Header>
      <Header />
      <Main>{children}</Main>
    </Header>
  );
};
export default Layout;
