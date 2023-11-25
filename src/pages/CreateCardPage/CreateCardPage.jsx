import { useState } from "react";
import { Container, Grid, Typography, Divider, Button } from "@mui/material";
import axios from "axios";
import createCardNormalization from "./createCardNormalization";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import { validateCreateCard } from "../../validation/createCardValidation";
import {
  errorToast,
  successToast,
  warningToast,
} from "../../messages/myToasts";
import GridCardInputsComponent from "../../components/GridCardInputsComponent";

const CreateCardPage = () => {
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

  const handleInputChange = (e) => {
    setInputValue((currentState) => ({
      ...currentState,
      [e.target.id]: e.target.value,
    }));
  };
  const handleCreateCardClick = async () => {
    try {
      const errors = validateCreateCard(inputsValue);
      if (errors) {
        warningToast(errors[1]);
        return;
      }
      let requestInputs = createCardNormalization(inputsValue);
      await axios.post("/cards", requestInputs);
      navigate(ROUTES.HOME);
      successToast("Card Created successfully!");
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
        Create Card
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
