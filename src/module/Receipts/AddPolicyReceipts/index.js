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
import styles from "./styles.module.css";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import SuccessIcon from "../../../assets/icons/SuccessIcon"
import SvgEdit from "../../../assets/icons/SvgEdit";
import { Card } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { dataa } from '../AddPolicyReceipts/data';
import SvgArrow from "../../../assets/icons/SvgArrow";
import SvgDot from '../../../assets/icons/SvgDot';
import { mock } from './mock';
import Inputfield from '../../../components/Inputfield';



const createData = (name, calories, fat, carbs, protein) => {
    return { name, calories, fat, carbs, protein };
};

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
];

const columns = [
    { field: "customerName", headerName: "Receipt Item", width: 110 },
    { field: "branchCode", headerName: "Net Premium", width: 110 },
    { field: "departmentCode", headerName: "Paid", width: 110 },
    { field: "receiptNo", headerName: "Balance", width: 110 },
    { field: "receiptDate", headerName: "DST", width: 110 },
    { field: "paymentType", headerName: "LGT", width: 110 },
    { field: "amount", headerName: "Others", width: 110 },
    { field:"action",headerName: "VAT", width: 110 },
    { field:"ewt",headerName: "EWT", width: 110 }

];
const handleEditClick = (id) => {
    console.log(`Edit clicked for row with ID ${id}`);
};


const AddPolicyReceipts = () => {
    const [age, setAge] = useState('');
    const [selectedOptions, setSelectedOptions] = useState({});
    const defaultDate = dayjs();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [data, setData] = useState(mock);
    const [selectedRows, setSelectedRows] = useState([]);

    const handleFieldChange = (event, rowId, fieldName) => {
        // Handle the change for the "VAT" or "EWF" field
        // You can update the state or perform other logic here
    };
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
            Receipts
        </Typography>,
        <Typography key="3" color="#000" fontSize={16}
            fontWeight={500}>
            Add Receipt
        </Typography>,
    ];
    const colors = ['#FEF3F2', '#FCF5E9', '#F3FFEF', '#DDEEFF', '#F5E8FF'];
    return (
        <div className={styles.container__header}>
            <Grid container spacing={2}>
                <Grid item xs={12} mb={5} >
                    <h1 className={styles.title}> Receipt Details</h1>
                    <Breadcrumbs separator={<SvgDot />} aria-label="breadcrumb" >
                        {breadcrumbs}
                    </Breadcrumbs>
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                    <div className={styles.input__tilte}>Branch</div>
                    <Box className={styles.box__header} mt={2}>
                        <FormControl fullWidth>
                            <TextField />
                        </FormControl>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={12} md={3}>
                    <div className={styles.input__tilte}>Department</div>
                    <Box className={styles.box__header} mt={2} sx={{ minWidth: 120, border: 'none' }}>
                        <FormControl fullWidth>
                            <TextField />
                        </FormControl>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                    <div className={styles.input__tilte}>Coustomer Code</div>
                    <Box className={styles.box__header} mt={2} sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <TextField />
                        </FormControl>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                    <div className={styles.input__tilte}>Remarks</div>
                    <Box className={styles.box__header} mt={2} sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <TextField />
                        </FormControl>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={6} md={6}>
                    <div className={styles.policy__text}>Policy List</div>

                </Grid>
                <Grid style={{ display: 'flex', justifyContent: 'flex-end' }} item xs={6} sm={6} md={6}>
                    <Button className={styles.buttons__edit} >
                        <SvgEdit />
                        <Typography >
                            Exit
                        </Typography>
                    </Button>
                </Grid>

                {/* <Grid item xs={12} sm={12} md={12} mb={2} mt={2}>
                    <TableContainer style={{ overflowX: 'auto', maxWidth: '100%', boxShadow: "none" }} component={Paper}>
                        <Card sx={{ minWidth: 275 }}>

                           
                            <DataGrid
                                rows={dataa}
                                columns={columns}
                                initialState={{
                                    pagination: {
                                        paginationModel: { page: 0, pageSize: 5 },
                                    },
                                }}
                                pageSizeOptions={[5, 10]}
                                checkboxSelection
                                onSelectionModelChange={(selection) => setSelectedRows(selection)}
                            />
                            


                        </Card>
                    </TableContainer>

                </Grid> */}
                <Grid item xs={12} sm={12} md={12} mb={2} mt={2}>
                    <TableContainer style={{ overflowX: 'auto', maxWidth: '100%', boxShadow: "none" }} component={Paper}>
                        <Card sx={{ minWidth: 275 }}>
                            <DataGrid
                                rows={dataa}
                                columns={columns.map((column) => {
                                    if (column.field === "action" || column.field === "ewt") {
                                        return {
                                            ...column,
                                            renderCell: (params) => (
                                                <Inputfield
                                                    value={params.row[column.field]}
                                                    onChange={(event) => handleFieldChange(event, params.row.id, column.field)}
                                                />
                                            ),
                                        };
                                    }
                                    return column;
                                })}
                                pageSizeOptions={[5, 10]}
                                checkboxSelection
                                onSelectionModelChange={(selection) => setSelectedRows(selection)}
                            />
                        </Card>
                    </TableContainer>
                </Grid>

                <Grid item xs={12} sm={12} md={3}>
                </Grid>

                <Grid container spacing={2} p={2}>
                    {data.map((item, index) => (
                        <Grid key={index} item xs={12} sm={6} md={4} lg={2.4}>
                            <FormControl fullWidth >
                                <div
                                    className={styles.box__header__view}
                                    style={{ backgroundColor: colors[index % colors.length] }}
                                >
                                    <Typography p={2} className={styles.cost__title}>{item.title}</Typography>
                                    <Typography pb={2} className={styles.cost__text}>
                                        {item.cost}
                                    </Typography>
                                </div>
                            </FormControl>
                        </Grid>
                    ))}
                </Grid>
                <Grid className={styles.bottom__view} item xs={12} sm={12} md={12} spacing={2} mt={5}>
                    <Button className={styles.button__print} variant="outlined">Exit</Button>
                    <Button onClick={handleOpen} className={styles.buttons} variant="contained">Print</Button>
                </Grid>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box className={styles.popup__view}>
                        <Typography id="modal-modal-title" variant="h6" component="h2" mb={2} >
                            Receipt Number 12345 is
                            generated
                        </Typography>
                        <SuccessIcon />
                    </Box>
                </Modal>
            

            </Grid>
        </div>
    );
};

export default AddPolicyReceipts;








