import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Breadcrumb from "./Breadcrumbs";
import SwitchTabs from "./SwitchTabs";

const index = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ height: "100%" }}>
        <Typography sx={{ fontSize: "30px", color: "black", fontWeight: "600" }} marginBottom={'0.6rem'}>
        Petty Cash Management
        </Typography>
        <Breadcrumb/>
        <SwitchTabs/>
      </Box>
    </Container>
  );
};

export default index;
