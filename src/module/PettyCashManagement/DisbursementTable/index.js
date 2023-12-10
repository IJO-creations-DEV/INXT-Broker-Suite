import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import SvgEdit from "../../../assets/icons/SvgEditIcon";
import BasicModal from "../DisbursementModule";
import { useState } from "react";

function createData(
  id,
  RequestNumber,
  RequestDate,
  RequestBy,
  Narration,
  Amount,
  Edit
) {
  return {
    id,
    RequestNumber,
    RequestDate,
    RequestBy,
    Narration,
    Amount,
    Edit,
  };
}

const rows = [
  createData(1, 305, "10/10/2023", "Leo", "Expenses", 1000.0, "Extra Data 2"),
  createData(2, 452, "10/10/2023", "Lucifer", "Expenses", 500.0, "More Data 2"),
  createData(3, 262, "10/10/2023", "Loki", "Expenses", 1200.0, "Additional 2"),
];

const headCells = [
  {
    id: "RequestNumber",
    numeric: true,
    disablePadding: false,
    label: "Request Number",
  },
  {
    id: "RequestDate",
    numeric: true,
    disablePadding: false,
    label: "Request Date",
  },
  {
    id: "RequestBy",
    numeric: true,
    disablePadding: false,
    label: "Request By",
  },
  {
    id: "Narration",
    numeric: true,
    disablePadding: false,
    label: "Narration",
  },
  {
    id: "Amount",
    numeric: false,
    disablePadding: false,
    label: "Amount",
  },
  {
    id: "Edit",
    numeric: false,
    disablePadding: false,
    label: "Edit",
  },
];

export default function DisbursementTable() {
  const [selected, setSelected] = React.useState([]);
const [open, setOpen] = useState(false)
  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    inputProps={{
                      "aria-label": "select all desserts",
                    }}
                  />
                </TableCell>
                {headCells.map((headCell) => (
                  <TableCell
                    key={headCell.id}
                    align={headCell.numeric ? "right" : "left"}
                    padding={headCell.disablePadding ? "none" : "normal"}
                  >
                    {headCell.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${row.id}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          "aria-labelledby": labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell align="right">{row.RequestNumber}</TableCell>
                    <TableCell align="right">{row.RequestDate}</TableCell>
                    <TableCell align="right">{row.RequestBy}</TableCell>
                    <TableCell align="right">{row.Narration}</TableCell>
                    <TableCell>{row.Amount}</TableCell>
                    <TableCell>
                      <IconButton
                        aria-label="edit"
                        onClick={(event) => {
                            setOpen(true)
                          console.log("Clicked Edit!");
                        }}
                      >
                        <SvgEdit />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <BasicModal open={open} setOpen={setOpen}/>
    </Box>
  );
}
