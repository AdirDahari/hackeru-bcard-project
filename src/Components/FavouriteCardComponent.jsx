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
import FavouriteCardIcons from "./FavouriteCardIcons";
import PopupComponent from "./PopupComponent";
import { useState } from "react";
import PropTypes from "prop-types";

const FavouriteCardComponent = ({
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
  onDislikeCard,
}) => {
  const [openDetails, setOpenDetails] = useState(false);

  const handleClickOpen = () => {
    setOpenDetails(true);
  };

  const handleClickClose = () => {
    setOpenDetails(false);
  };
  const handleDislikeClick = () => {
    onDislikeCard(_id);
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
        <FavouriteCardIcons
          handleDislike={handleDislikeClick}
          handlePhone={handlePhoneClick}
        />
      </CardContent>
    </Card>
  );
};
FavouriteCardComponent.propTypes = {
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
  onDislikeCard: PropTypes.func.isRequired,
};
FavouriteCardComponent.defaultProps = {
  img: "https://www.livemint.com/lm-img/img/2023/08/14/1600x900/garena_free_fire_max_1688877791610_1691982307589.jpg",
  alt: "running",
};

export default FavouriteCardComponent;
