import { Description } from "@mui/icons-material";
import {
  Box,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Fragment, forwardRef, useState } from "react";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PopupComponent = ({
  img,
  alt,
  title,
  description,
  phone,
  address,
  email,
}) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <CardActionArea onClick={handleClickOpen}>
        <CardMedia component="img" image={img} alt={alt} />
      </CardActionArea>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        fullWidth={true}
        maxWidth="md"
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <Fragment>
          <DialogTitle>{title}</DialogTitle>
          <DialogContent dividers>
            <DialogContentText
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography variant="body2">
                  <Typography
                    fontWeight="700"
                    variant="subtitle1"
                    component="span"
                  >
                    Email:{" "}
                  </Typography>
                  {email}
                </Typography>
                <Typography variant="body2">
                  <Typography
                    fontWeight="700"
                    variant="subtitle1"
                    component="span"
                  >
                    Phone:{" "}
                  </Typography>
                  {phone}
                </Typography>
                <Typography variant="body2">
                  <Typography
                    fontWeight="700"
                    variant="subtitle1"
                    component="span"
                  >
                    Address:{" "}
                  </Typography>
                  {address}
                </Typography>
                <Typography variant="body2">
                  <Typography
                    fontWeight="700"
                    variant="subtitle1"
                    component="span"
                  >
                    Description:{" "}
                  </Typography>
                  {description}
                </Typography>
              </Box>
              <Box
                sx={{
                  borderRadius: "50%",
                  mr: 5,
                  backgroundColor: "lightgray",
                }}
              >
                <Typography p={10}>map</Typography>
              </Box>
            </DialogContentText>
          </DialogContent>
        </Fragment>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};
export default PopupComponent;
