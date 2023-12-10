import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { data } from "./mock";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Styless from "./style.module.css";
import SearchIcon from "@mui/icons-material/Search";
import SvgArrow from "../../../assets/icons/SvgArrow";


export default function DataTable() {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));



  const columns = [
    { field: "branchCode", headerName: "Branch Code", width: 130 },
    { field: "departmentCode", headerName: "Department Code", width: 130 },
    { field: "receiptNo", headerName: "Receipt No", width: 130 },
    { field: "receiptDate", headerName: "Receipt Date", width: 130 },
    { field: "paymentType", headerName: "Payment type", width: 130 },
    { field: "amount", headerName: "Amount", width: 130 },

    {
      field: "action",
      headerName: "Action",
      width: 100,
      renderCell: (params) => (
        <SvgArrow
          color="primary"
          onClick={() => handleEditClick(params.row.id)}
        ></SvgArrow>
      ),
    },
  ];

  const handleEditClick = (id) => {
    console.log(`Edit clicked for row with ID ${id}`);
  };

  return (
    <div>
      <Search>
        <SearchIconWrapper>
          <SearchIcon style={{ marginBottom: 20 }} />
        </SearchIconWrapper>
        <StyledInputBase
          className={Styless.search}
          placeholder="Search customers"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>

      <DataGrid style={{
        margin: 20
      }}
        className={Styless.columnHeaderTitles}
        rows={data}
        columns={columns}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
