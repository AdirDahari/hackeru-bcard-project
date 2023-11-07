import { Box, Typography } from "@mui/material";
import nextKey from "generate-my-key";
import myLinks, {
  alwaysLinks,
  loggedInLinks,
  loggedOutLinks,
} from "../../myLinks";
import NavLinkComponent from "../NavLinkComponent";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Links = () => {
  const loggedIn = useSelector((bigPie) => bigPie.authSlice.loggedIn);
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      {alwaysLinks.map((myItem) => (
        <NavLink
          key={myItem.children}
          to={myItem.to}
          style={{ textDecoration: "none" }}
        >
          {({ isActive }) => (
            <Typography
              color={isActive ? "text.headerActive" : "text.headerColor"}
              sx={{ p: 2 }}
              variant={"h6"}
            >
              {myItem.children}
            </Typography>
          )}
        </NavLink>
      ))}
      {/* {loggedIn &&
        loggedInLinks.map((myItem) => (
          <NavLinkComponent to={myItem.to} key={nextKey()}>
            {myItem.children}
          </NavLinkComponent>
        ))}
      {!loggedIn &&
        loggedOutLinks.map((myItem) => (
          <NavLinkComponent to={myItem.to} key={nextKey()}>
            {myItem.children}
          </NavLinkComponent>
        ))} */}
    </Box>
  );
};

export default Links;
