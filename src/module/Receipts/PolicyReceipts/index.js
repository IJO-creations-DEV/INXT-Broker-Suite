import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { data } from "./mock";
import Card from "@mui/material/Card";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { styled, alpha } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import InputBase from "@mui/material/InputBase";
import Tab from "@mui/material/Tab";
import SvgAdd from "../../../Assets/Icons/SvgAdd";
import SvgFilter from "../../../Assets/Icons/SvgFilter";
import Styless from "./style.module.css";
import SearchIcon from "@mui/icons-material/Search";

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

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const columns = [
    { field: "customerName", headerName: "Customer Name", width: 130 },
    { field: "branchCode", headerName: "Branch Code", width: 130 },
    { field: "departmentCode", headerName: "Department Code", width: 130 },
    { field: "receiptNo", headerName: "Receipt No", width: 130 },
    { field: "receiptDate", headerName: "Receipt Date", width: 130 },
    { field: "paymentType", headerName: "Payment type", width: 130 },
    { field: "eWT", headerName: "EWT", width: 130 },
    { field: "amount", headerName: "Amount", width: 130 },
    { field: "view", headerName: "View", width: 130 },
  ];

  return (
    <div className={Styless.mainstyle}>
      <div className={Styless.title}>Receipts</div>
      <div className={Styless.icon}>
        <div className={Styless.svgicondiv}>
          <SvgFilter className={Styless.filter} />
        </div>
        <div className={Styless.add}>
          <SvgAdd />
          <p className={Styless.addtext}>Add</p>
        </div>
      </div>
      <Breadcrumbs aria-label="breadcrumb" className={Styless.breadcrumbss}>
        <Link
          underline="hover"
          href="/"
          color="#000000"
          fontSize={"16px"}
          fontWeight={"500"}
        >
          Dashboard
        </Link>
        <Link
          underline="hover"
          color="#000000"
          fontSize={"16px"}
          fontWeight={"500"}
          href="/material-ui/getting-started/installation/"
        >
          Accounts
        </Link>
        <Link
          underline="hover"
          color="#000000"
          fontSize={"16px"}
          fontWeight={"500"}
          href="/material-ui/react-breadcrumbs/"
          aria-current="page"
        >
          Receipts
        </Link>
      </Breadcrumbs>
      <Card sx={{ minWidth: 275 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          // className={Styless.tabs}
          sx={{ marginBottom: "30px", color: "#6366F1" }}
        >
          <Tab
            label="Policy Receipt"
            // className={Styless.policytext}
            sx={{ fontSize: "16px", fontWeight: 500 }}
          />
          <Tab
            label="Other Receipt"
            sx={{ fontSize: "16px", fontWeight: 500 }}
          />
        </Tabs>

        <Search>
          <SearchIconWrapper>
            <SearchIcon style={{ marginBottom: "20px" }} />
          </SearchIconWrapper>
          <StyledInputBase
            className={Styless.search}
            placeholder="Search customers"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <DataGrid
          className={Styless.columnHeaderTitles}
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </Card>
    </div>
  );
}
