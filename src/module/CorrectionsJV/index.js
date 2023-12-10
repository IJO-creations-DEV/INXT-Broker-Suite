import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
// import { DateField } from '@mui/x-date-pickers/DateField';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import styles from "./styles.module.css";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import SuccessIcon from "../../assets/Icons/SuccessIcon"
import SelectOptionComponent from '../../components/SelectOption';
import Inputfield from '../../components/Inputfield';
import CalendarField from '../../components/DateComponent';
import { DataGrid } from '@mui/x-data-grid';
import { TextField } from '@mui/material';



const createData = (name, calories, fat, carbs, protein) => {
  return { name, calories, fat, carbs, protein };
};

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
// ];
const columns = [
  { field: 'mainAccount1', headerName: 'Main A/c 1', flex: 1 },
  { field: 'subAccount1', headerName: 'Sub A/c 1', flex: 1 },
  { field: 'entry1', headerName: 'Entry 1', flex: 1 },
  { field: 'mainAccount2', headerName: 'Main A/c 2', flex: 1 },
  { field: 'subAccount2', headerName: 'Sub A/c 2', flex: 1 },
  { field: 'entry2', headerName: 'Entry 2', flex: 1 },
  { field: 'remarks', headerName: 'Remarks', flex: 1 },
  { field: 'amount', headerName: 'Amount', flex: 1 },
];

