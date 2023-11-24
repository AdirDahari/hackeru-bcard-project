import { TableCell, TableRow } from "@mui/material";

const RowCardComponent = ({
  _id,
  title,
  email,
  phone,
  bizNumber,
  onRowClick,
}) => {
  const handleRowClick = () => {
    onRowClick(_id);
  };
  return (
    <TableRow hover onClick={handleRowClick}>
      <TableCell component="th" scope="row">
        {title}
      </TableCell>
      <TableCell align="right">{email}</TableCell>
      <TableCell align="right">{phone}</TableCell>
      <TableCell align="right">{bizNumber}</TableCell>
    </TableRow>
  );
};
export default RowCardComponent;
