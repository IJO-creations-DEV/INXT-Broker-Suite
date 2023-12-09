import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Unstable_Grid2";
import Textfield from "../../../components/Textfield";
import SvgClose from "../../../assets/Icons/SvgClose";
import IconButton from "@mui/material/IconButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 5,
};

export default function ReplenishViewModal({ open, setOpen }) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ marginBottom: 1 }}
          >
            <Grid
              xs={8.5}
              sm={8.5}
              md={8.5}
              style={{
                display: "grid",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              <Typography id="modal-modal-title" variant="h6" component="h2">
            Transaction Details
              </Typography>
            </Grid>
            <Grid
              xs={3.5}
              sm={3.5}
              md={3.5}
              style={{
                display: "grid",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
             <IconButton
                aria-label="edit"
                onClick={(event) => {
                  setOpen(false);
                  console.log("Clicked Edit!");
                }}
              >
                <SvgClose />
              </IconButton>
            </Grid>
          </Grid>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ marginTop: 2 }}
          >
            <Grid xs={12} sm={6} md={6}>
              <Textfield />
            </Grid>
            <Grid xs={12} sm={6} md={6}>
              <Textfield />
            </Grid>
          </Grid>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ marginTop: 2 }}
          >
            <Grid xs={12} sm={6} md={6}>
              <Textfield />
            </Grid>
            <Grid xs={12} sm={6} md={6}>
              <Textfield />
            </Grid>
          </Grid>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 0, sm: 0, md: 0 }}
            sx={{ marginTop: 2 }}
          >
            <Grid xs={12} sm={3} md={3}>
              <Textfield />
            </Grid>
            <Grid xs={12} sm={9} md={9}>
              <Textfield />
            </Grid>
          </Grid>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 0, sm: 0, md: 0 }}
            sx={{ marginTop: 2 }}
          >
            <Grid xs={12} sm={3} md={3}>
              <Textfield />
            </Grid>
            <Grid xs={12} sm={9} md={9}>
              <Textfield />
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
