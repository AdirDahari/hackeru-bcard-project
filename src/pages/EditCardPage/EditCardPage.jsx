import { useState } from "react";
import { Container, Grid, Typography, Divider, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import axios from "axios";
import editCardNormalization from "./editCardNormalization";
import { validateEditCard } from "../../validation/editCardValidation";
import {
  errorToast,
  successToast,
  warningToast,
} from "../../messages/myToasts";
import GridCardInputsComponent from "../../components/GridCardInputsComponent";

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
      <GridCardInputsComponent
        inputsValue={inputsValue}
        onInputChange={handleInputChange}
      />
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
