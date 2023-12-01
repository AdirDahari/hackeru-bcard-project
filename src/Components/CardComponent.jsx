import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import CardIconsComponent from "./CardIconsComponent";
import { useState } from "react";
import PopupComponent from "./PopupComponent";

const CardComponent = ({
  _id,
  title,
  subTitle,
  phone,
  address,
  img,
  alt,
  description,
  email,
  isLike,
  bizNumber,
  user_id,
  onDeleteCard,
  onEditCard,
  onLikeCard,
}) => {
  const [openDetails, setOpenDetails] = useState(false);

  const handleClickOpen = () => {
    setOpenDetails(true);
  };

  const handleClickClose = () => {
    setOpenDetails(false);
  };

  const handlePhoneClick = () => {
    setOpenDetails(true);
  };
  const handleDeleteCardClick = () => {
    onDeleteCard(_id, bizNumber);
  };
  const handleClickEditCard = () => {
    onEditCard(_id);
  };
  const handleLikeCard = () => {
    onLikeCard(_id);
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
        <Typography variant="h5" noWrap sx={{ p: 0, mb: 1 }}>
          {title}
        </Typography>
        <Typography sx={{ p: 0, mb: 1 }} variant="body2">
          {subTitle}
        </Typography>
        <Divider />
        <Box sx={{ mt: 1 }}>
          <Typography noWrap variant="body2">
            <Typography fontWeight="700" variant="subtitle1" component="span">
              Phone:{" "}
            </Typography>
            {phone}
          </Typography>
          <Typography noWrap variant="body2">
            <Typography fontWeight="700" variant="subtitle1" component="span">
              Address:{" "}
            </Typography>
            {address}
          </Typography>
          <Typography noWrap variant="body2">
            <Typography fontWeight="700" variant="subtitle1" component="span">
              Card Number:{" "}
            </Typography>
            {bizNumber}
          </Typography>
        </Box>
        <CardIconsComponent
          handleClickEditCard={handleClickEditCard}
          handlePhoneClick={handlePhoneClick}
          handleDeleteCardClick={handleDeleteCardClick}
          handleLikeCard={handleLikeCard}
          user_id={user_id}
          likes={isLike}
        />
      </CardContent>
    </Card>
  );
};

CardComponent.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  img: PropTypes.string,
  alt: PropTypes.string,
  description: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  isLike: PropTypes.bool.isRequired,
  bizNumber: PropTypes.number.isRequired,
  user_id: PropTypes.string.isRequired,
  onDeleteCard: PropTypes.func.isRequired,
  onEditCard: PropTypes.func.isRequired,
  onLikeCard: PropTypes.func.isRequired,
};
CardComponent.defaultProps = {
  img: "https://www.livemint.com/lm-img/img/2023/08/14/1600x900/garena_free_fire_max_1688877791610_1691982307589.jpg",
  alt: "running",
};

export default CardComponent;
