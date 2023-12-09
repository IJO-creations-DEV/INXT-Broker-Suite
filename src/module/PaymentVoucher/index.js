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


    </div>
  );
}