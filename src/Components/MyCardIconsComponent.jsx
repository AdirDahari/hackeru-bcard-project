import { Box, IconButton } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";

const MyCardIconsComponent = ({
  handleClickEditCard,
  handleDeleteCardClick,
}) => {
  return (
    <Box display="flex" justifyContent="space-between">
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
