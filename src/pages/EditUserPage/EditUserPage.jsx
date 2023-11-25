import { Fragment, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import axios from "axios";
import ROUTES from "../../routes/ROUTES";
import { errorToast, infoToast, warningToast } from "../../messages/myToasts";
import { useNavigate, useParams } from "react-router-dom";
import { Divider } from "@mui/material";
import { validateEditUser } from "../../validation/editUserValidation";
import { normalizeEditUser } from "./normalizeEditUser";

const EditUserPage = () => {
  const [inputsValue, setInputsValue] = useState({
    first: "",
    middle: "",
    last: "",
    phone: "",
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

  const handleInputsChange = (e) => {
    setInputsValue((currentState) => ({
      ...currentState,
      [e.target.id]: e.target.value,
    }));
  };
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setInputsValue((currentState) => ({
        ...currentState,
        zip: +currentState.zip,
      }));
      console.log(inputsValue);
      const errors = validateEditUser(inputsValue);
      if (errors) {
        warningToast(errors[1]);
        return;
      }
      let request = normalizeEditUser(inputsValue);
      await axios.post("/users/" + _id, request);
      infoToast("User Update");
      navigate(ROUTES.SANDBOX);
    } catch (err) {
      errorToast("Something worng...");
    }
  };

  return (
    <Fragment>
      <Typography variant="h3">Update User Page</Typography>
      <Divider sx={{ m: 2 }} />
      <Box
        sx={{
          marginTop: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <TextField
                autoComplete="given-name"
                name="first"
                required
                fullWidth
                id="first"
                label="First Name"
                autoFocus
                value={inputsValue.first}
                onChange={handleInputsChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                autoComplete="given-name"
                name="middle"
                fullWidth
                id="middle"
                label="Middle Name"
                autoFocus
                value={inputsValue.middle}
                onChange={handleInputsChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                fullWidth
                id="last"
                label="Last Name"
                name="last"
                autoComplete="family-name"
                value={inputsValue.last}
                onChange={handleInputsChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                name="phone"
                label="Phone"
                id="phone"
                autoComplete="new-phone"
                value={inputsValue.phone}
                onChange={handleInputsChange}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="state"
                label="State"
                id="state"
                autoComplete="new-state"
                value={inputsValue.state}
                onChange={handleInputsChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                name="country"
                label="Country"
                id="country"
                autoComplete="new-country"
                value={inputsValue.country}
                onChange={handleInputsChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                name="city"
                label="City"
                id="city"
                autoComplete="new-city"
                value={inputsValue.city}
                onChange={handleInputsChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                name="street"
                label="Street"
                id="street"
                autoComplete="new-street"
                value={inputsValue.street}
                onChange={handleInputsChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                name="houseNumber"
                label="House Number"
                id="houseNumber"
                autoComplete="new-houseNumber"
                value={inputsValue.houseNumber}
                onChange={handleInputsChange}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                name="url"
                label="Url"
                id="url"
                autoComplete="new-url"
                value={inputsValue.url}
                onChange={handleInputsChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                name="alt"
                label="Alt"
                id="alt"
                autoComplete="new-alt"
                value={inputsValue.alt}
                onChange={handleInputsChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                name="zip"
                label="Zip"
                id="zip"
                autoComplete="new-zip"
                value={inputsValue.zip}
                onChange={handleInputsChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Update User
          </Button>
        </Box>
      </Box>
    </Fragment>
  );
};

export default EditUserPage;
