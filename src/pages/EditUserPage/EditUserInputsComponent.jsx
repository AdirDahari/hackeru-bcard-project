import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";

const EditUserInputsComponent = (inputsValue, onInputsChange) => {
  return (
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
          onChange={onInputsChange}
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
          onChange={onInputsChange}
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
          onChange={onInputsChange}
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
          onChange={onInputsChange}
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
          onChange={onInputsChange}
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
          onChange={onInputsChange}
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
          onChange={onInputsChange}
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
          onChange={onInputsChange}
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
          onChange={onInputsChange}
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
          onChange={onInputsChange}
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
          onChange={onInputsChange}
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
          onChange={onInputsChange}
        />
      </Grid>
    </Grid>
  );
};

EditUserInputsComponent.propTypes = {
  onInputsChange: PropTypes.func.isRequired,
  inputsValue: PropTypes.shape({
    first: PropTypes.string.isRequired,
    middle: PropTypes.string.isRequired,
    last: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    houseNumber: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    zip: PropTypes.string.isRequired,
  }),
};

export default EditUserInputsComponent;
