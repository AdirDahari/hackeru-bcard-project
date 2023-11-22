import { Container, Divider, Typography } from "@mui/material";

const AboutPage = () => {
  return (
    <Container>
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
        business owners that are suitable for them as well as for both large and
        small businesses.
      </Typography>
      <Typography variant="h5">
        Business owners' cards with full details are displayed on the website.
      </Typography>
      <Divider sx={{ m: 2 }} />
      <Typography variant="h5" sx={{ fontWeight: "bold", p: 1 }}>
        Public user
      </Typography>
      <Typography variant="h5">
        Our public users can register on the site and enjoy a wide range of
        activities on the site, they will be able to save cards they liked,
        create a card, edit their profile and more
      </Typography>
      <Divider sx={{ m: 2 }} />
      <Typography variant="h5" sx={{ fontWeight: "bold", p: 1 }}>
        Business user
      </Typography>
      <Typography variant="h5">
        Business owners who wish to advertise your business will be able to
        create a business profile and create a card that all visitors to the
        site can see
      </Typography>
    </Container>
  );
};
export default AboutPage;
