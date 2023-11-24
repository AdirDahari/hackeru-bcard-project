import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import RowCardComponent from "./RowCardsComponent";
import { useEffect, useState } from "react";
import axios from "axios";
import { errorToast } from "../../messages/myToasts";

const CardsSandbox = () => {
  const [dataFromServer, setDataFromServer] = useState([]);
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
  const handleRowClick = (_id) => {
    console.log(_id);
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
              onRowClick={handleRowClick}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default CardsSandbox;
