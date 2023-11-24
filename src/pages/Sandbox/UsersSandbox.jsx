import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import RowUserComponent from "./RowUserComponent";

const initData = [
  {
    _id: "650ae758db3813a6502fc2f7",
    name: {
      first: "regular",
      middle: "",
      last: "user",
      _id: "650ae758db3813a6502fc2f8",
    },
    phone: "050-0000000",
    email: "regular@gmail.com",
    image: {
      url: "https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_960_720.png",
      alt: "business card image",
      _id: "650ae758db3813a6502fc2f9",
    },
    address: {
      state: "not defined",
      country: "israel",
      city: "tel-aviv",
      street: "magnive",
      houseNumber: 5,
      zip: 0,
      _id: "650ae758db3813a6502fc2fa",
    },
    isAdmin: false,
    isBusiness: false,
    createdAt: "2023-09-20T12:36:40.953Z",
  },
  {
    _id: "650ae759db3813a6502fc2fc",
    name: {
      first: "admin",
      middle: "",
      last: "user",
      _id: "650ae759db3813a6502fc2fd",
    },
    phone: "050-0000000",
    email: "admin@gmail.com",
    image: {
      url: "https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_960_720.png",
      alt: "business card image",
      _id: "650ae759db3813a6502fc2fe",
    },
    address: {
      state: "not defined",
      country: "israel",
      city: "tel-aviv",
      street: "magnive",
      houseNumber: 5,
      zip: 0,
      _id: "650ae759db3813a6502fc2ff",
    },
    isAdmin: true,
    isBusiness: true,
    createdAt: "2023-09-20T12:36:41.017Z",
  },
];

const UsersSandbox = () => {
  const handleRowClick = (_id) => {
    console.log(_id);
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
          </TableRow>
        </TableHead>
        <TableBody>
          {initData.map((user) => (
            <RowUserComponent
              key={user._id}
              _id={user._id}
              name={`${user.name.first} ${user.name.last}`}
              email={user.email}
              phone={user.phone}
              isBusiness={user.isBusiness}
              onRowClick={handleRowClick}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default UsersSandbox;
