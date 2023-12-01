import { Fragment } from "react";
import { Box, Divider } from "@mui/material";
import Links from "../header/ui/Links";
import { useSelector } from "react-redux";

const FooterComponent = () => {
  const isDarkTheme = useSelector((bigPie) => bigPie.darkThemeSlice.darkTheme);
  return (
    <Fragment>
      <Divider sx={{ mt: 1 }}></Divider>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
        }}
        bgcolor={isDarkTheme ? "!primary.main" : "primary.main"}
      >
        <Links />
      </Box>
    </Fragment>
  );
};

export default FooterComponent;
