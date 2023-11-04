import { Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import CardComponent from "../../Components/CardComponent";
import nextKey from "generate-my-key";

const HomePage = () => {
  const [dataFromServer, setDataFromServer] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/cards");
        console.log(data); //log
        setDataFromServer(data);
      } catch (err) {
        //todo
        console.log("err", err); //log
      }
    })();
  }, []);

  const handleDeleteCard = (_id) => {
    console.log("handleDeleteCard");
    //todo
  };

  const handleEditCard = (_id) => {
    console.log("handleEditCard");
    //todo
  };

  const handleLikeCard = (_id) => {
    console.log("handleLikeCard");
    //todo
  };

  return (
    <Grid container spacing={2} sx={{ textAlign: "center" }}>
      {dataFromServer.map((card) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={nextKey()}>
          <CardComponent
            _id={card._id}
            title={card.title}
            subTitle={card.subtitle}
            phone={card.phone}
            address={`${card.address.city}, ${card.address.street} ${card.address.houseNumber}`}
            img={card.image.url}
            alt={card.image.alt}
            cardNumber={card.cardNumber}
            onDeleteCard={handleDeleteCard}
            onEditCard={handleEditCard}
            onLikeCard={handleLikeCard}
          />
        </Grid>
      ))}
    </Grid>
  );
};
export default HomePage;
