import ROUTES from "../routes/ROUTES";

const myLinks = [
  { to: ROUTES.HOME, children: "Home" },
  { to: ROUTES.REGISTER, children: "Register" },
  { to: ROUTES.LOGIN, children: "Login" },
];

const alwaysLinks = [{ to: ROUTES.HOME, children: "Home" }];
const loggedInLinks = [
  { to: "/profile", children: "Profile" },
  { to: ROUTES.CREATECARD, children: "Create Card" },
];
const loggedOutLinks = [
  { to: ROUTES.REGISTER, children: "Register" },
  { to: ROUTES.LOGIN, children: "Login" },
];

export default myLinks;
export { alwaysLinks, loggedInLinks, loggedOutLinks };
