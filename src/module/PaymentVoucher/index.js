<<<<<<< Updated upstream
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import style from "./style.module.css"
import TextFields from "../../components/Textfield";
import Dropdown from "../../components/Dropdown"
export default function LoginFormCard() {
  return (
    <div className={style.overallconatainer}>



      <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
        <Grid xs={12} sm={3} md={2.4}>
        <Typography
          sx={{ fontSize: '16px', color: 'black', fontWeight: '600' }}
          gutterBottom
        >
          Log in
        </Typography>
        <TextFields/>
        </Grid>
        <Grid xs={12} sm={3} md={2.4}>
        <Typography
          sx={{ fontSize: '16px', color: 'black', fontWeight: '600' }}
          gutterBottom
        >
          Log in
        </Typography>
        <TextFields/>
        </Grid>
        <Grid xs={12} sm={3} md={2.4}>
        <Typography
          sx={{ fontSize: '16px', color: 'black', fontWeight: '600' }}
          gutterBottom
        >
          Log in
        </Typography>
        <TextFields/>
        </Grid>
        <Grid xs={12} sm={3} md={2.4}>
        <Typography
          sx={{ fontSize: '16px', color: 'black', fontWeight: '600' }}
          gutterBottom
        >
          Log in
        </Typography>
        <TextFields/>
        </Grid>
        <Grid xs={12} sm={3} md={2.4}>
        <Typography
          sx={{ fontSize: '16px', color: 'black', fontWeight: '600' }}
          gutterBottom
        >
          Log in
        </Typography>
        <TextFields/>
        </Grid>
        <Grid xs={12} sm={3} md={2.4}>
        <Typography
          sx={{ fontSize: '16px', color: 'black', fontWeight: '600' }}
          gutterBottom
        >
          Log in
        </Typography>
        <TextFields/>
        </Grid>
        <Grid xs={12} sm={3} md={2.4}>
        <Typography
          sx={{ fontSize: '16px', color: 'black', fontWeight: '600' }}
          gutterBottom
        >
          Log in
        </Typography>
        <TextFields/>
        </Grid>

        <Grid xs={12} sm={3} md={2.4}>
        <Typography
          sx={{ fontSize: '16px', color: 'black', fontWeight: '600' }}
          gutterBottom
        >
          Log in
        </Typography>
        {/* <TextFields/> */}
        <Dropdown/>
        </Grid>
        <Grid xs={12} sm={3} md={2.4}>
        <Typography
          sx={{ fontSize: '16px', color: 'black', fontWeight: '600' }}
          gutterBottom
        >
          Log in
        </Typography>
        <TextFields/>
        </Grid>
       
      </Grid>
    </Box>

=======
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { data } from "./mock";
import Card from "@mui/material/Card";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SvgAdd from "../../assets/icons/SvgAdd";
import SvgFilters from "../../assets/icons/SvgFilters";
import Styless from "./style.module.css";
import SearchIcon from "@mui/icons-material/Search";
import SvgArrow from "../../assets/icons/SvgArrow";
import SvgDot from "../../assets/icons/SvgDot";
import Breadcrumb from './Breadcrumbs'
import { useNavigate } from 'react-router-dom';



export default function DataTable() {

  const navigate = useNavigate();

  const handleNavigation = () => {
   
    navigate('/createvoucher');
  };


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
    { field: "branchCode", headerName: "Branch Code", width: 140 },
    { field: "department", headerName: "Department", width: 140 },
    { field: "documentDate", headerName: "Document Date", width: 140 },
    { field: "documentNo", headerName: "Document No", width: 140 },
    { field: "customerCode", headerName: "Customer Code", width: 140 },
    { field: "instrumentNo", headerName: "Instrument No", width: 140 },
    {
      field: "instrumentStatus",
      headerName: "Instrument Status",
      width: 140,
      renderCell: (params) => (
        <span style={{ color: params.value === "Pending" ? "red" : "green" }}>
          {params.value}
        </span>
      ),
    },
    { field: "amount", headerName: "Amount", width: 130 },
    {
      field: "action",
      headerName: "Action",
      width: 140,
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
  // const handlecreate=()=>{
  //   Navigation.Navigate('/createvoucher')
  // }

  return (
    <div className={Styless.voucherstyle}>
      <div className={Styless.vouchertitle}>Payment Voucher</div>
      <div className={Styless.icon}>
        <div className={Styless.svgicondiv}>
          <SvgFilters className={Styless.filter} />
        </div>
        <div className={Styless.create} onClick={handleNavigation}>
          <SvgAdd className={Styless.createicon} />
          <p className={Styless.createtext}>Create Voucher</p>
        </div>
      </div>
      <Breadcrumb/>
      <Card sx={{ minWidth: 275 }}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            className={Styless.search}
            placeholder="Search customers"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
>>>>>>> Stashed changes

    </div>
  );
}