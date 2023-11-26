import { TableCell, TableRow } from "@mui/material";
import OptionsButton from "./OptionsButton";
import PropTypes from "prop-types";

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

RowCardComponent.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  bizNumber: PropTypes.number.isRequired,
  onDeleteCard: PropTypes.func.isRequired,
  onEditCard: PropTypes.func.isRequired,
};

export default RowCardComponent;
