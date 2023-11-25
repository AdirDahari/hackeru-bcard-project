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
import MyCardIconsComponent from "./MyCardIconsComponent";
import PopupComponent from "./PopupComponent";
import { useState } from "react";
import PropTypes from "prop-types";

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
      <CardActionArea onClick={handleClickOpen}>
        <CardMedia
          sx={{ maxHeight: 240, minHeight: 240 }}
          component="img"
          image={img}
          alt={alt}
        />
      </CardActionArea>
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

MyCardComponent.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  img: PropTypes.string,
  alt: PropTypes.string,
  description: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  bizNumber: PropTypes.number.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default MyCardComponent;
