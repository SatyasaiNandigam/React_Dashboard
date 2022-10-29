import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { rows } from "../../data/dummy";

const List = () => {
  return (
    <div className="table w-full overflow-hidden">
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Tracking Id</TableCell>
              <TableCell className="tableCell">name</TableCell>
              <TableCell className="tableCell">country</TableCell>
              <TableCell className="tableCell">status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="tableCell">{row.id}</TableCell>
                <TableCell className="tableCell">
                  <div className="cellwrapper flex items-center">
                    <img src={row.image} alt="tableimage" className="image w-8 h-8 rounded-full mr-3 object-cover" />
                    {row.name}
                  </div>
                </TableCell>
                <TableCell className="tableCell">{row.country}</TableCell>
                <TableCell className="tableCell "><span className="text-green-400 font-bold text-md">{row.status}</span></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default List;
