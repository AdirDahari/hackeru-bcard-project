import { Container, Divider, Grid, Typography } from "@mui/material";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MyCardComponent from "../../components/MyCardComponent";
import FavouriteCardComponent from "../../components/FavouriteCardComponent";

const FavouritePage = () => {
  const [dataFromServer, setdataFromServer] = useState([]);
  const userData = useSelector((bigPie) => bigPie.authSlice.userData);

  useEffect(() => {
    (async () => {
      try {
        let { data } = await axios.get("/cards");
        console.log(userData);
        //65464ecea8d1eae12d31ee65
        setdataFromServer(likesCard(data, "65464ecea8d1eae12d31ee65"));
        // console.log("data", data);
      } catch (err) {
        console.log("err", err);
      }
    })();
  }, []);

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
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default FavouritePage;
