import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import CardComponent from "../../components/CardComponent";
import MyCardComponent from "../../components/MyCardComponent";

const ProfilePage = () => {
  const [userDataFromServer, setUserDataFromServer] = useState({
    _id: "",
    name: {
      first: "",
      middle: "",
      last: "",
      _id: "",
    },
    phone: "",
    email: "",
    image: {
      url: "",
      alt: "",
      _id: "",
    },
    address: {
      state: "",
      country: "",
      city: "",
      street: "",
      houseNumber: 0,
      zip: 0,
      _id: "",
    },
    isAdmin: false,
    isBusiness: false,
    createdAt: "",
  });
  const [myCard, setMyCard] = useState([]);
  const userData = useSelector((bigPie) => bigPie.authSlice.userData);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        let { data } = await axios.get("/users/" + userData._id);
        // console.log("userDataFromServer", data);
        setUserDataFromServer(data);
      } catch (err) {
        console.log("err", err);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        let { data } = await axios.get("/cards/my-cards");
        setMyCard([
          {
            _id: "654250f4a8d1eae12d31e398",
            title: "a wonderful new card",
            subtitle: "a test value for this card",
            description: "a test value for new card\na test value for new card",
            phone: "012-3211234",
            email: "qwe@gmail.com",
            web: "www.bing.com",
            image: {
              url: "https://img.izismile.com/img/img13/20201030/640/you_have_never_seen_something_like_this_640_36.jpg",
              alt: "image of something",
              _id: "654250f4a8d1eae12d31e399",
            },
            address: {
              state: "IL",
              country: "israel",
              city: "arad",
              street: "shoham",
              houseNumber: 5,
              zip: 8920435,
              _id: "654250f4a8d1eae12d31e39a",
            },
            bizNumber: 2285765,
            likes: [],
            user_id: "65424ae9a8d1eae12d31e360",
            createdAt: "2023-11-01T13:21:56.114Z",
            __v: 0,
          },
        ]);
        console.log("myCard", myCard);
      } catch (err) {
        console.log("err", err);
      }
    })();
  }, []);

  const handleEditCardClick = (_id) => {
    navigate(`${ROUTES.CREATECARD}/${_id}`);
  };
  const handleCreateCardClick = () => {
    navigate(ROUTES.CREATECARD);
  };

  const handleDeleteCardClick = async (_id, bizNumber) => {
    try {
      let request = {
        bizNumber: +bizNumber,
      };
      console.log(request);
      await axios.delete("/cards/" + _id, request);
      setUserDataFromServer((dataFromServerCopy) =>
        dataFromServerCopy.filter((card) => card._id !== _id)
      );
    } catch (err) {
      console.log("handleDeleteCard err", err);
    }
  };

  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={8} md={7}>
          <Typography variant="h3" p={2}>
            {userDataFromServer.name.first}&nbsp;
            {userDataFromServer.name.last}
          </Typography>
          <Box>
            <Typography variant="h5" component="p" sx={{ p: 2 }}>
              Country: {userDataFromServer.address.country}
            </Typography>
            <Typography variant="h5" component="p" sx={{ p: 2 }}>
              Email: {userDataFromServer.email}
            </Typography>
            <Typography variant="h5" component="p" sx={{ p: 2 }}>
              Phone: {userDataFromServer.phone}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={false} sm={4} md={5}>
          <Box
            component="img"
            src={userDataFromServer.image.url}
            alt={userDataFromServer.image.alt}
            sx={{ width: "100%" }}
          ></Box>
        </Grid>
      </Grid>
      <Divider sx={{ mt: 4, mb: 4 }}></Divider>
      {myCard.length ? (
        <Grid container spacing={2}>
          {myCard.map((card) => (
            <Grid item key={card._id} xs={12} sm={6} md={4} lg={3}>
              <MyCardComponent
                _id={card._id}
                title={card.title}
                subTitle={card.subtitle}
                address={`${card.address.city}, ${card.address.street} ${card.address.houseNumber}`}
                img={card.image.url}
                alt={card.image.alt}
                phone={card.phone}
                bizNumber={card.bizNumber}
                onDeleteClick={handleDeleteCardClick}
                onEditClick={handleEditCardClick}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Fragment>
          <Typography variant="h4">You don't have cards yet</Typography>
          <Button
            sx={{ m: 2 }}
            variant="contained"
            onClick={handleCreateCardClick}
          >
            Create Card
          </Button>
        </Fragment>
      )}
    </Container>
  );
};
export default ProfilePage;
