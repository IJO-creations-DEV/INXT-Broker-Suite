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
import SvgView from "../../../assets/icons/SvgView";

function createData(
  id,
  TransCode,
  RequestNo,
  RequestDate,
  Narration,
  Amount,
  Remarks,
  Edit
) {
  return {
    id,
    TransCode,
    RequestNo,
    RequestDate,
    Narration,
    Amount,
    Remarks,
    Edit,
  };
}

const rows = [
  createData(1, 305, 2828,"10/10/2023", "Expenses", 1000.0, "Remarks"),
  createData(2, 452, 2828, "10/10/2023", "Expenses", 500.0, "Remarks"),
  createData(3, 262, 2828, "10/10/2023", "Expenses", 1200.0, "Remarks"),
];

const headCells = [
  {
    id: "TransCode",
    numeric: true,
    disablePadding: false,
    label: "Trans Code",
  },
  {
    id: "RequestNo",
    numeric: true,
    disablePadding: false,
    label: "Request No",
  },
  {
    id: "RequestDate",
    numeric: true,
    disablePadding: false,
    label: "Request Date",
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
    id: "Remarks",
    numeric: false,
    disablePadding: false,
    label: "Remarks",
  },
  {
    id: "Edit",
    numeric: false,
    disablePadding: false,
    label: "Edit",
  },
];

export default function ReceiptsTable() {
  const [selected, setSelected] = React.useState([]);
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
                    <TableCell align="right">{row.TransCode}</TableCell>
                    <TableCell align="right">{row.RequestNo}</TableCell>
                    <TableCell align="right">{row.RequestDate}</TableCell>
                    <TableCell align="right">{row.Narration}</TableCell>
                    <TableCell>{row.Amount}</TableCell>
                    <TableCell>{row.Remarks}</TableCell>
                    <TableCell>
                      <IconButton
                        aria-label="edit"
                        onClick={(event) => {
                          console.log("Clicked Edit!");
                        }}
                      >
                        <SvgView />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
