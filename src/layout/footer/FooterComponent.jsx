import { Fragment, useState } from "react";

import { BottomNavigation, Box, Divider } from "@mui/material";
import { useSelector } from "react-redux";
import Links from "../header/ui/Links";

const FooterComponent = () => {
  const [value, setValue] = useState(0);
  return (
    <Fragment>
      <Divider></Divider>
      <BottomNavigation
        sx={{}}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Links />
        </Box>
      </BottomNavigation>
    </Fragment>
  );
};

export default FooterComponent;
