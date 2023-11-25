import { TableCell, TableRow } from "@mui/material";
import OptionsButton from "./OptionsButton";

const RowCardComponent = ({
  _id,
  title,
  email,
  phone,
  bizNumber,
  onDeleteCard,
  onEditCard,
}) => {
  const handleReturnData = (_id) => {
    onDeleteCard(_id, bizNumber);
  };
  return (
    <TableRow hover>
      <TableCell component="th" scope="row">
        {title}
      </TableCell>
      <TableCell align="right">{email}</TableCell>
      <TableCell align="right">{phone}</TableCell>
      <TableCell align="right">{bizNumber}</TableCell>
      <TableCell align="right">
        <OptionsButton
          _id={_id}
          onDeleteClick={handleReturnData}
          onEditClick={onEditCard}
        />
      </TableCell>
    </TableRow>
  );
};
export default RowCardComponent;
