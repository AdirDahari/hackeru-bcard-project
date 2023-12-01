import { Fragment } from "react";
import { Box, Divider } from "@mui/material";
import Links from "../header/ui/Links";

const FooterComponent = () => {
  return (
    <Fragment>
      <Divider></Divider>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Links />
      </Box>
    </Fragment>
  );
};

export default FooterComponent;
