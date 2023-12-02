import { Box, Container, Divider, Tab, Tabs, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";

const SandboxPage = () => {
  const [value, setValue] = useState("one");
  const navigate = useNavigate();
  useEffect(() => {
    if (value === "one") {
      navigate(ROUTES.SANDBOX + "/users");
    } else {
      navigate(ROUTES.SANDBOX + "/cards");
    }
  }, [value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container sx={{ minHeight: "90vh" }}>
      <Typography variant="h1">Sandbox</Typography>
      <Typography sx={{ my: 1 }} variant="h4">
        Manage bcards users and cards
      </Typography>
      <Divider />
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab value="one" label="Users" />
          <Tab value="two" label="Cards" />
        </Tabs>
      </Box>
      <Outlet />
    </Container>
  );
};
export default SandboxPage;
