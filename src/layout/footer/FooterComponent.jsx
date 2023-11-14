import { Fragment, useState } from "react";

import { BottomNavigation, Divider } from "@mui/material";
import { useSelector } from "react-redux";
import Links from "../header/ui/Links";

const FooterComponent = () => {
  const [value, setValue] = useState(0);
  const loggedIn = useSelector((bigPie) => bigPie.authSlice.loggedIn);
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
        <Fragment
          sx={{
            flexGrow: 1,
            display: "flex",
          }}
        >
          <Links />
        </Fragment>
      </BottomNavigation>
    </Fragment>
  );
};

export default FooterComponent;
