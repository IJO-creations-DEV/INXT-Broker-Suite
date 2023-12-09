import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';

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
                width: '100%',
                display: 'flex',
                alignItems: 'center',
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: 'transparent',
            borderRadius: 30,
          },
          root: {
            backgroundColor: 'white', 
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'transparent',
              borderRadius: 30,
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'transparent',
              borderRadius: 30,
            },
            height: 46, 
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            backgroundColor: 'white', 
            '&:before, &:after': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
              borderRadius: 30,
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
              borderRadius: 30,
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
              borderRadius: 30,
            },
            height: 46, 
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            '&:before': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
              borderRadius: 30,
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
              borderRadius: 30,
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
              borderRadius: 30,
            },
            height: 46, 
          },
        },
      },
    },
  });

export default function Inputfield() {
  const outerTheme = useTheme();

  return (
    <Box
      sx={{
        display: 'grid',
        gap: 2,
      }}
    >
      <ThemeProvider theme={customTheme(outerTheme)}>
        <TextField label="Enter" variant="outlined" />
      </ThemeProvider>
    </Box>
  );
}
