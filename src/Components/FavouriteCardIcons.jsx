import { Box, IconButton } from "@mui/material";
import NotInterestedIcon from "@mui/icons-material/NotInterested";
import PhoneIcon from "@mui/icons-material/Phone";
import PropTypes from "prop-types";

const FavouriteCardIcons = ({ handleDislike, handlePhone }) => {
  return (
    <Box display="flex" justifyContent="space-between">
      <IconButton onClick={handlePhone}>
        <PhoneIcon />
      </IconButton>
      <IconButton onClick={handleDislike}>
        <NotInterestedIcon />
      </IconButton>
    </Box>
  );
};
FavouriteCardIcons.protoTypes = {
  handleDislike: PropTypes.func.isRequired,
  handlePhone: PropTypes.func.isRequired,
};

export default FavouriteCardIcons;
