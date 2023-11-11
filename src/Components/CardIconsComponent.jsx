import { Box, IconButton } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector } from "react-redux";

const CardIconsComponent = ({
  handlePhoneClick,
  handleClickEditCard,
  handleDeleteCardClick,
  handleLikeCard,
  user_id,
  likes,
}) => {
  const loggedIn = useSelector((bigPie) => bigPie.authSlice.loggedIn);
  const userData = useSelector((bigPie) => bigPie.authSlice.userData);

  return (
    <Box display="flex" justifyContent="space-between">
      {(loggedIn && userData.isAdmin) ||
        (loggedIn && userData._id === user_id && (
          <Box>
            <IconButton onClick={handleDeleteCardClick}>
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={handleClickEditCard}>
              <CreateIcon />
            </IconButton>
          </Box>
        ))}
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
export default CardIconsComponent;
