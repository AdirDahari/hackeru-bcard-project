import { Typography } from "@mui/material";
import nextKey from "generate-my-key";
import { mainLogoutLinks, mainLoginLinks, isAdminLinks } from "../../myLinks";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Fragment } from "react";

const Links = () => {
  const loggedIn = useSelector((bigPie) => bigPie.authSlice.loggedIn);
  const userData = useSelector((bigPie) => bigPie.authSlice.userData);
  return (
    <Fragment>
      {mainLogoutLinks.map((myLink) => (
        <NavLink
          key={nextKey()}
          to={myLink.to}
          style={{ textDecoration: "none" }}
        >
          {({ isActive }) => (
            <Typography
              color={isActive ? "text.headerActive" : "text.headerColor"}
              sx={{ p: 2 }}
              variant={"h6"}
            >
              {myLink.children}
            </Typography>
          )}
        </NavLink>
      ))}
      {loggedIn &&
        mainLoginLinks.map((myLink) => (
          <NavLink
            key={nextKey()}
            to={myLink.to}
            style={{ textDecoration: "none" }}
          >
            {({ isActive }) => (
              <Typography
                color={isActive ? "text.headerActive" : "text.headerColor"}
                sx={{ p: 2 }}
                variant={"h6"}
              >
                {myLink.children}
              </Typography>
            )}
          </NavLink>
        ))}
      {loggedIn &&
        userData.isAdmin &&
        isAdminLinks.map((myLink) => (
          <NavLink
            key={nextKey()}
            to={myLink.to}
            style={{ textDecoration: "none" }}
          >
            {({ isActive }) => (
              <Typography
                color={isActive ? "text.headerActive" : "text.headerColor"}
                sx={{ p: 2 }}
                variant={"h6"}
              >
                {myLink.children}
              </Typography>
            )}
          </NavLink>
        ))}
    </Fragment>
  );
};

export default Links;
