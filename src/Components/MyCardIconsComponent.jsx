import { Box, IconButton } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import PhoneIcon from "@mui/icons-material/Phone";

const MyCardIconsComponent = ({
  handleClickEditCard,
  handleDeleteCardClick,
  handlePhoneClick,
}) => {
  return (
    <Box display="flex" justifyContent="space-between">
      <IconButton onClick={handlePhoneClick}>
        <PhoneIcon />
      </IconButton>
      <IconButton onClick={handleClickEditCard}>
        <CreateIcon />
      </IconButton>
      <IconButton onClick={handleDeleteCardClick}>
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};
export default MyCardIconsComponent;
