import {
  Container,
  Divider,
  Grid,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import { Fragment } from "react";

const itemData = [
  "https://images.unsplash.com/photo-1574274594359-16469ef77d81?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1665686306574-1ace09918530?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1506787497326-c2736dde1bef?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1525095182007-3874c4e2b38b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const AboutPage = () => {
  return (
    <Container sx={{ my: 5, minHeight: "90vh" }}>
      <Grid container spacing={4} display={{ xs: "block", sm: "flex" }}>
        <Grid item xs={12} sm={12} md={8}>
          <Fragment>
            <Typography variant="h1">About us</Typography>
            <Typography variant="h4">
              Here you can hear about us and our website
            </Typography>
            <Divider sx={{ m: 2 }} />
            <Typography variant="h5" sx={{ fontWeight: "bold", p: 1 }}>
              Our Story
            </Typography>
            <Typography variant="h5">
              This site is designed to help the general public search and find
              business owners that are suitable for them as well as for both
              large and small businesses.
            </Typography>
            <Typography variant="h5">
              Business owners' cards with full details are displayed on the
              website.
            </Typography>
            <Divider sx={{ m: 2 }} />
            <Typography variant="h5" sx={{ fontWeight: "bold", p: 1 }}>
              Public user
            </Typography>
            <Typography variant="h5">
              Our public users can register on the site and enjoy a wide range
              of activities on the site, they will be able to save cards they
              liked, create a card, edit their profile and more
            </Typography>
            <Divider sx={{ m: 2 }} />
            <Typography variant="h5" sx={{ fontWeight: "bold", p: 1 }}>
              Business user
            </Typography>
            <Typography variant="h5">
              Business owners who wish to advertise your business will be able
              to create a business profile and create a card that all visitors
              to the site can see
            </Typography>
          </Fragment>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <ImageList sx={{ width: 550, height: 650 }} cols={3} rowHeight={164}>
            {itemData.map((item, index) => (
              <ImageListItem key={index}>
                <img
                  srcSet={item}
                  src={item}
                  alt={"unsplash random image" + index}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
      </Grid>
    </Container>
  );
};
export default AboutPage;
