import { TextField, Grid } from "@mui/material";
import PropTypes from "prop-types";

const GridCardInputsComponent = ({ inputsValue, onInputChange }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          id="title"
          label="Title"
          variant="outlined"
          fullWidth
          onChange={onInputChange}
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
          onChange={onInputChange}
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
          onChange={onInputChange}
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
          onChange={onInputChange}
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
          onChange={onInputChange}
          value={inputsValue.web}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          fullWidth
          onChange={onInputChange}
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
          onChange={onInputChange}
          value={inputsValue.url}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="alt"
          label="Alt"
          variant="outlined"
          fullWidth
          onChange={onInputChange}
          value={inputsValue.alt}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="state"
          label="State"
          variant="outlined"
          fullWidth
          onChange={onInputChange}
          value={inputsValue.state}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="country"
          label="Country"
          variant="outlined"
          fullWidth
          onChange={onInputChange}
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
          onChange={onInputChange}
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
          onChange={onInputChange}
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
          onChange={onInputChange}
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
          onChange={onInputChange}
          value={inputsValue.zip}
        />
      </Grid>
    </Grid>
  );
};

GridCardInputsComponent.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  inputsValue: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    web: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    houseNumber: PropTypes.string.isRequired,
    zip: PropTypes.string.isRequired,
  }),
};

export default GridCardInputsComponent;
