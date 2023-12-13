<<<<<<< Updated upstream
import React from 'react'

const index = () => {
  return (
    <div>index</div>
=======
import React,{ useState } from 'react'
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Unstable_Grid2';
import Textfield from "../../../components/Textfield"
import style from "../style.module.css"
import Button from "@mui/material/Button";
import Breadcrumb from '../Breadcrumbs'
import Dropdown from '../../../components/Dropdown';
//import VoucherHistory from '../VoucherHistory'
import step1 from '../Payallvoucher'
import SvgEdit from '../../../assets/icons/SvgEdit';
import { DataGrid } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import Approvel from '../../../assets/icons/SvgApprove'
import { display } from '@mui/system';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';

const styles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display:'grid',
  // justifycontent:'center',
  // alignitem:'center',
  textAlign: 'center',
 borderRadius:4
  
};

// const customTheme = (outerTheme) =>
//   createTheme({
//     palette: {
//       mode: outerTheme.palette.mode,
//     },
//     components: {
//       MuiDataGrid: {
//         styleOverrides: {
//           root: {
//             // '--TextField-brandBorderColor': '#E0E3E7',
//             // '--TextField-brandBorderHoverColor': '#B2BAC2',
//             // '--TextField-brandBorderFocusedColor': '#6F7E8C',
//             // '& label.Mui-focused': {
//               color: 'red',
//               width:'100%',
//               bordercolor: 'red'
//             // },
//           },
//         },
//       },
// //       MuiOutlinedInput: {
// //         styleOverrides: {
// //           notchedOutline: {
// //             borderColor: 'var(--TextField-brandBorderColor)',
// //             borderRadius:10,
// // height:52
// //           },
// //           root: {
// //             [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
// //               borderColor: 'var(--TextField-brandBorderHoverColor)',
// //               borderRadius:10

// //             },
// //             [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
// //               borderColor: 'var(--TextField-brandBorderFocusedColor)',
// //               borderRadius:10

// //             },
// //           },
// //         },
// //       },
//       // MuiFilledInput: {
//       //   styleOverrides: {
//       //     root: {
//       //       '&:before, &:after': {
//       //         borderBottom: '2px solid var(--TextField-brandBorderColor)',
//       //         borderRadius:10

//       //       },
//       //       '&:hover:not(.Mui-disabled, .Mui-error):before': {
//       //         borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
//       //         borderRadius:10

//       //       },
//       //       '&.Mui-focused:after': {
//       //         borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
//       //         borderRadius:10

//       //       },
//       //     },
//       //   },
//       // },
//       // MuiInput: {
//       //   styleOverrides: {
//       //     root: {
//       //       '&:before': {
//       //         borderBottom: '2px solid var(--TextField-brandBorderColor)',
//       //         borderRadius:10

//       //       },
//       //       '&:hover:not(.Mui-disabled, .Mui-error):before': {
//       //         borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
//       //         borderRadius:10

//       //       },
//       //       '&.Mui-focused:after': {
//       //         borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
//       //       },
//       //     },
//       //   },
//       // },
//     },
//   });



const Index = ({disabled}) => {

  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);


  const [openFirstModal, setOpenFirstModal] = useState(false);
  const [openSecondModal, setOpenSecondModal] = useState(false);

  // Function to handle opening and closing the first modal
  const handleOpenFirstModal = () => {
    setOpenFirstModal(true);
  };

  const handleCloseFirstModal = () => {
    setOpenFirstModal(false);
  };

  // Function to handle opening and closing the second modal
  const handleOpenSecondModal = () => {
    setOpenSecondModal(true);
  };

  const handleCloseSecondModal = () => {
    setOpenSecondModal(false);
  };



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
      // newSelected = newSelected.concat(
      //   selected.slice(0, selectedIndex),
      //   selected.slice(selectedIndex + 1)
      // );
      newSelected=id
    }
    setSelected(newSelected);
  };

  console.log(selected,'hlo')

    


  const columns = [
    { field: 'id', headerName: 'Main A/c',  },
    { field: 'firstName', headerName: 'Cheque Book ID', width:130    },
    { field: 'lastName', headerName: 'Cheque No',   },
    { field: 'age', headerName: 'Date',     },
    { field: 'fullName', headerName: 'Original Amount', width:120 ,description: 'This column has a value getter and is not sortable.', sortable: false, width: 160, valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}` },
    { field: 'column6', headerName: 'Expense Amount',width:130 },
    { field: 'column7', headerName: 'Discount Amount',width:130   },
    { field: 'column8', headerName: 'Total Amount', width:130 },
    { field: 'column9', headerName: 'Status', width:120  },
    
  ];
  const row = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35,column6: 'Value 6-1', column7: 'Value 7-1', column8: 'Value 8-1', column9: 'Approved', column10: 'Approved' },
    { id: 2, lastName: 'Snow', firstName: 'Jon', age: 35,column6: 'Value 6-1', column7: 'Value 7-1', column8: 'Value 8-1', column9: 'generated', column10: 'generated' },
  ];

  const outerTheme = useTheme();
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
          <Textfield defaultvalue="B012" />
        </Grid>
        <Grid xs={12} sm={6} md={2.4}>
          <Typography
            sx={{ fontSize: "16px", color: "black", fontWeight: "400" }}
            gutterBottom
          >
            Department
          </Typography>
          <Textfield defaultvalue="Motor"/>
        </Grid>

        <Grid xs={12} sm={6} md={2.4}>
          <Typography
            sx={{ fontSize: "16px", color: "black", fontWeight: "400" }}
            gutterBottom
          >
           Document Date
          </Typography>
          <Textfield />
        </Grid>

        <Grid xs={12} sm={6} md={2.4}>
          <Typography
            sx={{ fontSize: "16px", color: "black", fontWeight: "400",whiteSpace:'nowrap',overflow:'hidden' }}
            gutterBottom
          >
           Document Number
          </Typography>
          <Textfield defaultvalue="DOC001"/>
        </Grid>

        <Grid xs={12} sm={6} md={2.4}>
          <Typography
            sx={{ fontSize: "16px", color: "black", fontWeight: "400" }}
            gutterBottom
          >
           Customer Code
          </Typography>
          <Textfield defaultvalue="DOC001" />
        </Grid>
        
        <Grid xs={12} sm={6} md={2.4}>
          <Typography
            sx={{ fontSize: "16px", color: "black", fontWeight: "400" }}
            gutterBottom
          >
          Bank Code
          </Typography>
          <Dropdown />
        </Grid>

        <Grid xs={12} sm={6} md={2.4}>
          <Typography
            sx={{ fontSize: "16px", color: "black", fontWeight: "400" }}
            gutterBottom
          >
            Select Instrument Currency
          </Typography>
          <Dropdown />
        </Grid>

        <Grid xs={12} sm={6} md={2.4}>
          <Typography
            sx={{ fontSize: "16px", color: "black", fontWeight: "400" }}
            gutterBottom
          >
          Select Bank A/c Number
          </Typography>
          <Dropdown />
        </Grid>

        <Grid xs={12} sm={6} md={2.4}>
          <Typography
            sx={{ fontSize: "16px", color: "black", fontWeight: "400" }}
            gutterBottom
          >
           Select Payment Type
          </Typography>
          <Dropdown />
        </Grid>

        <Grid xs={12} sm={6} md={2.4}>
          <Typography
            sx={{ fontSize: "16px", color: "black", fontWeight: "400" }}
            gutterBottom
          >
          Total O/s Amount
          </Typography>
          <Textfield defaultvalue="Peso" />
        </Grid>
        <Grid xs={12} sm={6} md={2.4}>
          <Typography
            sx={{ fontSize: "16px", color: "black", fontWeight: "400" }}
            gutterBottom
          >
          Remarks
          </Typography>
          <Textfield defaultvalue="Specific pay" />
        </Grid>
       
      </Grid>
      
      


      
      
          
      <div className={style.approvedbutton}>       
            <Button variant="contained"
        
             onClick={handleOpenFirstModal}
            className={style.approvedlayout} 
            >
              Approve 
            </Button>
</div>

<DataGrid
// theme={customTheme(outerTheme)}

        rows={row}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        key={row.id}
        onCellClick={(event) => handleClick(event, row.id)}
      />

    </Box>

    <Stack direction="row" spacing={2}  className={style.submitbutton}>
      <Button  variant="outlined" className={style.cancellayout}>Back</Button>
        <Button className={style.buttonlayout} onClick={handleOpenSecondModal}>Next</Button>
</Stack>

<Modal
        open={openFirstModal}
        onClose={handleCloseFirstModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles}>
          <Typography id="modal-modal-title" variant="h6" component="h2" className={style.approvelmodel}>
          This instrument is No. 155421 Waiting for Approval
          </Typography>
          <div className={style.approvelimage}><Approvel/></div>
          
        </Box>
      </Modal>


      <Modal
        open={openSecondModal}
        onClose={handleCloseSecondModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles}>
          <p id="modal-modal-title" variant="h6" component="h2" className={style.instrumentmodel}>
          Do you want to update 
          <span>the instrument details for </span><span className={style.approveltextmodel}>Instrument No. 155421?</span>
          </p>
          <Stack direction="row" spacing={2}  className={style.detailsbutton}>
      <Button  variant="outlined" className={style.cancellayout} onClick={handleCloseSecondModal}>No</Button>
        <Button className={style.buttonlayout} onClick={handleCloseSecondModal}>Yes</Button>
</Stack>
          
        </Box>
      </Modal>

      </Box>
      </Container>
>>>>>>> Stashed changes
  )
}

export default index