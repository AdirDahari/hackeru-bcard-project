import { Fragment, useEffect, useState } from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  Pagination,
  Typography,
} from "@mui/material";
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
  // const [dataToShow, setDataToShow] = useState([[]]);
  const [pages, setPages] = useState(0);
  const [page, setPage] = useState(1);
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
        setPages(Math.ceil(data.length / 12));
        // showData();
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

  // const showData = () => {
  //   let tempArr = [];
  //   let counter = 0;
  //   for (let i = 0; i < pages; i++) {
  //     let arr = [];
  //     for (let j = 0; j < 12; j++) {
  //       arr.push(dataFromServer[counter]);
  //       counter++;
  //     }
  //     tempArr.push(arr);
  //   }
  //   setDataToShow(tempArr);
  // };

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

  const handleChangePage = (e) => {
    console.log("handleChangePage", e.target.innerText);
    setPage(+e.target.innerText);
  };

  return (
    <Container>
      <Typography variant="h1">Card Page</Typography>
      <Typography variant="h4">Here you can find business cards</Typography>
      <Divider sx={{ m: 2 }} />
      <Grid container spacing={2}>
        {dataFromServer.map((card, index) => (
          <Grid item key={card._id} xs={12} sm={6} md={4} lg={3}>
            {index < 12 ? (
              <CardComponent
                title={card.title}
                subTitle={card.subtitle}
                phone={card.phone}
                address={`${card.address.city}, ${card.address.street} ${card.address.houseNumber}`}
                img={card.image.url}
                alt={card.image.alt}
                email={card.email}
                _id={card._id}
                user_id={card.user_id}
                bizNumber={card.bizNumber}
                isLike={loggedIn ? card.likes : false}
                cardNumber={card.cardNumber}
                description={card.description}
                onDeleteCard={handleDeleteCard}
                onEditCard={handleEditCard}
                onLikeCard={handleLikeCard}
              />
            ) : (
              <Fragment />
            )}
          </Grid>
        ))}
      </Grid>
      <Box p={2}>
        <Pagination
          count={pages}
          page={page}
          onChange={handleChangePage}
          color="primary"
        />
      </Box>
    </Container>
  );
};

export default HomePage;
