import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import styles from "./styles.module.css";
import SvgLogoIcon from '../../assets/Icons/SvgLogoIcon';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { Button, FormControl } from '@mui/base';
import SvgWhiteLogo from '../../assets/Icons/SvgWhiteLogo';

const Login = () => {
    return (
        <Grid mt={0} container spacing={2}>
            <Grid className={styles.container__header} xs={12} sm={12} md={8}   >
                <Box marginTop={"60%"}>
                    {/* <div style={{display:'grid',justifyContent:'center',alignItems:'center'}}> */}
                    <div mt={5} className={styles.side__logo}>
                        <Typography mt={1} className={styles.welcome__text}>
                            Welcome to
                        </Typography>
                        <SvgWhiteLogo />
                        <Typography
                            className={styles.logo__cover___white}
                            mt={1}
                        >
                            Cover
                        </Typography>
                    </div>

                    <Typography className={styles.welcome__content}>
                        A productive finance dashboard for all your needs
                    </Typography>
                        {/* </div> */}
                </Box>
            </Grid>
            <Grid xs={12} sm={12} md={4}    >
                <Grid xs={12} sm={12} md={12} p={5} mt={5}>
                    <Box className={styles.side__logo}>
                        <SvgLogoIcon />
                        <Typography
                            className={styles.logo__cover}
                            mt={1}
                        >
                            Cover
                        </Typography>

                    </Box>
                    <Typography
                        className={styles.login__text}
                        mt={5}
                    >
                        Login
                    </Typography>
                    <Typography
                        className={styles.dont__have__account}
                        mt={1}
                    >
                        Don’t have an account? <span className={styles.regiater__view}> Register</span>
                    </Typography>
                </Grid>
                <Grid xs={12} sm={12} md={12} pl={5} pr={5} >
                    <FormControl fullWidth>
                        <TextField
                            placeholder='Email Address'
                            className={styles.text__field}
                        />
                    </FormControl>
                </Grid>

                <Grid xs={12} sm={12} md={12} pl={5} pr={5} mt={3}>
                    <TextField
                        placeholder='Password'
                        className={styles.text__field}
                    />
                </Grid>

                <Grid xs={12} sm={12} md={12} pl={5} pr={5} mt={3}>
                    <Button className={styles.login__btn}>
                        Login
                    </Button>
                </Grid>
                <Grid xs={12} sm={12} md={12} pl={5} pr={5} mt={3}>
                    <Typography className={styles.forget__text}>
                        Forgot password?
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Login