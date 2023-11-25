import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { errorToast, infoToast } from "../../messages/myToasts";
import RowUserComponent from "./ui/RowUserComponent";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";

const UsersSandbox = () => {
  const [dataFromServer, setDataFromServer] = useState([]);
  const navigate = useNavigate();
  const userData = useSelector((bigPie) => bigPie.authSlice.userData);

  useEffect(() => {
    (async () => {
      try {
        if (!userData.isAdmin) return;
        let { data } = await axios.get("/users");
        setDataFromServer(data);
      } catch (err) {
        errorToast("Something worng...");
      }
    })();
  }, []);

  const handleDeleteUser = async (_id) => {
    try {
      await axios.delete("/users/" + _id);
      setDataFromServer((dataFromServerCopy) =>
        dataFromServerCopy.filter((user) => user._id !== _id)
      );
      infoToast("User deleted");
    } catch (err) {
      errorToast("Something wrong...");
    }
  };

  const handleEditUser = (_id) => {
    console.log("handleEditUser", _id);
    navigate(`${ROUTES.EDITUSER}/${_id}`);
  };

  return (
    <TableContainer component={Paper} sx={{ maxHeight: 550 }}>
      <Table stickyHeader sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell>User name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">isBusiness</TableCell>
            <TableCell align="right">Options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataFromServer.map((user) => (
            <RowUserComponent
              key={user._id}
              _id={user._id}
              name={`${user.name.first} ${user.name.last}`}
              email={user.email}
              phone={user.phone}
              isBusiness={user.isBusiness}
              onDeleteUser={handleDeleteUser}
              onEditCard={handleEditUser}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default UsersSandbox;
