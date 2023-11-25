import { Box, List, Drawer } from "@mui/material";
import Links from "./Links";
import PropTypes from "prop-types";

const LeftDrawerComponent = ({ isOpen, onCloseDrawer }) => {
  const list = () => (
    <Box
      sx={{ width: { auto: 250 } }}
      role="presentation"
      onClick={onCloseDrawer}
      onKeyDown={onCloseDrawer}
    >
      <List>
        <Box
          sx={{
            flexGrow: 1,
            flexDirection: "column",
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
