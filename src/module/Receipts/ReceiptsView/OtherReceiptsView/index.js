import React from 'react'
import SvgFilters from '../../../../assets/Icons/SvgFilters'
import SvgAdd from '../../../../assets/Icons/SvgAdd'
import SvgDot from '../../../../assets/Icons/SvgDot'
import { Breadcrumbs, Button, Grid, Link, Typography } from '@mui/material'
import Styless from './styles.module.css'
import CustomizedInputsStyleOverrides from '../../../../components/Textfield'
const index = () => {
    return (
        <div className={Styless.mainstyle}>
            <div className={Styless.title}>Receipts</div>
            <Breadcrumbs
                aria-label="breadcrumb"
                separator={<SvgDot />}
                className={Styless.breadcrumbss}
            >
                <Link
                    underline="hover"
                    href="/"
                    color="#000000"
                    fontSize={"16px"}
                    fontWeight={"500"}
                >
                    Dashboard
                </Link>
                <Link
                    underline="hover"
                    color="#000000"
                    fontSize={"16px"}
                    fontWeight={"500"}
                    href="/material-ui/getting-started/installation/"
                >
                    Accounts
                </Link>
                <Link
                    underline="hover"
                    color="#000000"
                    fontSize={"16px"}
                    fontWeight={"500"}
                    href="/material-ui/react-breadcrumbs/"
                    aria-current="page"
                >
                    Receipts
                </Link>
                <Link
                    underline="hover"
                    color="#000000"
                    fontSize={"16px"}
                    fontWeight={"500"}
                    href="/material-ui/react-breadcrumbs/"
                    aria-current="page"
                >
                    Receipt Details
                </Link>
            </Breadcrumbs>
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={2.4} >
                        <Typography>
                            Branch
                        </Typography>
                        <CustomizedInputsStyleOverrides />
                    </Grid>
                    <Grid item xs={2.4} >
                        <Typography>
                            Branch
                        </Typography>
                        <CustomizedInputsStyleOverrides />
                    </Grid>
                    <Grid item xs={2.4} >
                        <Typography>
                            Branch
                        </Typography>
                        <CustomizedInputsStyleOverrides />
                    </Grid>
                    <Grid item xs={2.4} >
                        <Typography>
                            Branch
                        </Typography>
                        <CustomizedInputsStyleOverrides />
                    </Grid>
                    <Grid item xs={2.4} >
                        <Typography>
                            Branch
                        </Typography>
                        <CustomizedInputsStyleOverrides />
                    </Grid>

                </Grid>
                <div>
                    <Typography>
                        Payment Details
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Typography>
                                Receipt Number
                            </Typography>
                            <CustomizedInputsStyleOverrides />

                        </Grid>
                        <Grid item xs={4}>
                            <Typography>
                                Receipt Date
                            </Typography>
                            <CustomizedInputsStyleOverrides />

                        </Grid><Grid item xs={4}>
                            <Typography>
                                Payment Type
                            </Typography>
                            <CustomizedInputsStyleOverrides />

                        </Grid><Grid item xs={4}>
                            <Typography>
                                Card Number
                            </Typography>
                            <CustomizedInputsStyleOverrides />

                        </Grid><Grid item xs={4}>
                            <Typography>
                                Total Payment
                            </Typography>
                            <CustomizedInputsStyleOverrides />

                        </Grid>
                    </Grid>
                </div>

            </div>
            <div>
                <Button>
                    Exit
                </Button>
                <Button>
                    Print
                </Button>
            </div>
        </div>
    )
}

export default index