import { Fragment, useState } from "react";

import { BottomNavigation, Divider } from "@mui/material";
import NavLinkComponent from "../header/NavLinkComponent";
import nextKey from "generate-my-key";
import { alwaysLinks, loggedInLinks, loggedOutLinks } from "../myLinks";
import { useSelector } from "react-redux";

const FooterComponent = () => {
  const [value, setValue] = useState(0);
  const loggedIn = useSelector((bigPie) => bigPie.authSlice.loggedIn);
  return (
    <Fragment>
      <Divider></Divider>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {alwaysLinks.map((mylink) => (
          <NavLinkComponent to={mylink.to} key={nextKey()}>
            {mylink.children}
          </NavLinkComponent>
        ))}
        {loggedIn &&
          loggedInLinks.map((mylink) => (
            <NavLinkComponent to={mylink.to} key={nextKey()}>
              {mylink.children}
            </NavLinkComponent>
          ))}
        {!loggedIn &&
          loggedOutLinks.map((mylink) => (
            <NavLinkComponent to={mylink.to} key={nextKey()}>
              {mylink.children}
            </NavLinkComponent>
          ))}
      </BottomNavigation>
    </Fragment>
  );
};

export default FooterComponent;
