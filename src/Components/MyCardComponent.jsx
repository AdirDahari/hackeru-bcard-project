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
import PopupComponent from "./PopupComponent";
import { useState } from "react";

const MyCardComponent = ({
  _id,
  title,
  subTitle,
  phone,
  address,
  img,
  alt,
  description,
  email,
  bizNumber,
  onEditClick,
  onDeleteClick,
}) => {
  const [openDetails, setOpenDetails] = useState(false);

  const handleClickOpen = () => {
    setOpenDetails(true);
  };

  const handleClickClose = () => {
    setOpenDetails(false);
  };
  const handleEditCard = () => {
    onEditClick(_id);
  };
  const handleDeleteCard = () => {
    onDeleteClick(_id, bizNumber);
  };
  const handlePhoneClick = () => {
    setOpenDetails(true);
  };
  return (
    <Card>
      <PopupComponent
        img={img}
        alt={alt}
        title={title}
        email={email}
        address={address}
        description={description}
        phone={phone}
        open={openDetails}
        onClickClose={handleClickClose}
        onClickOpen={handleClickOpen}
      />
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
            {bizNumber}
          </Typography>
        </Box>
        <MyCardIconsComponent
          handleClickEditCard={handleEditCard}
          handleDeleteCardClick={handleDeleteCard}
          handlePhoneClick={handlePhoneClick}
        />
      </CardContent>
    </Card>
  );
};
export default MyCardComponent;
