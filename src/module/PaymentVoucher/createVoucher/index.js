<<<<<<< Updated upstream
import React from 'react'

const index = () => {
  return (
    <div>index</div>
=======
import React, {useState} from 'react'
import Box from "@mui/material/Box";
import dayjs from 'dayjs';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Unstable_Grid2';
import Textfield from "../../../components/Textfield"
import style from "../style.module.css"
import Button from "@mui/material/Button";
import Breadcrumb from '../Breadcrumbs'
import Dropdown from '../../../components/Dropdown';
//import VoucherHistory from '../VoucherHistory'
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { useNavigate } from 'react-router-dom';
// import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

const Index = () => {

  const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#E0E3E7",
            "--TextField-brandBorderHoverColor": "#B2BAC2",
            "--TextField-brandBorderFocusedColor": "#6F7E8C",
            "& label.Mui-focused": {
              color: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderRadius: 10,
            height: 60,
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderHoverColor)",
              borderRadius: 10,
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderFocusedColor)",
              borderRadius: 10,
            },
          },
        },
      },
    },
  });


const outerTheme = useTheme();


  const navigate = useNavigate();

const [select,setSelect] = React.useState("")

  const handleNavigation = () => {
    if (select === "specific") {
      navigate("/SpecificVoucher");
    } else if (select === "payall") {
      navigate("/payallvoucher");
    }
  };

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    console.log(event, "event==>");
    setSelect(selectedValue);
  };


  // const handleNavigation = () => {
   
  //   navigate('/SpecificVoucher');
  // };

  return (
    <Container maxWidth="lg">
    <Box sx={{ height: "100%" }}>
      <Typography sx={{ fontSize: "30px", color: "black", fontWeight: "600" }} marginBottom={'0.6rem'}>
      Payment Voucher
      </Typography>
      <Breadcrumb/>


    <Box>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ marginTop: 2 }}
      >
        <Grid xs={12} sm={6} md={2.4}>
          <Typography
            sx={{ fontSize: "16px", color: "black", fontWeight: "400" }}
            gutterBottom
          >
            Branch
          </Typography>
          <Dropdown />
        </Grid>
        <Grid xs={12} sm={6} md={2.4}>
          <Typography
            sx={{ fontSize: "16px", color: "black", fontWeight: "400" }}
            gutterBottom
          >
            Department
          </Typography>
          <Textfield  />
        </Grid>

        <Grid xs={12} sm={6} md={2.4}>
          <Typography
            sx={{ fontSize: "16px", color: "black", fontWeight: "400" }}
            gutterBottom
          >
           Document Date
          </Typography>
          <Dropdown />
          {/* <MobileDatePicker defaultValue={dayjs('2022-04-17')} /> */}
        </Grid>

        <Grid xs={12} sm={6} md={2.4}>
          <Typography
            sx={{ fontSize: "16px", color: "black", fontWeight: "400",whiteSpace:'nowrap',overflow:'hidden' }}
            gutterBottom
          >
           Document Number
          </Typography>
          <Dropdown />
        </Grid>

        <Grid xs={12} sm={6} md={2.4}>
          <Typography
            sx={{ fontSize: "16px", color: "black", fontWeight: "400" }}
            gutterBottom
          >
           Criteria
          </Typography>
          {/* <Dropdown  /> */}


          <Box
                sx={{
                  display: "grid",

                  gap: 2,
                }}
              >
                <ThemeProvider theme={customTheme(outerTheme)}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Select
                    </InputLabel>
                    <Select
                      value={select}
                      label="Select"
                      onChange={handleChange}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                    >
                      <MenuItem value="specific">
                      Specific
                      </MenuItem>
                      <MenuItem value="payall">Pay All</MenuItem>
                    </Select>
                  </FormControl>
                </ThemeProvider>
              </Box>


        </Grid>
        
        <Grid xs={12} sm={6} md={2.4}>
          <Typography
            sx={{ fontSize: "16px", color: "black", fontWeight: "400" }}
            gutterBottom
          >
           Payee Type
          </Typography>
          <Dropdown />
        </Grid>

        <Grid xs={12} sm={6} md={2.4}>
          <Typography
            sx={{ fontSize: "16px", color: "black", fontWeight: "400" }}
            gutterBottom
          >
            Customer Code
          </Typography>
          <Textfield />
        </Grid>

        <Grid xs={12} sm={6} md={2.4}>
          <Typography
            sx={{ fontSize: "16px", color: "black", fontWeight: "400" }}
            gutterBottom
          >
           Currency
          </Typography>
          <Dropdown />
        </Grid>

        <Grid xs={12} sm={6} md={2.4}>
          <Typography
            sx={{ fontSize: "16px", color: "black", fontWeight: "400" }}
            gutterBottom
          >
            Remarks
          </Typography>
          <Textfield />
        </Grid>
       
      </Grid>
      
      


      
      
          <div className={style.nextbutton}>
         
            <Button variant="contained" className={style.buttonlayout} onClick={handleNavigation}>
              Next
            </Button>
          </div>
        
    </Box>
    </Box>
    </Container>
>>>>>>> Stashed changes
  )
}

export default index