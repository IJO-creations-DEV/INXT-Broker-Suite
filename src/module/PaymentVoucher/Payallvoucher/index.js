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
import step1 from '.'
import SvgEdit from '../../../assets/icons/SvgEdit';
import { DataGrid } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import Modal from '@mui/material/Modal';

const Index = () => {
    const [selectedRows, setSelectedRows] = useState([]);
  const navigate = useNavigate()
    const handleEditButtonClick = () => {
      navigate("/voucherbankdetails")
      };

      const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const columns = [
        { field: 'id', headerName: 'Trans.code', width: 70 },
        { field: 'firstName', headerName: 'Document No', width: 130 },
        { field: 'lastName', headerName: 'O/s Amount', width: 130 },
        { field: 'age', headerName: 'Payment Adjusted FC Amount', type: 'number', width: 90 },
        { field: 'fullName', headerName: 'Payment Adjusted LC Amount', description: 'This column has a value getter and is not sortable.', sortable: false, width: 160, valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}` },
        { field: 'column6', headerName: 'Advance Adjusted Amount', width: 120 },
        { field: 'column7', headerName: 'Balance Adjusted Amount', width: 120 },
        { field: 'column8', headerName: 'VAT', width: 120 },
        { field: 'column9', headerName: 'WHT', width: 120 },
        { field: 'column10', headerName: 'WHT', width: 120 },
        { field: 'column11', headerName: 'WHT', width: 120 },
      ];
      const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35,column6: 'Value 6-1', column7: 'Value 7-1', column8: 'Value 8-1', column9: 'Value 9-1', column10: 'Value 10-1' },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 ,column6: 'Value 6-1', column7: 'Value 7-1', column8: 'Value 8-1', column9: 'Value 9-1', column10: 'Value 10-1'},
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45,column6: 'Value 6-1', column7: 'Value 7-1', column8: 'Value 8-1', column9: 'Value 9-1', column10: 'Value 10-1' },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16,column6: 'Value 6-1', column7: 'Value 7-1', column8: 'Value 8-1', column9: 'Value 9-1', column10: 'Value 10-1' },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null ,column6: 'Value 6-1', column7: 'Value 7-1', column8: 'Value 8-1', column9: 'Value 9-1', column10: 'Value 10-1'},
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 ,column6: 'Value 6-1', column7: 'Value 7-1', column8: 'Value 8-1', column9: 'Value 9-1', column10: 'Value 10-1'},
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 ,column6: 'Value 6-1', column7: 'Value 7-1', column8: 'Value 8-1', column9: 'Value 9-1', column10: 'Value 10-1'},
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 ,column6: 'Value 6-1', column7: 'Value 7-1', column8: 'Value 8-1', column9: 'Value 9-1', column10: 'Value 10-1'},
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 , column6: 'Value 6-1', column7: 'Value 7-1', column8: 'Value 8-1', column9: 'Value 9-1', column10: 'Value 10-1' },
      ];

      const handleCheckboxSelection = (selection) => {
        setSelectedRows(selection.selectionModel);
        console.log('Selected Rows:', selection.selectionModel);
      };
      console.log("check",selectedRows)

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
          <Textfield />
        </Grid>
        <Grid xs={12} sm={6} md={2.4}>
          <Typography
            sx={{ fontSize: "16px", color: "black", fontWeight: "400" }}
            gutterBottom
          >
            Department
          </Typography>
          <Textfield />
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
          <Textfield />
        </Grid>

        <Grid xs={12} sm={6} md={2.4}>
          <Typography
            sx={{ fontSize: "16px", color: "black", fontWeight: "400" }}
            gutterBottom
          >
           Criteria
          </Typography>
          <Textfield  />
        </Grid>
        
        <Grid xs={12} sm={6} md={2.4}>
          <Typography
            sx={{ fontSize: "16px", color: "black", fontWeight: "400" }}
            gutterBottom
          >
           Payee Type
          </Typography>
          <Textfield />
        </Grid>

        {/* <Grid xs={12} sm={6} md={2.4}>
          <Typography
            sx={{ fontSize: "16px", color: "black", fontWeight: "400" }}
            gutterBottom
          >
            Customer Code
          </Typography>
          <Textfield />
        </Grid> */}

        <Grid xs={12} sm={6} md={2.4}>
          <Typography
            sx={{ fontSize: "16px", color: "black", fontWeight: "400" }}
            gutterBottom
          >
           Currency
          </Typography>
          <Textfield />
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
        
                
            <Button variant="contained"
              
              //disabled={selectedRows.length === 0}
              //style={{ backgroundColor: selectedRows.length > 0 ? 'green' : 'red' }}
            startIcon={<SvgEdit/>} 
            onClick={handleOpen}
             className={style.buttonlayout} 
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
        
    </Box>

    <div>
    <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        onSelectionModelChange={handleCheckboxSelection}
      />

      <Stack direction="row" spacing={2}  className={style.submitbutton}>
      <Button  variant="outlined" className={style.cancellayout}>Back</Button>
        <Button className={style.buttonlayout} onClick={handleEditButtonClick}>Next</Button>
</Stack>
</div>

    </Box>
  </Container>
  )
}

export default Index