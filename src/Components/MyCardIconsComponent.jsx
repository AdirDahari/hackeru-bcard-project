import { Box, IconButton } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import PhoneIcon from "@mui/icons-material/Phone";
import PropTypes from "prop-types";

const MyCardIconsComponent = ({
  handleClickEditCard,
  handleDeleteCardClick,
  handlePhoneClick,
}) => {
  return (
    <Box display="flex" justifyContent="space-between">
      <Box>
        <IconButton edge="start" onClick={handlePhoneClick}>
          <PhoneIcon />
        </IconButton>
        <IconButton onClick={handleClickEditCard}>
          <CreateIcon />
        </IconButton>
      </Box>
      <Box>
        <IconButton onClick={handleDeleteCardClick}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

MyCardIconsComponent.propTypes = {
  handleClickEditCard: PropTypes.func.isRequired,
  handleDeleteCardClick: PropTypes.func.isRequired,
  handlePhoneClick: PropTypes.func.isRequired,
};

export default MyCardIconsComponent;
