import { Box, IconButton } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const CardIconsComponent = ({
  user_id,
  likes,
  handlePhoneClick,
  handleClickEditCard,
  handleDeleteCardClick,
  handleLikeCard,
}) => {
  const loggedIn = useSelector((bigPie) => bigPie.authSlice.loggedIn);
  const userData = useSelector((bigPie) => bigPie.authSlice.userData);

  return (
    <Box display="flex" justifyContent="space-between">
      {loggedIn && userData._id === user_id && !userData.isAdmin && (
        <Box>
          <IconButton onClick={handleDeleteCardClick}>
            <DeleteIcon />
          </IconButton>
          <IconButton onClick={handleClickEditCard}>
            <CreateIcon />
          </IconButton>
        </Box>
      )}
      {loggedIn && userData.isAdmin && (
        <Box>
          <IconButton onClick={handleDeleteCardClick}>
            <DeleteIcon />
          </IconButton>
          <IconButton onClick={handleClickEditCard}>
            <CreateIcon />
          </IconButton>
        </Box>
      )}
      <Box>
        {loggedIn && (
          <IconButton onClick={handleLikeCard}>
            <FavoriteIcon color={likes ? "favActive" : ""} />
          </IconButton>
        )}
        <IconButton onClick={handlePhoneClick}>
          <PhoneIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

CardIconsComponent.propTypes = {
  user_id: PropTypes.string.isRequired,
  likes: PropTypes.bool.isRequired,
  handlePhoneClick: PropTypes.func.isRequired,
  handleClickEditCard: PropTypes.func.isRequired,
  handleDeleteCardClick: PropTypes.func.isRequired,
  handleLikeCard: PropTypes.func.isRequired,
};

export default CardIconsComponent;
