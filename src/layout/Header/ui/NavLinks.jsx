import { AccountCircle } from "@mui/icons-material";
import { IconButton, MenuItem, Typography } from "@mui/material";
import { loggedInLinks, loggedOutLinks } from "../../myLinks";
import { useSelector } from "react-redux";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";

const NavLinks = ({ isMoblie }) => {
  const loggedIn = useSelector((bigPie) => bigPie.authSlice.loggedIn);
  if (isMoblie)
    return (
      <Fragment>
        {loggedIn &&
          loggedInLinks.map((myLink, index) => (
            <MenuItem to={myLink.to} key={index}>
              <IconButton size="large" edge="end" color="inherit">
                {index === 0 ? <AccountCircle /> : <AccountCircle />}
              </IconButton>
              <Typography>&nbsp; {myLink.children}</Typography>
            </MenuItem>
          ))}
      </Fragment>
    );
  else
    return (
      <Fragment>
        {!loggedIn &&
          loggedOutLinks.map((myLink, index) => (
            <MenuItem
              key={index}
              to={myLink.to}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <IconButton size="large" edge="end" color="inherit">
                {index === 0 ? <AccountCircle /> : <AccountCircle />}
              </IconButton>
              <Typography>&nbsp; {myLink.children}</Typography>
            </MenuItem>
          ))}
      </Fragment>
    );
};
export default NavLinks;
