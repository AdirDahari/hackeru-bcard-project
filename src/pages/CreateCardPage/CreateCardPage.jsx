import { useState } from "react";
import {
  Container,
  TextField,
  Grid,
  Typography,
  Divider,
  Button,
} from "@mui/material";

import axios from "axios";
import createCardNormalization from "./createCardNormalization";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import { validateCreateCard } from "../../validation/createCardValidation";

const CreateCardPage = () => {
  const [inputsValue, setInputValue] = useState({
    title: "",
    subtitle: "",
    phone: "",
    add: "",
    email: "",
    description: "",
    web: "",
    url: "",
    alt: "",
    state: "",
    country: "",
    city: "",
    street: "",
    houseNumber: "",
    zip: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputValue((currentState) => ({
      ...currentState,
      [e.target.id]: e.target.value,
    }));
  };
  const handleCreateCardClick = async () => {
    try {
      const errors = validateCreateCard(inputsValue);
      console.log(errors);
      if (errors) return;
      let requestInputs = createCardNormalization(inputsValue);
      const { data } = await axios.post("/cards", requestInputs);
      console.log("data from response", data);
      navigate(ROUTES.HOME);
    } catch (err) {
      console.log("err", err.response);
    }
  };

  const handleResetClick = () => {
    setInputValue({
      title: "",
      subtitle: "",
      phone: "",
      add: "",
      mail: "",
      description: "",
      web: "",
      url: "",
      alt: "",
      state: "",
      country: "",
      city: "",
      street: "",
      houseNumber: "",
      zip: "",
    });
  };

  return (
    <Container sx={{ padding: "50px" }}>
      <Typography variant="h2" sx={{ mb: 1, padding: "10px", pb: "0px" }}>
        Create Card
      </Typography>
      <Typography variant="body1" sx={{ mb: 1, padding: "3px", ml: "7px" }}>
        Put a new values in the correct input
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="title"
            label="Title"
            variant="outlined"
            fullWidth
            onChange={handleInputChange}
            value={inputsValue.title}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="subtitle"
            label="Subtitle"
            variant="outlined"
            fullWidth
            onChange={handleInputChange}
            value={inputsValue.subtitle}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="phone"
            label="Phone number"
            variant="outlined"
            fullWidth
            onChange={handleInputChange}
            value={inputsValue.phone}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="description"
            label="Description"
            variant="outlined"
            fullWidth
            onChange={handleInputChange}
            value={inputsValue.description}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="web"
            label="Web"
            variant="outlined"
            fullWidth
            onChange={handleInputChange}
            value={inputsValue.web}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            fullWidth
            onChange={handleInputChange}
            value={inputsValue.email}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="url"
            label="Url"
            variant="outlined"
            fullWidth
            onChange={handleInputChange}
            value={inputsValue.url}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="alt"
            label="Alt"
            variant="outlined"
            fullWidth
            onChange={handleInputChange}
            value={inputsValue.alt}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            label="State"
            variant="outlined"
            fullWidth
            onChange={handleInputChange}
            value={inputsValue.state}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="country"
            label="Country"
            variant="outlined"
            fullWidth
            onChange={handleInputChange}
            value={inputsValue.country}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="city"
            label="City"
            variant="outlined"
            fullWidth
            onChange={handleInputChange}
            value={inputsValue.city}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="street"
            label="Street"
            variant="outlined"
            fullWidth
            onChange={handleInputChange}
            value={inputsValue.street}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="houseNumber"
            label="House number"
            variant="outlined"
            fullWidth
            onChange={handleInputChange}
            value={inputsValue.houseNumber}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="zip"
            label="Zip"
            variant="outlined"
            fullWidth
            onChange={handleInputChange}
            value={inputsValue.zip}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item lg={8} md={8} sm={8} xs>
          <Button
            variant="outlined"
            sx={{ mt: 2, width: "100%", ml: "0%", bgcolor: "lightskyblue" }}
            onClick={handleCreateCardClick}
          >
            Create New Card
          </Button>
        </Grid>
        <Grid item xs>
          <Button
            onClick={handleResetClick}
            variant="outlined"
            sx={{
              mt: 2,
              width: "100%",
              ml: "0%",
              bgcolor: "navy",
              color: "gray",
            }}
          >
            Reset
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
export default CreateCardPage;
