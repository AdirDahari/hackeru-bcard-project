import { TableCell, TableRow } from "@mui/material";

const RowUserComponent = ({
  _id,
  name,
  email,
  phone,
  isBusiness,
  onRowClick,
}) => {
  const handleRowClick = () => {
    onRowClick(_id);
  };
  return (
    <TableRow hover onClick={handleRowClick}>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="right">{email}</TableCell>
      <TableCell align="right">{phone}</TableCell>
      <TableCell align="right">{isBusiness ? "yes" : "no"}</TableCell>
    </TableRow>
  );
};
export default RowUserComponent;
