import { useEffect, useState } from "react";
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
import { errorToast, infoToast } from "../../messages/myToasts";

let initialDataFromServer = [];

const HomePage = () => {
  const [dataFromServer, setDataFromServer] = useState([]);
  const [pages, setPages] = useState(0);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const userData = useSelector((bigPie) => bigPie.authSlice.userData);
  const query = useQueryParams();

  useEffect(() => {
    (async () => {
      try {
        let { data } = await axios.get("/cards");
        if (userData) data = homePageNormalization(data, userData._id);
        initialDataFromServer = data;
        setPages(Math.ceil(data.length / 12));
      } catch (err) {
        errorToast("Something worng...");
      }
    })();
  }, []);

  useEffect(() => {
    if (!initialDataFromServer.length) return;
    const filter = query.filter ? query.filter : "";
    if (filter) {
      setDataFromServer(
        initialDataFromServer.filter((card) => card.title.startsWith(filter))
      );
    } else {
      cardsToShow();
    }
  }, [query, initialDataFromServer, page]);

  const cardsToShow = () => {
    let tempArr = [];
    let max = page * 12;
    if (max > initialDataFromServer.length) {
      max = initialDataFromServer.length;
    }
    for (let i = max - 12; i < max; i++) {
      tempArr.push(initialDataFromServer[i]);
    }
    setDataFromServer(tempArr);
  };

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
              isLike={typeof card.likes === "boolean" ? card.likes : false}
              cardNumber={card.cardNumber}
              description={card.description}
              onDeleteCard={handleDeleteCard}
              onEditCard={handleEditCard}
              onLikeCard={handleLikeCard}
            />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center" }} p={3}>
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
