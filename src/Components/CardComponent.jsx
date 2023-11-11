import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import CardIconsComponent from "./CardIconsComponent";

const CardComponent = ({
  _id,
  title,
  subTitle,
  phone,
  address,
  img,
  alt,
  isLike,
  cardNumber,
  bizNumber,
  user_id,
  onDeleteCard,
  onEditCard,
  onLikeCard,
}) => {
  const loggedIn = useSelector((bigPie) => bigPie.authSlice.loggedIn);
  // console.log("CardComponent");
  const handlePhoneClick = () => {
    console.log("you clicked on phone btn");
  };
  const handleDeleteCardClick = () => {
    console.log("_id to delete (CardComponent)", _id);
    onDeleteCard(_id, bizNumber);
  };
  const handleClickEditCard = () => {
    // console.log("move to edit card page");
    onEditCard(_id);
  };
  const handleLikeCard = () => {
    console.log("handleLikeCard");
    onLikeCard(_id);
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
            {cardNumber}
          </Typography>
        </Box>
        {/* <Box display="flex" justifyContent="space-between">
          <Box>
            <IconButton onClick={handlePhoneClick}>
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
            <IconButton>
              <FavoriteIcon color={like ? "favActive" : ""} />
            </IconButton>
          </Box>
        </Box> */}
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
  subTitle: PropTypes.string,
  phone: PropTypes.string,
  address: PropTypes.string,
  img: PropTypes.string,
  alt: PropTypes.string,
  like: PropTypes.bool,
  cardNumber: PropTypes.number,
  onDeleteCard: PropTypes.func.isRequired,
  onEditCard: PropTypes.func.isRequired,
};
CardComponent.defaultProps = {
  img: "https://www.livemint.com/lm-img/img/2023/08/14/1600x900/garena_free_fire_max_1688877791610_1691982307589.jpg",
  alt: "running",
};

export default CardComponent;
