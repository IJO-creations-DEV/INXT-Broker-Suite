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
// import { useDemoData } from '@mui/x-data-grid-generator';
import Modal from '@mui/material/Modal';
import Approvel from '../../../assets/icons/SvgApprove'
import { useNavigate } from 'react-router-dom';
// import DatePicker from '@mui/x-date-pickers';

const Index = () => {
    const [selectedRows, setSelectedRows] = useState([]);



const navigate = useNavigate();
 
  const handleNavigation = () => {
   
    navigate('/voucherbankdetails');
  };
    // const styles = {
    //   position: 'absolute',
    //   top: '50%',
    //   left: '50%',
    //   transform: 'translate(-50%, -50%)',
    //   width: 400,
    //   bgcolor: 'background.paper',
    //   // border: '2px solid #000',
    //   boxShadow: 24,
    //   pl: 4,
    //   pr:4,
    //   pt:4,
    //   display:'grid',
    //   // justifycontent:'center',
    //   // alignitem:'center',
    //   // textAlign: 'center',
    //  borderRadius:4
      
    // };


    const styles = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "60%",
      height: "100%",
      bgcolor: "background.paper",
      boxShadow: 24,
      p: 1,
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleEditButtonClick = () => {
        // Implement your logic for the "Back" button click here
      };
    const columns = [
        { field: 'id', headerName: 'Trans.code' , editable: true,width: 100},
        { field: 'firstName', headerName: 'Document No',width: 110 },
        { field: 'lastName', headerName: 'O/s Amount',width: 110 },
        { field: 'age', headerName: 'Payment Adjusted FC Amount', type: 'number',width: 110 },
        { field: 'fullName', headerName: 'Payment Adjusted LC Amount',width: 110, description: 'This column has a value getter and is not sortable.', sortable: false, valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}` },
        { field: 'column6', headerName: 'Advance Adjusted Amount',width: 110  },
        { field: 'column7', headerName: 'Balance Adjusted Amount',width: 110  },
        { field: 'column8', headerName: 'VAT%', width: 100 },
        { field: 'column9', headerName: 'WHT%', width: 100 },
        { field: 'column10', headerName: 'Exp Amount', width: 100 },
        
      ];
      const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age:'Value 6-1',column6: 'Value 6-1', column7: 'Value 7-1', column8: 'Value 8-1', column9: 'Value 9-1', column10: 'Value 10-1' },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 'Value 6-1',column6: 'Value 6-1', column7: 'Value 7-1', column8: 'Value 8-1', column9: 'Value 9-1', column10: 'Value 10-1'},
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age:'Value 6-1',column6: 'Value 6-1', column7: 'Value 7-1', column8: 'Value 8-1', column9: 'Value 9-1', column10: 'Value 10-1' },
        // { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16,column6: 'Value 6-1', column7: 'Value 7-1', column8: 'Value 8-1', column9: 'Value 9-1', column10: 'Value 10-1' },
        // { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null ,column6: 'Value 6-1', column7: 'Value 7-1', column8: 'Value 8-1', column9: 'Value 9-1', column10: 'Value 10-1'},
        // { id: 6, lastName: 'Melisandre', firstName: null, age: 150 ,column6: 'Value 6-1', column7: 'Value 7-1', column8: 'Value 8-1', column9: 'Value 9-1', column10: 'Value 10-1'},
        // { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 ,column6: 'Value 6-1', column7: 'Value 7-1', column8: 'Value 8-1', column9: 'Value 9-1', column10: 'Value 10-1'},
        // { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 ,column6: 'Value 6-1', column7: 'Value 7-1', column8: 'Value 8-1', column9: 'Value 9-1', column10: 'Value 10-1'},
        // { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 , column6: 'Value 6-1', column7: 'Value 7-1', column8: 'Value 8-1', column9: 'Value 9-1', column10: 'Value 10-1' },
      ];

      const [selectionModel, setSelectionModel] = React.useState([]);

      // const handleSelectionModelChange = (newSelectionModel) => {
      //   setSelectionModel(newSelectionModel);
      //   // You can now use the selected rows in 'newSelectionModel'
      //   console.log('Selected Rows:', newSelectionModel);
      // };



      // const handleCheckboxChange = (id) => {
      //   const selectedIndex = selectionModel.indexOf(id);
      //   let newSelectionModel = [];
    
      //   if (selectedIndex === -1) {
      //     newSelectionModel = newSelectionModel.concat(selectionModel, id);
      //   } else if (selectedIndex === 0) {
      //     newSelectionModel = newSelectionModel.concat(selectionModel.slice(1));
      //   } else if (selectedIndex === selectionModel.length - 1) {
      //     newSelectionModel = newSelectionModel.concat(selectionModel.slice(0, -1));
      //   } else if (selectedIndex > 0) {
      //     newSelectionModel = newSelectionModel.concat(
      //       selectionModel.slice(0, selectedIndex),
      //       selectionModel.slice(selectedIndex + 1)
      //     );
      //   }
      //   console.log('Selected Rows:',newSelectionModel);
      // }
     
      // const { data } = useDemoData({
      //   dataSet: 'Commodity',
      //   rowLength: 10,
      //   maxColumns: 6,
      // });
      // console.log(data,"hello")

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
          <Textfield defaultvalue="BO12"/>
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

          {/* <DatePicker
  mask="mm"
  value={new Date()}
  onChange={console.log}
  renderInput={(props) => (
    <Textfield {...props} helperText="invalid mask" />
  )}
/> */}

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
           Criteria
          </Typography>
          <Textfield  defaultvalue="Specific"/>
        </Grid>
        
        <Grid xs={12} sm={6} md={2.4}>
          <Typography
            sx={{ fontSize: "16px", color: "black", fontWeight: "400" }}
            gutterBottom
          >
           Payee Type
          </Typography>
          <Textfield defaultvalue="Customer"/>
        </Grid>

        <Grid xs={12} sm={6} md={2.4}>
          <Typography
            sx={{ fontSize: "16px", color: "black", fontWeight: "400" }}
            gutterBottom
          >
            Customer Code
          </Typography>
          <Textfield defaultvalue="Ctm001"/>
        </Grid>

        <Grid xs={12} sm={6} md={2.4}>
          <Typography
            sx={{ fontSize: "16px", color: "black", fontWeight: "400" }}
            gutterBottom
          >
           Currency
          </Typography>
          <Textfield defaultvalue="Peso"/>
        </Grid>

        <Grid xs={12} sm={6} md={2.4}>
          <Typography
            sx={{ fontSize: "16px", color: "black", fontWeight: "400" }}
            gutterBottom
          >
            Remarks
          </Typography>
          <Textfield defaultvalue="Specific pay"/>
        </Grid>
       
      </Grid>
      
      


      
      
          <div className={style.nextinbetwenbutton}>
            <Typography className={style.headlabel} >Payment Voucher History</Typography>
            <div>
                
            <Button variant="contained"
              // onClick={handleEditButtonClick}
              //disabled={selectedRows.length === 0}
              //style={{ backgroundColor: selectedRows.length > 0 ? 'green' : 'red' }}
            startIcon={<SvgEdit/>} 
             className={style.buttonlayout} 
             onClick={handleOpen}
            >
              Edit
            </Button>

         

<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          display: "grid",
          placeItems: "center",
        }}
      >
        <div className={style.modalOuterContainerDiv}>
          <div className={style.modalTitle}>Payment Voucher details</div>
          <Grid container spacing={2}>
            <Grid className={style.modalGridColumn} item xs={4}>
              <div className={style.modalTitles}>trans. Code:</div>
            </Grid>
            <Grid className={style.modalGridColumn} item xs={8}>
              <div style={{ width: "100%" }}>
                <Textfield defaultvalue="Tran001"/>
              </div>
            </Grid>
            <Grid className={style.modalGridColumn} item xs={4}>
              <div className={style.modalTitles}>Document No :</div>
            </Grid>
            <Grid className={style.modalGridColumn} item xs={8}>
              <div style={{ width: "100%" }}>
              <Textfield defaultvalue="Doc123"/>
              </div>
            </Grid>
            <Grid className={style.modalGridColumn} item xs={4}>
              <div className={style.modalTitles}>O/s Amount:</div>
            </Grid>
            <Grid className={style.modalGridColumn} item xs={8}>
              <div style={{ width: "100%" }}>
              <Textfield defaultvalue="500.00"/>
              </div>
            </Grid>
            <Grid className={style.modalGridColumn} item xs={4}>
              <div className={style.modalTitles}>Payment Adjusted FC Amount:</div>
            </Grid>
            <Grid className={style.modalGridColumn} item xs={8}>
              <div style={{ width: "100%" }}>
              <Textfield defaultvalue="00.00"/>
              </div>
            </Grid>
            <Grid className={style.modalGridColumn} item xs={4}>
              <div className={style.modalTitles}>Advance Adjusted LC Amount :</div>
            </Grid>
            <Grid className={style.modalGridColumn} item xs={8}>
              <div style={{ width: "100%" }}>
              <Textfield defaultvalue="00.00"/>
              </div>
            </Grid>
            <Grid className={style.modalGridColumn} item xs={4}>
              <div className={style.modalTitles}>Advance Adjusted Amount :</div>
            </Grid>
            <Grid className={style.modalGridColumn} item xs={8}>
              <div style={{ width: "100%" }}>
              <Textfield defaultvalue="00.00"/>
              </div>
            </Grid>
            <Grid className={style.modalGridColumn} item xs={4}>
              <div className={style.modalTitles}>Balance Adjusted Amount  :</div>
            </Grid>
            <Grid className={style.modalGridColumn} item xs={8}>
              <div style={{ width: "100%" }}>
              <Textfield defaultvalue="00%"/>
              </div>
            </Grid>
            <Grid className={style.modalGridColumn} item xs={4}>
              <div className={style.modalTitles}>VAT  :</div>
            </Grid>
            <Grid className={style.modalGridColumn} item xs={8}>
              <div style={{ width: "100%" }}>
              <Textfield defaultvalue="00%"/>
              </div>
            </Grid>
            <Grid className={style.modalGridColumn} item xs={4}>
              <div className={style.modalTitles}>WHT  :</div>
            </Grid>
            <Grid className={style.modalGridColumn} item xs={8}>
              <div style={{ width: "100%" }}>
              <Textfield defaultvalue="00%"/>
              </div>
            </Grid>
            <Grid className={style.modalGridColumn} item xs={4}>
              <div className={style.modalTitles}>Exp Amount  :</div>
            </Grid>
            <Grid className={style.modalGridColumn} item xs={8}>
              <div style={{ width: "100%" }}>
              <Textfield defaultvalue="00.00"/>
              </div>
            </Grid>
          </Grid>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button
              style={{
                backgroundColor: "#6366F1",
                borderRadius: "154px",
                // padding: "10px 20px",
                width: "30%",
              }}
              variant="contained"
              onClick={handleClose}
            >
             Save
            </Button>
          </div>
        </div>
      </Modal>

          </div>
          </div>
        
    </Box>

    <div>
    <DataGrid
  //  className={style.datatablecontainer}
        rows={rows}
        columns={columns}
        
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        //  checkboxSelection
       
        checkboxSelection
         disableRowSelectionOnClick 
        //  {...data}

        // disableRowSelectionOnClick
        // selectionModel={selectionModel}
        // onSelectionModelChange={(newSelectionModel) => setSelectionModel(newSelectionModel)}
      />

      <Stack direction="row" spacing={2}  className={style.submitbutton}>
      <Button  variant="outlined" className={style.cancellayout}>Back</Button>
        <Button className={style.buttonlayout} onClick={handleNavigation}>Next</Button>
</Stack>
</div>

    </Box>
  </Container>
  )
}

export default Index