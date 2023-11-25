import { TableCell, TableRow } from "@mui/material";
import OptionsButton from "./OptionsButton";

const RowUserComponent = ({
  _id,
  name,
  email,
  phone,
  isBusiness,
  onDeleteUser,
  onEditCard,
}) => {
  return (
    <TableRow hover>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="right">{email}</TableCell>
      <TableCell align="right">{phone}</TableCell>
      <TableCell align="right">{isBusiness ? "yes" : "no"}</TableCell>
      <TableCell align="right">
        <OptionsButton
          onDeleteClick={onDeleteUser}
          onEditClick={onEditCard}
          _id={_id}
        />
      </TableCell>
    </TableRow>
  );
};
export default RowUserComponent;
