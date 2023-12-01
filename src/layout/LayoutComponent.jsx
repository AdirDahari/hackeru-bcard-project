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
  const isDarkTheme = useSelector((bigPie) => bigPie.darkThemeSlice.darkTheme);
  const dispatch = useDispatch();

  const themes = tmc({
    primary: {
      main: "!#0C2D48",
    },
    secondary: {
      main: "!#7B66FF",
    },
    "text.headerColor": "*#F5F7F8",
    "text.headerActive": "*#BEAEE2",
    favActive: "*#FB0000",
  });

  const darkTheme = createTheme(themes.dark);
  const lightTheme = createTheme(themes.light);

  const handleThemeChange = (checked) => {
    checked
      ? dispatch(darkThemeActions.darkTheme())
      : dispatch(darkThemeActions.lightTheme());
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
