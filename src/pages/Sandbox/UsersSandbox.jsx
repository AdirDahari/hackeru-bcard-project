import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import RowUserComponent from "./RowUserComponent";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const UsersSandbox = () => {
  const [dataFromServer, setDataFromServer] = useState([]);
  const userData = useSelector((bigPie) => bigPie.authSlice.userData);

  useEffect(() => {
    (async () => {
      try {
        if (!userData.isAdmin) return;
        let { data } = await axios.get("/users");
        setDataFromServer(data);
        console.log("data", data);
      } catch (err) {
        console.log("err", err);
      }
    })();
  }, []);

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
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default UsersSandbox;
