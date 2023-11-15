import { Container, Divider, Grid, Typography } from "@mui/material";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FavouriteCardComponent from "../../components/FavouriteCardComponent";

const FavouritePage = () => {
  const [dataFromServer, setdataFromServer] = useState([]);
  const userData = useSelector((bigPie) => bigPie.authSlice.userData);

  useEffect(() => {
    (async () => {
      try {
        let { data } = await axios.get("/cards");
        // console.log(userData);
        //65464ecea8d1eae12d31ee65
        setdataFromServer(likesCard(data, userData._id));
        // console.log("data", data);
      } catch (err) {
        console.log("err", err);
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
      let request = await axios.patch("/cards/" + _id, card);
      setdataFromServer(likesCard(dataFromServer, userData._id));
      console.log("request", request);
    } catch (err) {
      console.log("handleDislikeClick err", err);
    }
  };

  const handlePhoneClick = (_id) => {
    console.log("handlePhoneClick", handlePhoneClick);
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
              address={`${card.address.city}, ${card.address.street} ${card.address.houseNumber}`}
              phone={card.phone}
              bizNumber={card.bizNumber}
              img={card.image.url}
              alt={card.image.alt}
              onDislikeCard={handleDislikeClick}
              onPhoneCard={handlePhoneClick}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default FavouritePage;
