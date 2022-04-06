import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { color } from "@mui/material/node_modules/@mui/system";
import logo from "../src/Utils";

const UnsecurePassList = (props) => {
  const location = useLocation();
  const [pass, setPass] = useState([]);

  useEffect(() => {
    setPass(location.state.passwords);
  }, []);

  return (
    <div>
      <div
        style={{
          backgroundColor: "black",
          height: 840,
        }}
      >
        <br />
        <img src={logo} height={"30%"} width={"30%"} />
        <br />
        <br />
        <div style={{ color: "red", fontSize: 50 }}>
          These are the unsafe passwords which you must not use
        </div>
        <TableContainer>
          <Table
            sx={{ minWidth: 650, color: "white", backgroundColor: "black" }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell
                  style={{ fontWeight: "bold", fontSize: "50", color: "white" }}
                >
                  Index
                </TableCell>
                <TableCell
                  style={{ fontWeight: "bold", fontSize: "50", color: "white" }}
                >
                  Passwords
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pass.map((item, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    style={{ color: "white" }}
                  >
                    {index}
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    style={{ color: "white" }}
                  >
                    {item}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default UnsecurePassList;
