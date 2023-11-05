import { Box } from "@mui/material";
import NavLinkComponent from "../../../Components/NavLinkComponemt";
import myLinks from "../../myLinks";
import nextKey from "generate-my-key";

const Links = () => {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      {myLinks.map((link) => (
        <NavLinkComponent key={nextKey()} to={link.to}>
          {link.children}
        </NavLinkComponent>
      ))}
    </Box>
  );
};
export default Links;
