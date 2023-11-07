import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const NavLinkComponent = ({ to, children, variant = "h6" }) => {
  return (
    <NavLink to={to} style={{ textDecoration: "none" }}>
      {({ isActive }) => (
        <Typography
          color={isActive ? "text.headerActive" : "text.headerColor"}
          sx={{ p: 2 }}
          variant={variant}
        >
          {children}
        </Typography>
      )}
    </NavLink>
  );
};
export default NavLinkComponent;
