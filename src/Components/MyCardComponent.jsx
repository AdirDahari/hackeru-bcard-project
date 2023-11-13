import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import CardIconsComponent from "./CardIconsComponent";
import MyCardIconsComponent from "./MyCardIconsComponent";

const MyCardComponent = ({
  _id,
  title,
  subTitle,
  phone,
  address,
  img,
  alt,
  bizNumber,
  onEditClick,
  onDeleteClick,
}) => {
  const handleEditCard = () => {
    onEditClick(_id);
  };
  const handleDeleteCard = () => {
    onDeleteClick(_id, bizNumber);
  };
  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" image={img} alt={alt} />
      </CardActionArea>
      <CardContent>
        <CardHeader title={title} subheader={subTitle} sx={{ p: 0, mb: 1 }} />
        <Divider />
        <Box sx={{ mt: 1 }}>
          <Typography variant="body2">
            <Typography fontWeight="700" variant="subtitle1" component="span">
              Phone:{" "}
            </Typography>
            {phone}
          </Typography>
          <Typography variant="body2">
            <Typography fontWeight="700" variant="subtitle1" component="span">
              Address:{" "}
            </Typography>
            {address}
          </Typography>
          <Typography variant="body2">
            <Typography fontWeight="700" variant="subtitle1" component="span">
              Card Number:{" "}
            </Typography>
          </Typography>
        </Box>
        <MyCardIconsComponent
          handleClickEditCard={handleEditCard}
          handleDeleteCardClick={handleDeleteCard}
        />
      </CardContent>
    </Card>
  );
};
export default MyCardComponent;
