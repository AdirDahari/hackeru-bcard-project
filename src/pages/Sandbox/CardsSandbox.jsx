import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import axios from "axios";
import { errorToast, infoToast } from "../../messages/myToasts";
import RowCardComponent from "./ui/RowCardsComponent";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";

const CardsSandbox = () => {
  const [dataFromServer, setDataFromServer] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      try {
        let { data } = await axios.get("cards");
        setDataFromServer(data);
      } catch (err) {
        errorToast("Something worng...");
      }
    })();
  }, []);

  const handleDeleteCard = async (_id, bizNumber) => {
    try {
      let request = {
        bizNumber: bizNumber,
      };
      await axios.delete("/cards/" + _id, request);
      setDataFromServer((dataFromServerCopy) =>
        dataFromServerCopy.filter((card) => card._id !== _id)
      );
      infoToast("User deleted");
    } catch (err) {
      errorToast("Something worng...");
    }
  };

  const handleEditCard = (_id) => {
    navigate(`${ROUTES.EDITCARD}/${_id}`);
  };

  return (
    <TableContainer component={Paper} sx={{ maxHeight: 550 }}>
      <Table stickyHeader sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell>Card title</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Biz number</TableCell>
            <TableCell align="right">Options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataFromServer.map((card) => (
            <RowCardComponent
              key={card._id}
              _id={card._id}
              title={card.title}
              email={card.email}
              phone={card.phone}
              bizNumber={card.bizNumber}
              onDeleteCard={handleDeleteCard}
              onEditCard={handleEditCard}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default CardsSandbox;
