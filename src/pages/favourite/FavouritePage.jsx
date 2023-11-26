import { Container, Divider, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FavouriteCardComponent from "../../components/FavouriteCardComponent";
import { errorToast, infoToast } from "../../messages/myToasts";

const FavouritePage = () => {
  const [dataFromServer, setdataFromServer] = useState([]);
  const userData = useSelector((bigPie) => bigPie.authSlice.userData);

  useEffect(() => {
    (async () => {
      try {
        let { data } = await axios.get("/cards");
        setdataFromServer(likesCard(data, userData._id));
      } catch (err) {
        errorToast("Something wrong...");
      }
    })();
  }, [dataFromServer]);

  const likesCard = (cards, user_id) => {
    return cards.filter((card) => {
      for (let like of card.likes) {
        if (user_id === like) {
          return true;
        }
      }
      return false;
    });
  };

  const handleDislikeClick = async (_id) => {
    console.log("handleDislikeClick", handleDislikeClick);
    let card = dataFromServer.filter((card) => card._id === _id);
    try {
      await axios.patch("/cards/" + _id, card);
      setdataFromServer(likesCard(dataFromServer, userData._id));
      infoToast("Card remove from your favourite!");
    } catch (err) {
      errorToast("Something wrong...");
    }
  };

  return (
    <Container>
      <Typography variant="h1">Favourite cards</Typography>
      <Typography variant="h4">
        Here you can find your favourite cards
      </Typography>
      <Divider sx={{ m: 2 }} />
      <Grid container spacing={2}>
        {dataFromServer.map((card) => (
          <Grid item key={card._id} xs={12} sm={6} md={4} lg={3}>
            <FavouriteCardComponent
              _id={card._id}
              title={card.title}
              subTitle={card.subtitle}
              email={card.email}
              description={card.description}
              address={`${card.address.city}, ${card.address.street} ${card.address.houseNumber}`}
              phone={card.phone}
              bizNumber={card.bizNumber}
              img={card.image.url}
              alt={card.image.alt}
              onDislikeCard={handleDislikeClick}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default FavouritePage;
