import { Fragment, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import axios from "axios";
import ROUTES from "../../routes/ROUTES";
import { errorToast, infoToast, warningToast } from "../../messages/myToasts";
import { useNavigate, useParams } from "react-router-dom";
import { Divider } from "@mui/material";
import { validateEditUser } from "../../validation/editUserValidation";
import { normalizeEditUser } from "./normalizeEditUser";
import EditUserInputsComponent from "./EditUserInputsComponent";

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
        <EditUserInputsComponent
          inputsValue={inputsValue}
          onInputsChange={handleInputsChange}
        />
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
