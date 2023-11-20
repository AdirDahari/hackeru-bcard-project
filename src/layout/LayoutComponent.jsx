import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import HeaderComponent from "./header/HeaderComponent";
import MainComponent from "./main/MainComponent";
import FooterComponent from "./footer/FooterComponent";
import tmc from "twin-moon-color";
import { useDispatch, useSelector } from "react-redux";
import { darkThemeActions } from "../store/darkThemeSlice";
import PopupComponent from "../components/PopupComponent";

const LayoutComponent = ({ children }) => {
  // const [isDarkTheme, setIsDarkTheme] = useState(false);
  const isDarkTheme = useSelector((bigPie) => bigPie.darkThemeSlice.darkTheme);
  const dispatch = useDispatch();
  const userData = useSelector((bigPie) => bigPie.authSlice.userData);

  const themes = tmc({
    "text.headerColor": "!#b219e6",
    "text.headerActive": "#9e165c",
    favActive: "*#FB0000",
  });
  // console.log("themes", themes);
  // const themes = tmc({ primary: "#00FF00", elisheva: "#FF0000" });

  const darkTheme = createTheme(themes.dark);
  const lightTheme = createTheme(themes.light);

  // const darkTheme = createTheme({
  //   palette: {
  //     mode: "dark",
  //   },
  // });
  // const lightTheme = createTheme({
  //   palette: {
  //     mode: "light",
  //   },
  // });

  const handleThemeChange = (checked) => {
    checked
      ? dispatch(darkThemeActions.darkTheme())
      : dispatch(darkThemeActions.lightTheme());

    // BUG!!!
    // if (userData) {
    //   localStorage.setItem(userData._id, checked);
    // }
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      <HeaderComponent
        isDarkTheme={isDarkTheme}
        onThemeChange={handleThemeChange}
      />
      <MainComponent>{children}</MainComponent>
      <PopupComponent />
      <FooterComponent />
    </ThemeProvider>
  );
};

export default LayoutComponent;
