import ROUTES from "../routes/ROUTES";

// const myLinks = [
//   { to: ROUTES.HOME, children: "Home" },
//   { to: ROUTES.REGISTER, children: "Register" },
//   { to: ROUTES.LOGIN, children: "Login" },
// ];

const mainLogoutLinks = [{ to: ROUTES.HOME, children: "Home" }, { to: ROUTES.ABOUT, children: "About" }];
const mainLoginLinks = [{ to: ROUTES.FAVOURITE, children: "Favourite" }];

const iconsLoginLinks = [
  { to: "/profile", children: "Profile" },
  { to: ROUTES.CREATECARD, children: "Create Card" },
];
const iconslogoutLinks = [
  { to: ROUTES.LOGIN, children: "Login" },
  { to: ROUTES.REGISTER, children: "Register" },
];

// export default myLinks;
export { mainLogoutLinks, mainLoginLinks, iconsLoginLinks, iconslogoutLinks };
