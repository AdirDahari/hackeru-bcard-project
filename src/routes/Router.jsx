import { Route, Routes } from "react-router-dom";
import ROUTES from "./ROUTES";
import HomePage from "../pages/home/HomePage";
import RegisterPage from "../pages/register/RegisterPage";
import Error404Page from "../pages/404/Error404Page";
import LoginPage from "../pages/login/LoginPage";
import EditCardPage from "../pages/EditCardPage/EditCardPage";
import CreateCardPage from "../pages/CreateCardPage/CreateCardPage";
import AuthGuard from "../Guard/AuthGuard";
import BizGuard from "../Guard/BizGuard";
import ProfilePage from "../pages/profile/ProfilePage";
import FavouritePage from "../pages/favourite/FavouritePage";
import AboutPage from "../pages/about/AboutPage";
import SandboxPage from "../pages/Sandbox/SandboxPage";
import UsersSandbox from "../pages/Sandbox/UsersSandbox";
import AdminGuard from "../Guard/AdminGuard";
import CardsSandbox from "../pages/Sandbox/CardsSandbox";
import EditUserPage from "../pages/EditUserPage/EditUserPage";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route
        path={ROUTES.SANDBOX}
        element={
          <AuthGuard>
            <AdminGuard>
              <SandboxPage />
            </AdminGuard>
          </AuthGuard>
        }
      >
        <Route path="users" element={<UsersSandbox />} />
        <Route path="cards" element={<CardsSandbox />} />
      </Route>
      <Route
        path={ROUTES.CREATECARD}
        element={
          <AuthGuard>
            <BizGuard>
              <CreateCardPage />
            </BizGuard>
          </AuthGuard>
        }
      />
      <Route
        path={`${ROUTES.EDITCARD}/:id`}
        element={
          <AuthGuard>
            <BizGuard>
              <EditCardPage />
            </BizGuard>
          </AuthGuard>
        }
      />
      <Route
        path={`${ROUTES.EDITUSER}/:id`}
        element={
          <AuthGuard>
            <AdminGuard>
              <EditUserPage />
            </AdminGuard>
          </AuthGuard>
        }
      />
      <Route
        path={ROUTES.PROFILE}
        element={
          <AuthGuard>
            <ProfilePage />
          </AuthGuard>
        }
      ></Route>
      <Route
        path={ROUTES.FAVOURITE}
        element={
          <AuthGuard>
            <FavouritePage />
          </AuthGuard>
        }
      ></Route>
      <Route path="*" element={<Error404Page />} />
    </Routes>
  );
};
export default Router;
