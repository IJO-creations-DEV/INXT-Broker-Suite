import * as React from 'react';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

const customTheme = (outerTheme) =>
    createTheme({
        palette: {
            mode: outerTheme.palette.mode,
        },
        components: {
            MuiTextField: {
                styleOverrides: {
                    root: {
                        '--TextField-brandBorderColor': '#E0E3E7',
                        '--TextField-brandBorderHoverColor': '#B2BAC2',
                        '--TextField-brandBorderFocusedColor': '#6F7E8C',
                        '& label.Mui-focused': {
                            color: 'var(--TextField-brandBorderFocusedColor)',
                        },
                    },
                },
            },
            MuiOutlinedInput: {
                styleOverrides: {
                    notchedOutline: {
                       // borderColor: 'var(--TextField-brandBorderColor)',
                        borderRadius: 30,
                    },
                    root: {
                        [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                            borderColor: 'var(--TextField-brandBorderHoverColor)',
                            borderRadius: 30,
                        },
                        [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
                            borderColor: 'var(--TextField-brandBorderFocusedColor)',
                            borderRadius: 30,
                        },
                    },
                },
            },
        },
    });

export default function SelectComponent() {
    const outerTheme = useTheme();

    return (
        <Box
            sx={{
                display: 'grid',
                // gridTemplateColumns: { sm: '1fr 1fr 1fr' },
                gap: 2,
            }}
        >
            <ThemeProvider theme={customTheme(outerTheme)}>
<<<<<<< Updated upstream
                <Select value={"select"}>
=======
                <Select value={"select"} label="Enter" >
                    
>>>>>>> Stashed changes
                    <MenuItem value="option1">Option 1</MenuItem>
                    <MenuItem value="option2">Option 2</MenuItem>
                    <MenuItem value="option3">Option 3</MenuItem>
                </Select>
            </ThemeProvider>
        </Box>
    );
}