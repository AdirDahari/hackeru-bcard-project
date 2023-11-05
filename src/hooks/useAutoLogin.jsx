import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/authSlice";
import { getToken } from "../service/storageService";
import { darkThemeActions } from "../store/darkThemeSlice";

const useAutoLogin = () => {
  const userData = useSelector((bigPie) => bigPie.authSlice.userData);
  const dispatch = useDispatch();
  return async (skipTokenTest = false) => {
    try {
      const token = getToken();
      if (!token) return;
      const dataFromToken = jwtDecode(token);
      if (skipTokenTest) await axios.get(`/users/${dataFromToken._id}`);
      dispatch(authActions.login(dataFromToken));
    } catch (err) {
      console.log("err from auto login", err);
      localStorage.clear();
    }
  };
};

export default useAutoLogin;
