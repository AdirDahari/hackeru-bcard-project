import { Box, List, Drawer } from "@mui/material";
import Links from "./Links";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const LeftDrawerComponent = ({ isOpen, onCloseDrawer }) => {
  const isDarkTheme = useSelector((bigPie) => bigPie.darkThemeSlice.darkTheme);
  const list = () => (
    <Box
      sx={{ width: { auto: 250 } }}
      role="presentation"
      onClick={onCloseDrawer}
      onKeyDown={onCloseDrawer}
      bgcolor={isDarkTheme ? "!primary.main" : "primary.main"}
    >
      <List>
        <Box
          sx={{
            flexGrow: 1,
            flexDirection: "column",
            height: "98vh",
          }}
        >
          <Links />
        </Box>
      </List>
    </Box>
  );
  return (
    <Drawer anchor="left" open={isOpen} onClose={onCloseDrawer}>
      {list()}
    </Drawer>
  );
};

LeftDrawerComponent.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCloseDrawer: PropTypes.func.isRequired,
};

export default LeftDrawerComponent;
