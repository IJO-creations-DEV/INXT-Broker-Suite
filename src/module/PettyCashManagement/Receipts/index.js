import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Inputfield from "../../../components/Inputfield";
import SelectOptionComponent from "../../../components/SelectOption";
import style from "../style.module.css";
import Button from "@mui/material/Button";
import ReceiptsTable from "../ReceiptsTable";

const Receipts = () => {
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
        <Grid xs={12} sm={6} md={3}>
          <Typography
            sx={{ fontSize: "16px", color: "black", fontWeight: "400" }}
            gutterBottom
          >
            Branch Code
          </Typography>
          <SelectOptionComponent />
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <Typography
            sx={{ fontSize: "16px", color: "black", fontWeight: "400" }}
            gutterBottom
          >
            Department Code
          </Typography>
          <SelectOptionComponent />
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <Typography
            sx={{ fontSize: "16px", color: "black", fontWeight: "400" }}
            gutterBottom
          >
            Petty cash Number
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
        <Grid xs={12} sm={6} md={2}>
          <Typography
            sx={{ fontSize: "16px", color: "black", fontWeight: "400" }}
            gutterBottom
          >
            Bank Main A/c
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
        <Grid xs={12} sm={6} md={2}>
          <Typography
            sx={{ fontSize: "16px", color: "black", fontWeight: "400" }}
            gutterBottom
          >
            Bank Sub A/c
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
            Requester
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
        <Grid xs={12} sm={8} md={9}>
        <ReceiptsTable/>
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
            Disbursed Amount
          </Typography>
          <Inputfield />
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <Typography
            sx={{ fontSize: "16px", color: "black", fontWeight: "400" }}
            gutterBottom
          >
            Balance Amount
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
              Submit
            </Button>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Receipts;
