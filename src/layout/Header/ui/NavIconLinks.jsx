import { AccountCircle } from "@mui/icons-material";
import { MenuItem, Typography } from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LogoutIcon from "@mui/icons-material/Logout";
import { iconsLoginLinks, iconslogoutLinks } from "../../myLinks";
import { useSelector } from "react-redux";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const NavIconLinks = ({ isMoblie }) => {
  const loggedIn = useSelector((bigPie) => bigPie.authSlice.loggedIn);
  const navigate = useNavigate();

  const handleMenuItemClick = (e) => {
    try {
      if (e.target.parentElement.attributes[3].value) {
        navigate(e.target.parentElement.attributes[3].value);
      }
    } catch (err) {
      return;
    }
  };

  const handleLogOut = () => {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
    } else if (sessionStorage.getItem("token")) {
      sessionStorage.removeItem("token");
    } else return;
    window.location.reload(false);
  };

  if (isMoblie)
    return (
      <Fragment>
        {loggedIn &&
          iconsLoginLinks.map((myLink, index) => (
            <MenuItem to={myLink.to} key={index} onClick={handleMenuItemClick}>
              {index === 0 ? <AccountCircle /> : <CreditCardIcon />}
              <Typography>&nbsp; {myLink.children}</Typography>
            </MenuItem>
          ))}
        {loggedIn && (
          <MenuItem onClick={handleLogOut}>
            <LogoutIcon />
            <Typography>&nbsp; Logout</Typography>
          </MenuItem>
        )}
        {!loggedIn &&
          iconslogoutLinks.map((myLink, index) => (
            <MenuItem to={myLink.to} key={index} onClick={handleMenuItemClick}>
              {index === 0 ? <LoginIcon /> : <AppRegistrationIcon />}
              <Typography>&nbsp; {myLink.children}</Typography>
            </MenuItem>
          ))}
      </Fragment>
    );
  else
    return (
      <Fragment>
        {loggedIn &&
          iconsLoginLinks.map((myLink, index) => (
            <MenuItem
              onClick={handleMenuItemClick}
              key={index}
              to={myLink.to}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              {index === 0 ? <AccountCircle /> : <CreditCardIcon />}
              <Typography>&nbsp; {myLink.children}</Typography>
            </MenuItem>
          ))}
        {loggedIn && (
          <MenuItem
            onClick={handleLogOut}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <LogoutIcon />
            <Typography>&nbsp; Logout</Typography>
          </MenuItem>
        )}
        {!loggedIn &&
          iconslogoutLinks.map((myLink, index) => (
            <MenuItem
              onClick={handleMenuItemClick}
              key={index}
              to={myLink.to}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              {index === 0 ? <LoginIcon /> : <AppRegistrationIcon />}
              <Typography>&nbsp; {myLink.children}</Typography>
            </MenuItem>
          ))}
      </Fragment>
    );
};

NavIconLinks.propTypes = {
  isMoblie: PropTypes.bool.isRequired,
};

export default NavIconLinks;
