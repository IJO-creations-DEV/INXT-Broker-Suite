import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
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
import { DateField } from '@mui/x-date-pickers/DateField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import styles from "./reversal.module.css";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import SuccessIcon from "../../assets/icons/SuccessIcon"
import SvgDeleteIcon from '../../assets/icons/SvgDeleteIcon';
import SvgEditIcon from '../../assets/icons/SvgEditIcon';
import CalendarField from '../../components/DateComponent';
import SelectOptionComponent from '../../components/SelectOption';
import Inputfield from '../../components/Inputfield';
import SvgDot from '../../assets/icons/SvgDot';


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
const Reversals = () => {
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
    borderRadius: 5,
    textAlign: 'center'
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
      Reversals JV
    </Typography>,
  ];
  return (
    <div className={styles.container__header}>
      <Grid container spacing={2}>
        <Grid item xs={12} mb={5} >
          <h1 className={styles.title}>Reversals JV</h1>
          <Breadcrumbs separator={<SvgDot />} aria-label="breadcrumb" >
            {breadcrumbs}
          </Breadcrumbs>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <div className={styles.headerText}>Date</div>
          <Box className={styles.box__header} mt={2}>
            <CalendarField />
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={3}>
          <div className={styles.headerText}>Division Code</div>
          <Box className={styles.box__header} mt={2} sx={{ minWidth: 120, border: 'none' }}>
            <SelectOptionComponent value={"hii"} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <div className={styles.headerText}>Department Code</div>
          <Box className={styles.box__header} mt={2} sx={{ minWidth: 120 }}>
            <SelectOptionComponent value={"hii"} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <div className={styles.headerText}>Transaction Number</div>
          <Box className={styles.box__header} mt={2} sx={{ minWidth: 120 }}>
            <SelectOptionComponent />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={2}>
          <div className={styles.headerText}>Tnx Code</div>
          <Box className={styles.box__header} mt={2} sx={{ minWidth: 120 }}>
            <SelectOptionComponent />

          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <div className={styles.headerText}>Description</div>
          <Box className={styles.input__header} mt={2} >
            <FormControl fullWidth>
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
                      <TableCell key={column.field} sx={index !== columns.length - 1 ? { padding: 0, textAlign: 'center' } : {}}>
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
                            <Inputfield value={row.remarks} />
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

          </Box>

        </Grid>

        <Grid item xs={12} sm={12} md={3}>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <div className={styles.headerText}>Total Debit</div>
          <Box className={styles.input__header} mt={2} >
            <FormControl fullWidth>
              <Inputfield />
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <div className={styles.headerText}>Total Credit</div>
          <Box className={styles.input__header} mt={2} >
            <FormControl fullWidth>
              <Inputfield />
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
        </Grid>
        <Modal
          open={open}
          // onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className={styles.popup__view}>
            <Typography className={styles.approved__text} id="modal-modal-title" variant="h5" component="h2">
              Approved
            </Typography>
            <Grid container mt={3} justifyContent={"center"} alignItems={"center"} >
              <Grid item xs={5} sm={6} md={6}>
                <Box mr={2} className={styles.input__header} mt={2}>
                  <FormControl fullWidth>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DateField
                        className={styles.date}
                        variant="outlined"
                        label="Basic date field"
                      />
                    </LocalizationProvider>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={5} sm={6} md={6}>
                <Box ml={2} className={styles.input__header} mt={2}>
                  <FormControl fullWidth>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DateField
                        className={styles.date}
                        variant="outlined"
                        label="Basic date field"
                      />
                    </LocalizationProvider>
                  </FormControl>
                </Box>
              </Grid>
              <Grid mt={5} item xs={3} sm={3} md={3}>
                <Box className={styles.input__header} mt={2} >
                  <FormControl fullWidth>
                    <TextField
                      label="Text Code"
                      id="filled-size-small"
                      defaultValue="Small"
                      variant="outlined"
                    // size="small"
                    />
                  </FormControl>

                </Box>

              </Grid>
              <Grid mt={5} item xs={7} sm={9} md={9}>
                <Box className={styles.input__header} mt={2} >
                  <FormControl fullWidth>
                    <TextField
                      label="Description"
                      id="filled-size-small"
                      defaultValue="Small"
                      variant="outlined"
                    // size="small"
                    />
                  </FormControl>
                </Box>
              </Grid>
              <Grid mt={5} className={styles.popup__button__view} item xs={12} sm={12} md={12}>
                <Button onClick={handleClose} className={styles.popup__button} variant="outlined">Close</Button>
              </Grid>
            </Grid>
          </Box>

        </Modal>
      </Grid>
    </div>
  );
};

export default Reversals;


