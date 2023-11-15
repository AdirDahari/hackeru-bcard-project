import { useState } from "react";
import {
  Container,
  TextField,
  Grid,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import axios from "axios";
import editCardNormalization from "./editCardNormalization";
import { validateEditCard } from "../../validation/editCardValidation";
import {
  errorToast,
  successToast,
  warningToast,
} from "../../messages/myToasts";

const EditCardPage = () => {
  const [inputsValue, setInputValue] = useState({
    title: "",
    subtitle: "",
    phone: "",
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
  const { id: _id } = useParams();
  // console.log(_id);
  const handleInputChange = (e) => {
    setInputValue((currentState) => ({
      ...currentState,
      [e.target.id]: e.target.value,
    }));
  };
  const handleUpdateChangesClick = async () => {
    try {
      const errors = validateEditCard(inputsValue);
      if (errors) {
        warningToast(errors[1]);
        return;
      }
      let request = editCardNormalization(inputsValue);
      await axios.put("/cards/" + _id, request);
      navigate(ROUTES.HOME);
      successToast("Card Update successfully!");
    } catch (err) {
      errorToast("Something wrong...");
    }
  };

  const handleResetClick = () => {
    setInputValue({
      title: "",
      subtitle: "",
      phone: "",
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
  };

  return (
    <Container sx={{ padding: "50px" }}>
      <Typography variant="h2" sx={{ mb: 1, padding: "10px", pb: "0px" }}>
        Card - Edit
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
            label="SubTitle"
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
            label="Phone Number"
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
            value={inputsValue.mail}
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
            label="House Number"
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
            onClick={handleUpdateChangesClick}
          >
            Update Changes
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
export default EditCardPage;
