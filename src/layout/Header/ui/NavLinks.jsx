import { AccountCircle } from "@mui/icons-material";
import { IconButton, MenuItem, Typography } from "@mui/material";
import { loggedInLinks, loggedOutLinks } from "../../myLinks";

const menuId = "primary-search-account-menu";

const NavLinks = ({ isMoblie }) => {
  if (isMoblie)
    return (
      <MenuItem>
        <IconButton size="large" edge="end" color="inherit">
          <AccountCircle />
        </IconButton>
        <Typography>&nbsp; Profile</Typography>
      </MenuItem>
    );
  else
    return (
      <MenuItem sx={{ display: { xs: "none", md: "flex" } }}>
        <IconButton size="large" edge="end" color="inherit">
          <AccountCircle />
        </IconButton>
        <Typography>&nbsp; Profile</Typography>
      </MenuItem>
    );
};
export default NavLinks;
