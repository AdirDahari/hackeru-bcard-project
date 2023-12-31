import { Box, CardMedia } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Fragment, forwardRef } from "react";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PopupComponent = ({
  title,
  description,
  phone,
  address,
  email,
  img,
  alt,
  open = false,
  onClickClose,
}) => {
  return (
    <Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        fullWidth={true}
        maxWidth="sm"
        onClose={onClickClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <Fragment>
          <DialogTitle>{title}</DialogTitle>
          <DialogContent
            dividers
            sx={{
              display: { xs: "block", md: "flex" },
              justifyContent: "space-between",
            }}
          >
            <Box>
              <DialogContentText variant="body2">
                <DialogContentText
                  fontWeight="700"
                  variant="subtitle1"
                  component="span"
                >
                  Email:{" "}
                </DialogContentText>
                {email}
              </DialogContentText>
              <DialogContentText variant="body2">
                <DialogContentText
                  fontWeight="700"
                  variant="subtitle1"
                  component="span"
                >
                  Phone:{" "}
                </DialogContentText>
                {phone}
              </DialogContentText>
              <DialogContentText variant="body2">
                <DialogContentText
                  fontWeight="700"
                  variant="subtitle1"
                  component="span"
                >
                  Address:{" "}
                </DialogContentText>
                {address}
              </DialogContentText>
              <DialogContentText variant="body2">
                <DialogContentText
                  fontWeight="700"
                  variant="subtitle1"
                  component="span"
                >
                  Description:{" "}
                </DialogContentText>
                {description}
              </DialogContentText>
            </Box>
            <Box
              sx={{
                maxWidth: "300px",
                maxHeight: "400px",
                p: 1,
                m: 2,
              }}
            >
              <CardMedia
                sx={{ maxHeight: 240, minHeight: 240, overflow: "hidden" }}
                component="img"
                image={img}
                alt={alt}
              />
            </Box>
          </DialogContent>
        </Fragment>
        <DialogActions>
          <Button onClick={onClickClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default PopupComponent;
