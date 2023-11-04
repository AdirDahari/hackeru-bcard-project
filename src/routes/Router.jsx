import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import ROUTES from "./ROUTES.js";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
    </Routes>
  );
};
export default Router;
