import { Box, List, Drawer } from "@mui/material";
import { alwaysLinks, loggedInLinks, loggedOutLinks } from "../../myLinks";
import NavLinkComponent from "../NavLinkComponent";
import { useSelector } from "react-redux";

const LeftDrawerComponent = ({ isOpen, onCloseDrawer }) => {
  const loggedIn = useSelector((bigPie) => bigPie.authSlice.loggedIn);

  const list = () => (
    <Box
      sx={{ width: { auto: 250 } }}
      role="presentation"
      onClick={onCloseDrawer}
      onKeyDown={onCloseDrawer}
    >
      <List>
        {alwaysLinks.map((myLink) => (
          <NavLinkComponent key={myLink.children} to={myLink.to}>
            {myLink.children}
          </NavLinkComponent>
        ))}
        {loggedIn &&
          loggedInLinks.map((myLink) => (
            <NavLinkComponent key={myLink.children} to={myLink.to}>
              {myLink.children}
            </NavLinkComponent>
          ))}
        {!loggedIn &&
          loggedOutLinks.map((myLink) => (
            <NavLinkComponent key={myLink.children} to={myLink.to}>
              {myLink.children}
            </NavLinkComponent>
          ))}
      </List>
    </Box>
  );
  return (
    <Drawer anchor="left" open={isOpen} onClose={onCloseDrawer}>
      {list()}
    </Drawer>
  );
};

export default LeftDrawerComponent;