const rows = [
  { id: 1, mainAccount1: '', subAccount1: '', entry1: '', mainAccount2: '', subAccount2: '', entry2: '', remarks: '', amount: '' },
  { id: 2, mainAccount1: '', subAccount1: '', entry1: '', mainAccount2: '', subAccount2: '', entry2: '', remarks: '', amount: '' },

];
const CorrectionsJV = () => {
  const [age, setAge] = useState('');
  const [selectedOptions, setSelectedOptions] = useState({});
  const defaultDate = dayjs();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event, rowIndex, type) => {
    const { value } = event.target;
    setAge(event.target.value);
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [rowIndex]: {
        ...prevOptions[rowIndex],
        [type]: value,
      },
    }));
  };
  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 422,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius:5,
    textAlign:'center'
  };
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="#000"
      href="/"
      fontSize={16}
      fontWeight={500}
    // onClick={handleClick}
    >
      Dashboard
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="#000"
      href="/material-ui/getting-started/installation/"
      fontSize={16}
      fontWeight={500}
    // onClick={handleClick}
    >
      Accounts
    </Link>,
    <Typography key="3" color="#000" fontSize={16}
      fontWeight={500}>
      Payment Voucher
    </Typography>,
  ];
  return (
    <div className={styles.container__header}>
      <Grid container spacing={2}>
        <Grid item xs={12} mb={5} >
          <h1 className={styles.title}>Corrections Journal voucher</h1>
          <Breadcrumbs separator="-" aria-label="breadcrumb" >
            {breadcrumbs}
          </Breadcrumbs>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <div className={styles.headerText}>Date</div>
          <Box className={styles.box__header} mt={2}>
            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateField
                className={styles.date}
                variant="standard"
                value={defaultDate}
              />
            </LocalizationProvider> */}
            <CalendarField/>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={3}>
          <div className={styles.headerText}>Division Code</div>
          <Box className={styles.box__header} mt={2} sx={{ minWidth: 120, border: 'none' }}>
            <FormControl fullWidth>
              {/* <InputLabel className={styles.} id="demo-simple-select-label">DV001</InputLabel> */}
              {/* <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value='DV001'
                onChange={handleChange}
                variant='standard'
                defaultValue='DV001'
                style={{
                  borderBottom: 0
                }}
              >
                <MenuItem value='DV001'>DV001</MenuItem>
              </Select> */}
               <SelectOptionComponent />
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <div className={styles.headerText}>Department Code</div>
          <Box className={styles.box__header} mt={2} sx={{ minWidth: 120 }}>
           
               <SelectOptionComponent />
          
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <div className={styles.headerText}>Transaction Number</div>
          <Box className={styles.box__header} mt={2} sx={{ minWidth: 120 }}>
           
              
               <SelectOptionComponent />
           
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={2}>
          <div className={styles.headerText}>Transaction Number</div>
          <Box className={styles.box__header} mt={2} sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
            
               <SelectOptionComponent />
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <div className={styles.headerText}>Description</div>
          <Box className={styles.input__header} mt={2} >
            <FormControl fullWidth>
              {/* <TextField
                id="outlined-basic" label="Enter" variant='standard' /> */}
                <Inputfield />
            </FormControl>
          </Box>
        </Grid>
      
        <Grid item xs={12} sm={12} md={9} mb={2} mt={2}>
         
        <Box>
        <TableContainer component={Paper}>
        <Table>
          <TableHead style={{ background: 'grey' }}>
            <TableRow>
              {columns.map((column, index) => (
                <TableCell key={column.field} sx={index !== columns.length - 1 ? { padding: 0 ,textAlign:'center'} : {}}>
                  {column.headerName}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                {columns.map((column, index) => (
                  // <TableCell key={column.field} sx={index !== columns.length - 1 ? { padding: 0 } : {}}>
                  //   <SelectOptionComponent />
                  // </TableCell>
                  <TableCell key={column.field} sx={index !== columns.length - 1 ? { padding: 0 } : {}}>
                  {column.field === 'remarks' ? (
                    <Inputfield  value={row.remarks} />
                  ) : (
                    <SelectOptionComponent />
                  )}
                </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* DataGrid */}
      {/* <DataGrid
        rows={rows}
        columns={columns.map((column) => ({
          ...column,
          renderCell: (params) => (
            <SelectOptionComponent />
            // You can replace SelectOptionComponent with your own input component
          ),
        }))}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      /> */}
    </Box>

        </Grid>

        <Grid item xs={12} sm={12} md={3}>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <div className={styles.headerText}>Total Debit</div>
          <Box className={styles.input__header} mt={2} >
            <FormControl fullWidth>
              <Inputfield  />
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <div className={styles.headerText}>Total Credit</div>
          <Box className={styles.input__header} mt={2} >
            <FormControl fullWidth>
             <Inputfield/>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <div className={styles.headerText}>Net</div>
          <Box className={styles.input__header} mt={2} >
            <FormControl fullWidth>
              <Inputfield />
            </FormControl>
          </Box>
        </Grid>
        <Grid className={styles.bottom__view} item xs={12} sm={12} md={12} spacing={2} mt={5}>
          <Button onClick={handleOpen} className={styles.buttons} variant="contained">Approve</Button>
          <Button className={styles.button__print} variant="outlined">Print</Button>
        </Grid>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box  className={styles.popup__view}>
            <Typography id="modal-modal-title" variant="h6" component="h2" mb={2} >
            Transaction number XX is approved
            </Typography>
          <SuccessIcon/>
          </Box>
        </Modal>
      </Grid>
    </div>
  );
};

export default CorrectionsJV;



// import React, { useState } from 'react';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import TextField from '@mui/material/TextField';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import Breadcrumbs from '@mui/material/Breadcrumbs';
// import Link from '@mui/material/Link';
// import { DateField } from '@mui/x-date-pickers/DateField';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import dayjs from 'dayjs';
// import styles from "./styles.module.css";
// import Button from '@mui/material/Button';
// import Modal from '@mui/material/Modal';
// import SuccessIcon from "../../assets/icons/SuccessIcon"
// import SelectOptionComponent from '../../components/DropDownWidthoutBorder';
// import InputComponent from '../../components/InputFieldWithoutBorder';



// const createData = (name, calories, fat, carbs, protein) => {
//   return { name, calories, fat, carbs, protein };
// };

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
// ];
// const CorrectionsJV = () => {
//   const [age, setAge] = useState('');
//   const [selectedOptions, setSelectedOptions] = useState({});
//   const defaultDate = dayjs();
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const handleChange = (event, rowIndex, type) => {
//     const { value } = event.target;
//     setAge(event.target.value);
//     setSelectedOptions((prevOptions) => ({
//       ...prevOptions,
//       [rowIndex]: {
//         ...prevOptions[rowIndex],
//         [type]: value,
//       },
//     }));
//   };
//   function handleClick(event) {
//     event.preventDefault();
//     console.info('You clicked a breadcrumb.');
//   }
//   const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 422,
//     bgcolor: 'background.paper',
//     boxShadow: 24,
//     p: 4,
//     borderRadius:5,
//     textAlign:'center'
//   };
//   const breadcrumbs = [
//     <Link
//       underline="hover"
//       key="1"
//       color="#000"
//       href="/"
//       fontSize={16}
//       fontWeight={500}
//     // onClick={handleClick}
//     >
//       Dashboard
//     </Link>,
//     <Link
//       underline="hover"
//       key="2"
//       color="#000"
//       href="/material-ui/getting-started/installation/"
//       fontSize={16}
//       fontWeight={500}
//     // onClick={handleClick}
//     >
//       Accounts
//     </Link>,
//     <Typography key="3" color="#000" fontSize={16}
//       fontWeight={500}>
//       Payment Voucher
//     </Typography>,
//   ];
//   return (
//     <div className={styles.container__header}>
//       <Grid container spacing={2}>
//         <Grid item xs={12} mb={5} >
//           <h1 className={styles.title}>Corrections Journal voucher</h1>
//           <Breadcrumbs separator="-" aria-label="breadcrumb" >
//             {breadcrumbs}
//           </Breadcrumbs>
//         </Grid>
//         <Grid item xs={12} sm={12} md={3}>
//           <div className={styles.headerText}>Date</div>
//           <Box className={styles.box__header} mt={2}>
//             <LocalizationProvider dateAdapter={AdapterDayjs}>
//               <DateField
//                 className={styles.date}
//                 variant="standard"
//                 value={defaultDate}
//               />
//             </LocalizationProvider>
//           </Box>
//         </Grid>

//         <Grid item xs={12} sm={12} md={3}>
//           <div className={styles.headerText}>Division Code</div>
//           <Box className={styles.box__header} mt={2} sx={{ minWidth: 120, border: 'none' }}>
//             <FormControl fullWidth>
//               {/* <InputLabel className={styles.} id="demo-simple-select-label">DV001</InputLabel> */}
//               {/* <Select
//                 labelId="demo-simple-select-label"
//                 id="demo-simple-select"
//                 value='DV001'
//                 onChange={handleChange}
//                 variant='standard'
//                 defaultValue='DV001'
//                 style={{
//                   borderBottom: 0
//                 }}
//               >
//                 <MenuItem value='DV001'>DV001</MenuItem>
//               </Select> */}
//               <SelectOptionComponent/>
//             </FormControl>
//           </Box>
//         </Grid>
//         <Grid item xs={12} sm={12} md={3}>
//           <div className={styles.headerText}>Department Code</div>
//           <Box className={styles.box__header} mt={2} sx={{ minWidth: 120 }}>
//             <FormControl fullWidth>
//               {/* <InputLabel className={styles.} id="demo-simple-select-label">DV001</InputLabel> */}
//               {/* <Select
//                 labelId="demo-simple-select-label"
//                 id="demo-simple-select"
//                 value='Dep001'
//                 onChange={handleChange}
//                 variant='standard'
//                 defaultValue='Dep001'
//                 style={{
//                   borderBottom: 0
//                 }}

//               >
//                 <MenuItem value='Dep001'>Dep001</MenuItem>
//               </Select> */}
//               <SelectOptionComponent/>
//             </FormControl>
//           </Box>
//         </Grid>
//         <Grid item xs={12} sm={12} md={3}>
//           <div className={styles.headerText}>Transaction Number</div>
//           <Box className={styles.box__header} mt={2} sx={{ minWidth: 120 }}>
//             <FormControl fullWidth>
//               {/* <InputLabel className={styles.labelStyle} id="demo-simple-select-label">TRAN1200</InputLabel> */}
//               {/* <Select
//                 labelId="demo-simple-select-label"
//                 id="demo-simple-select"
//                 value={"TRAN1200"}
//                 onChange={handleChange}
//                 variant='standard'
//               >
//                 <MenuItem value={"TRAN1200"}>TRAN1200</MenuItem>
//               </Select> */}
//               <SelectOptionComponent/>
//             </FormControl>
//           </Box>
//         </Grid>
//         <Grid item xs={12} sm={12} md={2}>
//           <div className={styles.headerText}>Transaction Number</div>
//           <Box className={styles.box__header} mt={2} sx={{ minWidth: 120 }}>
//             <FormControl fullWidth>
//               {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
//               {/* <Select
//                 labelId="demo-simple-select-label"
//                 id="demo-simple-select"
//                 value={"JV"}
//                 onChange={handleChange}
//                 variant='standard'
//               >
//                 <MenuItem value={"JV"}>JV</MenuItem>

//               </Select> */}
//               <SelectOptionComponent/>
//             </FormControl>
//           </Box>
//         </Grid>
//         <Grid item xs={12} sm={12} md={4}>
//           <div className={styles.headerText}>Description</div>
//           <Box className={styles.input__header} mt={2} >
//             {/* <FormControl fullWidth>
//               <TextField
//                 id="outlined-basic" label="Enter" variant='standard' />
//             </FormControl> */}
//             <InputComponent/>
//           </Box>
//         </Grid>
//         {/* <Grid item xs={12}>
//         <TableContainer component={Paper} sx={{ overflowX: 'auto', maxWidth: '100%' }}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Main A/c</TableCell>
//                 <TableCell>Sub A/c</TableCell>
//                 <TableCell>Entry</TableCell>
//                 <TableCell>Main A/c</TableCell>
//                 <TableCell>Sub A/c</TableCell>
//                 <TableCell>Entry</TableCell>
//                 <TableCell>Remarks</TableCell>
//                 <TableCell>Amount</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {rows.map((row, rowIndex) => (
//                 <TableRow key={row.name}>
//                   <TableCell>
//                     <FormControl style={{ borderColor: 'white' }} fullWidth>
//                       <InputLabel variant='standard' style={{ borderColor: 'white' }}>Main A/c</InputLabel>
//                       <Select
//                         value={selectedOptions[rowIndex]?.mainAc || ''}
//                         onChange={(e) => handleChange(e, rowIndex, 'mainAc')}
//                         variant='standard'
//                       >
//                         <MenuItem value={10}>Ten</MenuItem>
//                         <MenuItem value={20}>Twenty</MenuItem>
//                         <MenuItem value={30}>Thirty</MenuItem>
//                       </Select>
//                     </FormControl>
//                   </TableCell>
//                   <TableCell>
//                     <FormControl fullWidth>
//                       <InputLabel>Sub A/c</InputLabel>
//                       <Select
//                         value={selectedOptions[rowIndex]?.subAc || ''}
//                         onChange={(e) => handleChange(e, rowIndex, 'subAc')}
//                         variant='standard'
//                       >
//                         <MenuItem value={10}>Ten</MenuItem>
//                         <MenuItem value={20}>Twenty</MenuItem>
//                         <MenuItem value={30}>Thirty</MenuItem>
//                       </Select>
//                     </FormControl>
//                   </TableCell>
                
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Grid> */}
//         <Grid item xs={12} sm={12} md={9} mb={2} mt={2}>
//           <TableContainer style={{ overflowX: 'auto', maxWidth: '100%', boxShadow: "none" }} component={Paper}>
//             <Table>
//               <TableHead className={styles.tabel__header}>
//                 <TableRow>
//                   <TableCell className={styles.tabel__titles}>Main A/c</TableCell>
//                   <TableCell className={styles.tabel__titles}>Sub A/c</TableCell>
//                   <TableCell className={styles.tabel__titles}>Entry</TableCell>
//                   <TableCell className={styles.tabel__titles}>Main A/c</TableCell>
//                   <TableCell className={styles.tabel__titles}>Sub A/c</TableCell>
//                   <TableCell className={styles.tabel__titles}>Entry</TableCell>
//                   <TableCell className={styles.tabel__titles}>Remarks</TableCell>
//                   <TableCell className={styles.tabel__titles}>Amount</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {rows.map((row, rowIndex) => (
//                   <TableRow key={row.name}>
//                     <TableCell className={styles.tabel__cell}>
//                       {/* <FormControl variant="standard" fullWidth> */}
//                         {/* <Select
//                           value={selectedOptions[rowIndex]?.subAc || 'MA001'}
//                           onChange={(e) => handleChange(e, rowIndex, 'subAc')}
//                           className={styles.option__view}
//                           // inputProps={{ style: { border: 'none', outline: 'none', padding: 0, margin: 0 } }}
//                           MenuProps={{ PaperProps: { style: { maxHeight: 200 } } }}
//                           spacing={0}
//                         >
//                           <MenuItem dense={true} value="MA001">MA001</MenuItem>
//                           <MenuItem dense={true} value={"Twenty"}>Twenty</MenuItem>
//                         </Select> */}
//                         <SelectOptionComponent/>
//                       {/* </FormControl> */}
//                     </TableCell>

//                     <TableCell className={styles.tabel__cell}>
//                       {/* <FormControl variant="standard" fullWidth > */}
//                         {/* <Select
//                           value={selectedOptions[rowIndex]?.subAc || 'SB03'}
//                           onChange={(e) => handleChange(e, rowIndex, 'subAc')}
//                           className={styles.option__view}
//                         // inputProps={{ style: { display: 'none' } }}
//                         >
//                           <MenuItem value={"SB03"}>SB03</MenuItem>
//                           <MenuItem dense={true} value={"Twenty"}>Twenty</MenuItem>
//                         </Select> */}
//                         <SelectOptionComponent/>
//                       {/* </FormControl> */}
//                     </TableCell>
//                     <TableCell className={styles.tabel__cell}>
//                       {/* <FormControl variant="standard" fullWidth > */}
//                         {/* <Select
//                           value={selectedOptions[rowIndex]?.subAc || 'Dr'}
//                           onChange={(e) => handleChange(e, rowIndex, 'entry')}
//                           // style={{ fontSize: '10px', border: 'none', padding: 0, margin: 0 }}
//                           className={styles.option__view}
//                         // inputProps={{ style: { display: 'none' } }}
//                         >
//                           <MenuItem value={"Dr"}>Dr</MenuItem>
//                           <MenuItem dense={true} value={"Twenty"}>h</MenuItem>
//                         </Select> */}
//                         <SelectOptionComponent/>
//                       {/* </FormControl> */}
//                     </TableCell>
//                     <TableCell className={styles.tabel__cell}>
//                       {/* <FormControl variant="standard" fullWidth > */}
//                         {/* <Select
//                           value={selectedOptions[rowIndex]?.subAc || 'Dr'}
//                           onChange={(e) => handleChange(e, rowIndex, 'entry')}
//                           className={styles.option__view}
//                         // inputProps={{ style: { display: 'none' } }}
//                         >
//                           <MenuItem value={"Dr"}>Dr</MenuItem>
//                           <MenuItem dense={true} value={"Twenty"}>h</MenuItem>
//                         </Select> */}
//                         <SelectOptionComponent/>
//                       {/* </FormControl> */}
//                     </TableCell>
//                     <TableCell className={styles.tabel__cell}>
//                       {/* <FormControl variant="standard" fullWidth > */}
//                         {/* <Select
//                           value={selectedOptions[rowIndex]?.subAc || 'Dr'}
//                           onChange={(e) => handleChange(e, rowIndex, 'entry')}
//                           className={styles.option__view}
//                         // inputProps={{ style: { display: 'none' } }}
//                         >
//                           <MenuItem value={"Dr"}>Dr</MenuItem>
//                           <MenuItem dense={true} value={"Twenty"}>h</MenuItem>
//                         </Select> */}
//                         <SelectOptionComponent/>
//                       {/* </FormControl> */}
//                     </TableCell>
//                     <TableCell className={styles.tabel__cell}>
//                       {/* <FormControl variant="standard" fullWidth > */}
//                         {/* <Select
//                           value={selectedOptions[rowIndex]?.subAc || 'Dr'}
//                           onChange={(e) => handleChange(e, rowIndex, 'entry')}
//                           className={styles.option__view}
//                         // inputProps={{ style: { display: 'none' } }}
//                         >
//                           <MenuItem value={"Dr"}>Dr</MenuItem>
//                           <MenuItem dense={true} value={"Twenty"}>h</MenuItem>
//                         </Select> */}
//                         <SelectOptionComponent/>
//                       {/* </FormControl> */}
//                     </TableCell>
//                     <TableCell className={styles.tabel__cell}>
//                       {/* <FormControl variant="standard" fullWidth > */}
//                         {/* <Select
//                           value={selectedOptions[rowIndex]?.subAc || 'Dr'}
//                           onChange={(e) => handleChange(e, rowIndex, 'entry')}
//                           className={styles.option__view}
//                         // inputProps={{ style: { display: 'none' } }}
//                         >
//                           <MenuItem value={"Dr"}>Dr</MenuItem>
//                           <MenuItem dense={true} value={"Twenty"}>h</MenuItem>
//                         </Select> */}
//                         <SelectOptionComponent/>
//                       {/* </FormControl> */}
//                     </TableCell>
//                     <TableCell className={styles.tabel__cell}>
//                       {/* <FormControl className={styles.form__view} variant="standard" fullWidth > */}
//                         {/* <Select
//                           value={selectedOptions[rowIndex]?.subAc || 'Dr'}
//                           onChange={(e) => handleChange(e, rowIndex, 'entry')}
//                           className={styles.option__view}
//                           inputProps={{ style: { borderColor: 'red' } }}
//                         >
//                           <MenuItem value={"Dr"}>Dr</MenuItem>
//                           <MenuItem dense={true} value={"Twenty"}>h</MenuItem>
//                         </Select> */}
//                         <SelectOptionComponent/>
//                       {/* </FormControl> */}
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>

//         </Grid>

//         <Grid item xs={12} sm={12} md={3}>
//         </Grid>
//         <Grid item xs={12} sm={12} md={3}>
//           <div className={styles.headerText}>Total Debit</div>
//           <Box className={styles.input__header} mt={2} >
//             {/* <FormControl fullWidth>
//               <TextField id="outlined-basic" label="Enter" variant='standard' />
//             </FormControl> */}
//              <InputComponent/>
//           </Box>
//         </Grid>
//         <Grid item xs={12} sm={12} md={3}>
//           <div className={styles.headerText}>Total Credit</div>
//           <Box className={styles.input__header} mt={2} >
//             {/* <FormControl fullWidth>
//               <TextField id="outlined-basic" label="Enter" variant='standard' />
//             </FormControl> */}
//              <InputComponent/>
//           </Box>
//         </Grid>
//         <Grid item xs={12} sm={12} md={3}>
//           <div className={styles.headerText}>Net</div>
//           <Box className={styles.input__header} mt={2} >
//             {/* <FormControl fullWidth>
//               <TextField id="outlined-basic" label="Enter" variant='standard' />
//             </FormControl> */}
//              <InputComponent/>
//           </Box>
//         </Grid>
//         <Grid className={styles.bottom__view} item xs={12} sm={12} md={12} spacing={2} mt={5}>
//           <Button onClick={handleOpen} className={styles.buttons} variant="contained">Approve</Button>
//           <Button className={styles.button__print} variant="outlined">Print</Button>
//         </Grid>
//         <Modal
//           open={open}
//           onClose={handleClose}
//           aria-labelledby="modal-modal-title"
//           aria-describedby="modal-modal-description"
//         >
//           <Box  className={styles.popup__view}>
//             <Typography id="modal-modal-title" variant="h6" component="h2" mb={2} >
//             Transaction number XX is approved
//             </Typography>
//           <SuccessIcon/>
//           </Box>
//         </Modal>
//       </Grid>
//     </div>
//   );
// };

// export default CorrectionsJV;





