import { Box, IconButton } from "@mui/material";
import NotInterestedIcon from "@mui/icons-material/NotInterested";
import PhoneIcon from "@mui/icons-material/Phone";

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
export default FavouriteCardIcons;
