import { Fragment, useEffect, useState } from "react";
import { Container, Divider, Grid, Typography } from "@mui/material";
import CardComponent from "../../components/CardComponent";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import axios from "axios";
import { homePageNormalization } from "./homePageNormalization";
import useQueryParams from "../../hooks/useQueryParams";
import { useSelector } from "react-redux";
import { errorToast, infoToast, successToast } from "../../messages/myToasts";

let initialDataFromServer = [];

const HomePage = () => {
  const [dataFromServer, setDataFromServer] = useState([]);
  const navigate = useNavigate();
  const userData = useSelector((bigPie) => bigPie.authSlice.userData);
  const loggedIn = useSelector((bigPie) => bigPie.authSlice.loggedIn);
  const query = useQueryParams();
  useEffect(() => {
    axios
      .get("/cards")
      .then(({ data }) => {
        if (userData) data = homePageNormalization(data, userData._id);
        console.log("data", data);
        initialDataFromServer = data;
        setDataFromServer(data);
      })
      .catch((err) => {
        errorToast("Something worng...");
      });
  }, []);

  useEffect(() => {
    if (!initialDataFromServer.length) return;
    const filter = query.filter ? query.filter : "";
    setDataFromServer(
      initialDataFromServer.filter((card) => card.title.startsWith(filter))
    );
  }, [query, initialDataFromServer]);

  // BUG!!!
  // useEffect(() => {
  //   if (!userData) return;
  //   let userTheme = localStorage.getItem(userData._id);
  //   if (userTheme) {
  //     userTheme
  //       ? dispatch(darkThemeActions.darkTheme())
  //       : dispatch(darkThemeActions.lightTheme());
  //   }
  // }, [userData]);

  const handleDeleteCard = async (_id, bizNumber) => {
    try {
      let request = {
        bizNumber: +bizNumber,
      };
      await axios.delete("/cards/" + _id, request);
      setDataFromServer((dataFromServerCopy) =>
        dataFromServerCopy.filter((card) => card._id !== _id)
      );
      infoToast("Card Delete successfully!");
    } catch (err) {
      errorToast("Something wrong...");
    }
  };
  const handleEditCard = (_id) => {
    navigate(`${ROUTES.EDITCARD}/${_id}`);
  };
  const handleLikeCard = async (_id) => {
    let card = dataFromServer.filter((card) => card._id === _id);
    try {
      await axios.patch("/cards/" + _id, card);
      setDataFromServer((currentData) => {
        currentData.map((data) => {
          if (data._id === _id) {
            data.likes = !data.likes;
            return [...currentData];
          }
        });
        return [...currentData];
      });
    } catch (err) {
      errorToast("Something wrong...");
    }
  };

  return (
    <Container>
      <Typography variant="h1">Card Page</Typography>
      <Typography variant="h4">Here you can find business cards</Typography>
      <Divider sx={{ m: 2 }} />
      <Grid container spacing={2}>
        {dataFromServer.map((card, index) => (
          <Grid item key={card._id} xs={12} sm={6} md={4} lg={3}>
            <CardComponent
              title={card.title}
              subTitle={card.subtitle}
              phone={card.phone}
              address={`${card.address.city}, ${card.address.street} ${card.address.houseNumber}`}
              img={card.image.url}
              alt={card.image.alt}
              _id={card._id}
              user_id={card.user_id}
              bizNumber={card.bizNumber}
              isLike={loggedIn ? card.likes : false}
              cardNumber={card.cardNumber}
              onDeleteCard={handleDeleteCard}
              onEditCard={handleEditCard}
              onLikeCard={handleLikeCard}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
