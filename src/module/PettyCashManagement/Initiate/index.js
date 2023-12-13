import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Inputfield from "../../../components/Inputfield";
import SelectOptionComponent from "../../../components/SelectOption";
import style from "../style.module.css";
import Button from "@mui/material/Button";
<<<<<<< Updated upstream
=======
import { useState } from "react";
import InitiateModal from "../InitiateModal/index";
// import DropDown from "../../../components/Dropdown"

import SelectComponent from "../../../components/Dropdown";
>>>>>>> Stashed changes

const Initiate = () => {
  return (
    <Box>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ marginTop: 2 }}
      >
        <Grid xs={12} sm={6} md={3}>
          <Typography
            sx={{ fontSize: "16px", color: "black", fontWeight: "400" }}
            gutterBottom
          >
            Date
          </Typography>
          <Inputfield />
        </Grid>
        <Grid xs={12} sm={6} md={2}>
          <Typography
            sx={{ fontSize: "16px", color: "black", fontWeight: "400" }}
            gutterBottom
          >
            Petty Cash Code
          </Typography>
          <SelectOptionComponent />
        </Grid>
        <Grid
          xs={12}
          sm={6}
          md={4}
          style={{
            display: "grid",
            justifyContent: "normal",
            alignItems: "end",
          }}
        >
          <Inputfield />
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <Typography
            sx={{ fontSize: "16px", color: "black", fontWeight: "400" }}
            gutterBottom
          >
            Division Code
          </Typography>
          <SelectOptionComponent />
        </Grid>
      </Grid>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ marginTop: 2 }}
      >
        <Grid xs={12} sm={6} md={3}>
          <Typography
            sx={{ fontSize: "16px", color: "black", fontWeight: "400" }}
            gutterBottom
          >
            Department Code
          </Typography>
          <Inputfield />
        </Grid>
        <Grid xs={12} sm={6} md={2}>
          <Typography
            sx={{ fontSize: "16px", color: "black", fontWeight: "400" }}
            gutterBottom
          >
            Currency
          </Typography>
          <SelectOptionComponent />
        </Grid>
        <Grid
          xs={12}
          sm={6}
          md={4}
          style={{
            display: "grid",
            justifyContent: "normal",
            alignItems: "end",
          }}
        >
          <Inputfield />
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <Typography
            sx={{ fontSize: "16px", color: "black", fontWeight: "400" }}
            gutterBottom
          >
            Bank A/c
          </Typography>
          <SelectOptionComponent />
        </Grid>
      </Grid>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ marginTop: 2 }}
      >
        <Grid xs={12} sm={6} md={3}>
          <Typography
            sx={{ fontSize: "16px", color: "black", fontWeight: "400" }}
            gutterBottom
          >
            Sub A/c
          </Typography>
          <SelectOptionComponent />
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <Typography
            sx={{ fontSize: "16px", color: "black", fontWeight: "400" }}
            gutterBottom
          >
            Petty Cash Size
          </Typography>
          <Inputfield />
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <Typography
            sx={{ fontSize: "16px", color: "black", fontWeight: "400" }}
            gutterBottom
          >
            Minimum Cash Box
          </Typography>
          <Inputfield />
        </Grid>
      </Grid>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ marginTop: 2 }}
      >
        <Grid xs={12} sm={6} md={3}>
          <Typography
            sx={{ fontSize: "16px", color: "black", fontWeight: "400" }}
            gutterBottom
          >
            Available Cash
          </Typography>
          <Inputfield />
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <Typography
            sx={{ fontSize: "16px", color: "black", fontWeight: "400" }}
            gutterBottom
          >
            Transaction Limit
          </Typography>
          <Inputfield />
        </Grid>
      </Grid>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ marginTop: 2 }}
      >
        <Grid
          xs={12}
          sm={12}
          md={12}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <div className={style.submitbutton}>
            <Button variant="contained" className={style.buttonlayout}>
              Approve
            </Button>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Initiate;
