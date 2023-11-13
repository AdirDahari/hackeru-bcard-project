import { Container, Divider, Typography } from "@mui/material";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const [userDataFromServer, setuserDataFromServer] = useState({
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
  const userData = useSelector((bigPie) => bigPie.authSlice.userData);

  useEffect(() => {
    (async () => {
      try {
        let { data } = await axios.get("/users/" + userData._id);
        console.log("userDataFromServer", data);
        setuserDataFromServer(data);
      } catch (err) {
        console.log("err", err);
      }
    })();
  }, []);

  return (
    <Container>
      <Typography variant="h1">Profile Page</Typography>
      <Typography variant="h4">
        {userDataFromServer.name.first + " " + userDataFromServer.name.last}
      </Typography>
      <Divider sx={{ m: 2 }} />
    </Container>
  );
};
export default ProfilePage;
