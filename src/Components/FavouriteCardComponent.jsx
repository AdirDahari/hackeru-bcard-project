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
  onPhoneCard,
}) => {
  const handleDislikeClick = () => {
    onDislikeCard(_id);
  };
  const handlePhoneClick = () => {
    onPhoneCard(_id);
  };

  return (
    <Card>
      {/* <CardActionArea>
        <CardMedia component="img" image={img} alt={alt} />
      </CardActionArea> */}
      <PopupComponent
        img={img}
        alt={alt}
        title={title}
        email={email}
        address={address}
        description={description}
        phone={phone}
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
export default FavouriteCardComponent;
